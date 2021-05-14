import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CartComponent } from "./cart/cart.component";
import { CheckoutComponent } from "./checkout/checkout.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { ProductsComponent } from "./products/products.component";


const routes: Routes = [
  { path: '' , redirectTo: '/products' ,pathMatch: 'full'},
  { path: 'products' , component: ProductsComponent },
  { path: 'product/:productId', component: ProductDetailComponent },
  { path: 'cart', component: CartComponent },
  { path: 'checkout' , component: CheckoutComponent}
]


@NgModule({
  imports: [
    RouterModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule{

}