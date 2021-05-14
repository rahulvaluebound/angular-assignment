import { Component, OnInit } from '@angular/core';
import { Cart } from "../Cart";
import { Product } from "../Product";
import { EcommerceService } from "../ecommerce.service";
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  carts: Cart[];
  products: Product[]=[];
  constructor(private ecommerceService:EcommerceService) {  }

  

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
              }); 
          });
        });
      });
  }

  onSubmit(title) {
    alert(title + " removed from your cart");
  }
  

}
