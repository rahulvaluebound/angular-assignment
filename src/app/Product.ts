export class Product{
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  quantity?: number;
  constructor(id, title, price, category, description, image,quantity) {
  this.id = id;
  this.title = title;
  this.price = price;
  this.category = category;
  this.description = description;
  this.image = image;
    this.quantity=quantity
  }    
}