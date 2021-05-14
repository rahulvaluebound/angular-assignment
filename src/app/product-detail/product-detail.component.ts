import { Component, OnInit } from '@angular/core';
import { Product } from "../Product";
import { EcommerceService } from "../ecommerce.service";
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product;
  constructor(private route: ActivatedRoute, private eccomerceService: EcommerceService) { }

  ngOnInit(): void {
    let product_id = this.route.snapshot.paramMap.get('productId');
    fetch('https://fakestoreapi.com/products/'+product_id)
            .then(res=>res.json())
            .then(json=>this.product=json)
  }

  onSubmit() {
    alert("Your item successfully added in cart");
  }

}
