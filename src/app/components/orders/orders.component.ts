import { OrdersService } from './../../shared/services/orders.service';
import { Component } from '@angular/core';
import { InboxService } from '../../shared/services/inbox.service';
import { ProductsService } from '../../shared/services/products.service';
import { Product } from '../../shared/interfaces/product';
import { Order } from '../../shared/interfaces/order';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css',
})
export class OrdersComponent {
  constructor(
    private _ProductsService: ProductsService,
    private InboxService: InboxService,
    private OrdersService: OrdersService
  ) {}
  ordres: Order[] = [];
  detailsProduct: number = 0;
  detailsActive: boolean = false;
  searchTerm = '';
  accepted = false;
  ngOnInit(): void {
    this.OrdersService.getOrders().subscribe({
      next: (res) => {
        console.log(res);

        this.ordres = res.orders;
      },
    });
  }
}
