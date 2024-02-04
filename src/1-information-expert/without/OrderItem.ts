import Pizza from "./Pizza";

export default class OrderItem {
  readonly pizza: Pizza;
  readonly quantity: number;
  readonly unitPrice: number;

  constructor(pizza: Pizza, quantity: number, unitPrice: number) {
    this.pizza = pizza;
    this.quantity = quantity;
    this.unitPrice = unitPrice;
  }
}

/*
Erreurs : 
- classe sans méthode
*/
