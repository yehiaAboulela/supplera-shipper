import { HomeComponent } from './components/home/home.component';
import { AuthLayoutComponent } from './components/auth-layout/auth-layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { BlankLayoutComponent } from './components/blank-layout/blank-layout.component';
import { ChoosComponent } from './components/choos/choos.component';
import { OrdersComponent } from './components/orders/orders.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: BlankLayoutComponent,
    children: [
      { path: '', redirectTo: 'choose', pathMatch: 'full' },
      { path: 'choose', component: ChoosComponent },
      { path: 'userSell', component: HomeComponent },
      {
        path: 'orders',
        component: OrdersComponent,
      },
      { path: 'orders/:id', component: OrderDetailsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
