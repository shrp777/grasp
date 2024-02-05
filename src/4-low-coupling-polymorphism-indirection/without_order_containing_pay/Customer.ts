import Order from "./Order";
import { v4 as uuid } from "uuid";

export default class Customer {
  readonly id: string;
  readonly orders: Array<Order> = [];

  constructor() {
    this.id = uuid();
  }
}
