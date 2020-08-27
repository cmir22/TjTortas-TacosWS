import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from '../app/home/home.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MenuComponent } from './menu/menu.component';
import { TacosComponent} from './menu/tacos/tacos.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CartProductComponent } from './cart-product/cart-product.component';
import { ProductComponent } from './product/product.component'
 

let MatApis = [
  MatToolbarModule,
  MatCardModule,
  MatButtonModule,
  MatDividerModule,
  MatSidenavModule

]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    MenuComponent,
    TacosComponent,
    ShoppingCartComponent,
    CartProductComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatApis
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
