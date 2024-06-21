import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthLayoutComponent } from './components/auth-layout/auth-layout.component';
import { BlankLayoutComponent } from './components/blank-layout/blank-layout.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NavComponent } from './components/nav/nav.component';
import { MessagesComponent } from './components/messages/messages.component';
import { SearchPipe } from './shared/pipes/search.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChoosComponent } from './components/choos/choos.component';
import { OrdersComponent } from './components/orders/orders.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthLayoutComponent,
    BlankLayoutComponent,
    LoginComponent,
    HomeComponent,
    NavComponent,
    MessagesComponent,
    SearchPipe,
    ChoosComponent,
    OrdersComponent,
    OrderDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
