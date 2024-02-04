import OrderItem from "./OrderItem";

export default class Order {
  readonly date: Date;
  readonly items: Array<OrderItem> = [];

  constructor(items: Array<OrderItem>) {
    this.date = new Date();
    this.items = items;
  }
}

/*
Erreurs : 
- classe sans méthode
*/
