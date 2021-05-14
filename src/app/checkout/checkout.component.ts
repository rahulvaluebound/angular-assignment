import { Component, OnInit } from '@angular/core';
import { Cart } from '../Cart';
import { Delivery } from "../Delivery";
import { Product } from '../Product';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  carts: Cart[];
  deliveryType = ['standard', 'faster delivery'];
  totalPrice: number = 0;
  
  details = new Delivery("", "", this.deliveryType[0]);
  constructor() { }

  ngOnInit(): void {
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
                this.totalPrice += product.price*item.quantity
                //console.log(this.totalPrice);
                this.totalPrice=Math.ceil(this.totalPrice);
                
              });
              
          });
        });
      });
      
  }
  onSubmit() {
    if (this.details.name == "" || this.details.address == "" || this.details.contact == "") {
      alert("All fields are required");
      return;
    }
    if (this.details.contact.length != 10) {
      alert("Contact number should be of 10 digits");
      return;
    }
    if (this.details.deliveryType == 'standard') {
      this.details.price = this.totalPrice;
    } else {
      this.details.price = this.totalPrice+10;
    }
    alert("Congratulations! Your order is successfully placed. Payble amount is : Rupees " +this.details.price);
  }

}
