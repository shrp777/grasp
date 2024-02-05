import Pizza from "./Pizza";

export default class OrderItem {
  readonly pizza: Pizza;
  readonly quantity: number;
  readonly unitPrice: number;
  readonly amount: number;
  readonly vat: number;

  constructor(
    pizza: Pizza,
    quantity: number,
    unitPrice: number,
    vat: number = 20
  ) {
    this.pizza = pizza;
    this.quantity = quantity;

    this.unitPrice = unitPrice; //mieux
    //Est-il préférable de faire référence à l'attribut price de Pizza
    //ou récupérer la valeur en argument de constructeur ?

    //this.unitPrice = pizza.price;
    //danger -> le prix peut évoluer après la commande
    //il est préférable de récupérer un tarif déterminé à l'instant T
    //plutôt que de faire de référence dynamiquement au tarif

    this.vat = vat;

    this.amount = this.calculateAmount();
  }

  calculateAmount(): number {
    return this.unitPrice * this.quantity;
  }
}
