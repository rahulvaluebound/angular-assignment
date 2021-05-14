export class Delivery{
  address: string;
  name: string;
  contact?: string;
  deliveryType?: string;
  price?: number;
  constructor(address,name,deliveryType?,contact?,price?) {
    this.address = address;
    this.name = name;
    this.contact = contact;
    this.price = price;
    this.deliveryType = deliveryType;
  }
}