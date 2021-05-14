export class Cart{
  id: number;
  userId: number;
  date: string;
  products: Array<Products>;
  constructor(id, userId, date, products) {
  this.id = id;
  this.userId = userId;
  this.date = date;
  this.products = products;
  }    
}
export class Products{
  productId: number;
  quantity: number;
  constructor(productId, quantity) {
    this.productId = productId;
    this.quantity = quantity;
  }

}