import Order from "./Order";
import OrderItem from "./OrderItem";
import Pizza from "./Pizza";

const margherita: Pizza = new Pizza("Margherita", 8);
const quattroStagioni: Pizza = new Pizza("Quattro Stagioni", 11);
const quattroFormaggi: Pizza = new Pizza("Quattro Formaggi", 12);
const regina: Pizza = new Pizza("Regina", 10);
const ortolana: Pizza = new Pizza("Ortolana", 10);
const diavola: Pizza = new Pizza("Diavola", 10);

const order = new Order([
  new OrderItem(margherita, 2, margherita.price),
  new OrderItem(quattroStagioni, 1, quattroStagioni.price)
]);

console.assert(order.amount === 27); //true

console.log(order.amount); //27
