import Order from "./Order";
import { v4 as uuid } from "uuid";
import ApplePay from "./payment-methods/ApplePay";
import BankCard from "./payment-methods/BankCard";

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

  pay(order: Order, paymentMethod: PaymentMethod) {
    switch (paymentMethod) {
      case PaymentMethod.ApplePay:
        const applePay = new ApplePay();
        if (applePay.processOrder(order)) {
          order.paymentStatus = 1;
          order.paymentMethod = paymentMethod;
          this.orders.push(order);
        }
        break;
      case PaymentMethod.BankCard:
        const bankCard = new BankCard();
        if (bankCard.processOrder(order)) {
          order.paymentStatus = 1;
          order.paymentMethod = paymentMethod;
          this.orders.push(order);
        }
        break;
      case PaymentMethod.Paypal:
        const paypal = new ApplePay();
        if (paypal.processOrder(order)) {
          order.paymentStatus = 1;
          order.paymentMethod = paymentMethod;
          this.orders.push(order);
        }
        break;

      default:
        break;
    }

    this.orders.push(order);
  }
}

/*
Erreurs : 
- Non applicaton du concept Low Coupling
- Order a une forte dépendance avec les différents moyens de paiement
*/
