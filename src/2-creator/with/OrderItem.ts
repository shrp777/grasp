import IProduct from "./IProduct";

export default class OrderItem {
  readonly product: IProduct;
  readonly quantity: number;
  readonly unitPrice: number;
  readonly amount: number;

  constructor(product: IProduct, quantity: number, unitPrice: number) {
    this.product = product;
    this.quantity = quantity;
    this.unitPrice = unitPrice;
    this.amount = this.calculateAmount();
  }

  //application du principe Information Expert
  calculateAmount(): number {
    return this.unitPrice * this.quantity;
  }
}
