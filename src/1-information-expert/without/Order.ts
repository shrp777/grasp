import OrderItem from "./OrderItem";

export default class Order {
  readonly date: Date;
  readonly orderItems: Array<OrderItem> = [];
  readonly amount: number;

  constructor(orderItems: Array<OrderItem>) {
    this.date = new Date();
    this.orderItems = orderItems;
    this.amount = this.calculateAmount();
  }

  calculateAmount(): number {
    //return this.items.reduce((acc, item) => acc + item.amount, 0);
    //il est préférable de laisser à OrderItem la responsabilité de calculer le montant plutôt que d'interférer directement
    return this.orderItems.reduce(
      (acc, item) => acc + item.calculateAmount(),
      0
    );
  }
}
