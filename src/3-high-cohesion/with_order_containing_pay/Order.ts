import Customer from "./Customer";
import OrderItem from "./OrderItem";
import Pizza from "./Pizza";
import { v4 as uuid } from "uuid";

import ApplePay from "./payment-methods/ApplePay";
import BankCard from "./payment-methods/BankCard";
import Paypal from "./payment-methods/Paypal";

export enum PaymentMethod {
  "BankCard",
  "Paypal",
  "ApplePay"
}

interface LineOrder {
  pizza: Pizza;
  quantity: number;
  unitPrice: number;
}

export default class Order {
  readonly customer: Customer;
  readonly id: string;
  readonly date: Date;
  readonly amount: number;
  readonly items: Array<OrderItem> = [];
  protected _paymentStatus: number = 0;
  protected _paymentMethod?: string;

  constructor(customer: Customer, ...linesOrder: Array<LineOrder>) {
    this.customer = customer;
    this.id = uuid();
    this.date = new Date();
    this._paymentStatus = 0;

    //application du principe Creator : seul Order doit être en mesure de créer des instances de OrderItem
    //car seul Order manipule des objets de type OrderItem
    this.items = linesOrder.map(
      (lineOrder) =>
        new OrderItem(lineOrder.pizza, lineOrder.quantity, lineOrder.unitPrice)
    );

    this.amount = this.calculateAmount();
  }

  get paymentStatus(): number {
    return this._paymentStatus;
  }

  get paymentMethod(): string {
    return this._paymentMethod!;
  }

  calculateAmount(): number {
    return this.items.reduce((acc, item) => acc + item.amount, 0);
  }

  pay(paymentMethod: PaymentMethod) {
    switch (paymentMethod) {
      case PaymentMethod.ApplePay:
        const applePay = new ApplePay();
        if (applePay.processOrder(this)) {
          this._paymentStatus = 1;
          this._paymentMethod = "ApplePay";
          this.customer.orders.push(this);
          return true;
        }
        break;
      case PaymentMethod.BankCard:
        const bankCard = new BankCard();
        if (bankCard.processOrder(this)) {
          this._paymentStatus = 1;
          this._paymentMethod = "BankCard";
          this.customer.orders.push(this);
        }
        break;
      case PaymentMethod.Paypal:
        const paypal = new Paypal();
        if (paypal.processOrder(this)) {
          this._paymentStatus = 1;
          this._paymentMethod = "Paypal";
          this.customer.orders.push(this);
        }
        break;

      default:
        break;
    }
  }
}
