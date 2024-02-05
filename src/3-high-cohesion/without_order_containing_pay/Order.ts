import Customer from "./Customer";
import OrderItem from "./OrderItem";
import Pizza from "./Pizza";
import { v4 as uuid } from "uuid";

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

  //application du principe Information Expert
  calculateAmount(): number {
    return this.items.reduce((acc, item) => acc + item.amount, 0);
  }

  payWithPayPal(): boolean {
    this._paymentStatus = 1;
    this._paymentMethod = "Paypal";
    this.customer.orders.push(this);
    return true;
  }
  payWithApplePay(): boolean {
    this._paymentStatus = 1;
    this._paymentMethod = "ApplePay";
    this.customer.orders.push(this);
    return true;
  }
  payWithBankCard(): boolean {
    this._paymentStatus = 1;
    this._paymentMethod = "BankCard";
    this.customer.orders.push(this);
    return true;
  }
}
