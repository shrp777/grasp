import Order from "./Order";
import Pizza from "./Pizza";

const margherita: Pizza = new Pizza("Margherita", 8);
const quattroStagioni: Pizza = new Pizza("Quattro Stagioni", 11);
const quattroFormaggi: Pizza = new Pizza("Quattro Formaggi", 12);
const regina: Pizza = new Pizza("Regina", 10);
const ortolana: Pizza = new Pizza("Ortolana", 10);
const diavola: Pizza = new Pizza("Diavola", 10);

//on délègue la responsabilité à Order de s'organiser en interne à partir de données brutes
//plutôt que de le constituer depuis l'extérieur
//préserver la connaissance métier au sein de Order plutôt de la disperser
const order = new Order(
  { product: margherita, quantity: 2, unitPrice: margherita.price },
  { product: quattroStagioni, quantity: 1, unitPrice: quattroStagioni.price }
);

const amount = order.calculateAmount();

console.assert(order.amount === 27); //true

console.log(order.amount); //27
