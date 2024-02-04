import Pizza from "./Pizza";

export default class OrderItem {
  readonly pizza: Pizza;
  readonly quantity: number;
  readonly unitPrice: number;
  readonly amount: number;

  constructor(pizza: Pizza, quantity: number, unitPrice: number) {
    this.pizza = pizza;
    this.quantity = quantity;
    this.unitPrice = unitPrice;
    this.amount = this.calculateAmount();
  }

  //application du principe Information Expert
  calculateAmount(): number {
    return this.unitPrice * this.quantity;
  }
}
