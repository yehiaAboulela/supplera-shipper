import { Component } from '@angular/core';
import { InboxService } from '../../shared/services/inbox.service';
import { ProductsService } from '../../shared/services/products.service';
import { Product } from '../../shared/interfaces/product';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
})
export class MessagesComponent {
  constructor(
    private _ProductsService: ProductsService,
    private InboxService: InboxService
  ) {}
  products: Product[] = [];
  detailsProduct: number = 0;
  detailsActive: boolean = false;
  currentImg = 0;
  searchTerm = '';
  ngOnInit(): void {
    this._ProductsService.getProducts().subscribe({
      next: (res: { message: string; products: Product[] }) => {
        this.products = res.products.filter(
          (cur) => cur.reviwedByAdmin && !cur.reviwedByShipper && !cur.spam
        );
      },
    });
  }

  openDetails(index: number) {
    this.detailsProduct = index;
    this.detailsActive = true;
  }
  changeImg(index: number) {
    this.currentImg = index;
  }

  sendToAdmin(body: any, id: string) {
    this._ProductsService.editProduct(body, id).subscribe({
      next: () => {
        this._ProductsService.getProducts().subscribe({
          next: (res: { message: string; products: Product[] }) => {
            this.InboxService.inboxData.next(res.products);
            this.products = res.products.filter(
              (cur) => cur.reviwedByAdmin && !cur.reviwedByShipper && !cur.spam
            );
          },
        });
      },
    });
  }
}
