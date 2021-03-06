import { Component } from '@angular/core';
import { Cart } from "./Cart";
import { Product } from "./Product";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ecommerce';
  carts: Cart[];
  products: Product[]=[];
  noOfProductInCart: number = 0;

  ngOnInit(): void {
    //fetching all carts
    fetch('https://fakestoreapi.com/carts')
      .then(res => res.json())
      .then((json) => {
        this.carts = json;
        //fetching product_id from each cart and adding it int product array
        this.carts.forEach((element) => {
          element.products.forEach((item) => {
            let product: Product;
            //fetching product of every product id
            fetch('https://fakestoreapi.com/products/' + item.productId)
              .then(res => res.json())
              .then((json) => {
                product = json
                //adding quantities
                product.quantity = item.quantity
                this.products.push(product);
                this.noOfProductInCart = this.products.length;
              });
          });
        });
      });
  }
}
