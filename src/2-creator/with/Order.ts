import OrderItem from "./OrderItem";
import Pizza from "./Pizza";

interface LineOrder {
  pizza: Pizza;
  quantity: number;
  unitPrice: number;
}

export default class Order {
  readonly date: Date;
  readonly amount: number;
  readonly items: Array<OrderItem> = [];

  constructor(...linesOrder: Array<LineOrder>) {
    this.date = new Date();

    //application du principe Creator : seul Order doit être en mesure de créer des instances de OrderItem
    //car seul Order manipule des objets de type OrderItem
    this.items = linesOrder.map(
      (lineOrder) =>
        new OrderItem(lineOrder.pizza, lineOrder.quantity, lineOrder.unitPrice)
    );

    this.amount = this.calculateAmount();
  }

  //application du principe Information Expert
  calculateAmount(): number {
    return this.items.reduce((acc, item) => acc + item.amount, 0);
  }
}
