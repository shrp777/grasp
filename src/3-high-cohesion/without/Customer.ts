import Order from "./Order";
import { v4 as uuid } from "uuid";

export default class Customer {
  readonly id: string;
  readonly orders: Array<Order> = [];

  constructor() {
    this.id = uuid();
  }

  payWithPayPal(order: Order) {
    order.paymentStatus = 1;
    order.paymentMethod = "Paypal";
    this.orders.push(order);
  }
  payWithApplePay(order: Order) {
    order.paymentStatus = 1;
    order.paymentMethod = "ApplePay";
    this.orders.push(order);
  }
  payWithBankCard(order: Order) {
    order.paymentStatus = 1;
    order.paymentMethod = "BankCard";
    this.orders.push(order);
  }
}

/*
Erreurs : 
- Non applicaton du concept High Cohesion
- La multiplication des méthodes de paiement génère du code dupliqué
*/
