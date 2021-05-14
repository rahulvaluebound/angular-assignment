import { Component, OnInit } from '@angular/core';
import { Product } from "../Product";

import { EcommerceService } from "../ecommerce.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  
  products: Product[];
  constructor(private ecommerceService: EcommerceService) {
    
      
  }

  ngOnInit(): void {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then((json) => {
        this.products = json;
        this.products.sort((a, b) => {
          return b.price - a.price;
        })
      });
  }
}
