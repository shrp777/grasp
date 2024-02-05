import Order from "./Order";
import { v4 as uuid } from "uuid";

export default class Customer {
  readonly id: string;
  readonly orders: Array<Order> = [];

  constructor() {
    this.id = uuid();
  }
}

/*
Erreurs : 
- Non applicaton du concept High Cohesion
- La multiplication des méthodes de paiement génère du code dupliqué
*/
