import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component'
import { MenuComponent } from './menu/menu.component'

import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component'
 
 

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'navBar', component: NavBarComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'cart', component: ShoppingCartComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
