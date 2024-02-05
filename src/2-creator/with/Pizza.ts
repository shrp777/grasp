import IProduct from "./IProduct";

export default class Pizza implements IProduct {
  readonly name: string;
  readonly price: number;
  readonly vat: number = 20;

  constructor(name: string, price: number, vat: number = 20) {
    this.name = name;
    this.price = price;
    this.vat = vat;
  }
}
