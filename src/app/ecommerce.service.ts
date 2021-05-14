import { Injectable } from '@angular/core';
import { Product } from "./Product";
@Injectable({
  providedIn: 'root'
})
export class EcommerceService {

  constructor() { }

  getProduct():Product[] {
    let products: Product[];
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => console.log(json));
    return products;
  }
}
