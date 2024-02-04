import OrderItem from "./OrderItem";

export default class Order {
  readonly date: Date;
  readonly amount: number;
  readonly items: Array<OrderItem> = [];

  constructor(items: Array<OrderItem>) {
    this.date = new Date();
    this.items = items;
    this.amount = this.calculateAmount();
  }

  //application du principe Information Expert
  calculateAmount(): number {
    return this.items.reduce((acc, item) => acc + item.amount, 0);
  }
}
