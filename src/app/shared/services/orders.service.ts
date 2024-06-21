import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenService } from './token.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  constructor(
    private http: HttpClient,
    private _GetTokenService: TokenService
  ) {}
  token = this._GetTokenService.token;
  getOrders(): Observable<any> {
    return this.http.get(`http://localhost:3000/order/`, {
      headers: this.token,
    });
  }
  getSpicificOrder(id: string): Observable<any> {
    return this.http.get(`http://localhost:3000/order/${id}`, {
      headers: this.token,
    });
  }
}
