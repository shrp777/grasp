import Customer from "./Customer";
import OrderItem from "./OrderItem";
import Pizza from "./Pizza";
import { v4 as uuid } from "uuid";

import IPaymentMethod from "./payment-methods/IPaymentMethod";

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

  pay(paymentMethod: IPaymentMethod) {
    if (paymentMethod.processOrder(this.id, this.amount)) {
      this._paymentStatus = 1;
      this._paymentMethod = paymentMethod.name;
      this.customer.orders.push(this);
    }
  }
}
