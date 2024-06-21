import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrdersService } from '../../shared/services/orders.service';
import { Order } from '../../shared/interfaces/order';
import { jwtDecode } from 'jwt-decode';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrl: './order-details.component.css',
})
export class OrderDetailsComponent implements OnInit {
  constructor(
    private ActivatedRoute: ActivatedRoute,
    private OrdersService: OrdersService,
    private AuthService: AuthService
  ) {}
  order: Order = {} as Order;
  user = null;
  ngOnInit(): void {
    this.ActivatedRoute.params.subscribe({
      next: (data) => {
        this.OrdersService.getOrders().subscribe({
          next: (res: { message: string; orders: Order[] }) => {
            this.order = res.orders.filter((cur) => cur._id == data['id'])[0];
            this.user = jwtDecode(this.order.userToken);
            console.log(this.user);
          },
        });
      },
    });
  }
}
