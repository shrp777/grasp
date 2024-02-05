import Customer from "./Customer";
import Order, { PaymentMethod } from "./Order";
import Pizza from "./Pizza";

const margherita: Pizza = new Pizza("Margherita", 8);
const quattroStagioni: Pizza = new Pizza("Quattro Stagioni", 11);
const quattroFormaggi: Pizza = new Pizza("Quattro Formaggi", 12);
const regina: Pizza = new Pizza("Regina", 10);
const ortolana: Pizza = new Pizza("Ortolana", 10);
const diavola: Pizza = new Pizza("Diavola", 10);

const customer = new Customer();

const order = new Order(
  customer,
  { pizza: margherita, quantity: 2, unitPrice: margherita.price },
  { pizza: quattroStagioni, quantity: 1, unitPrice: quattroStagioni.price }
);

order.pay(PaymentMethod.ApplePay);
