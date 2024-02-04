import Order from "./Order";
import { v4 as uuid } from "uuid";
import ApplePay from "./payment-methods/ApplePay";
import BankCard from "./payment-methods/BankCard";
import IPaymentMethod from "./payment-methods/IPaymentMethod";

export enum PaymentMethod {
  "BankCard",
  "Paypal",
  "ApplePay"
}

export default class Customer {
  readonly id: string;
  readonly orders: Array<Order> = [];

  constructor() {
    this.id = uuid();
  }

  pay(order: Order, paymentMethod: IPaymentMethod) {
    if (paymentMethod.processOrder(order.id, order.amount)) {
      order.paymentStatus = 1;
      order.paymentMethod = paymentMethod.name;
      this.orders.push(order);
    }
  }
}

/*
Erreurs : 
- Non applicaton du concept Low Coupling
- Order a une forte dépendance avec les différents moyens de paiement
*/
