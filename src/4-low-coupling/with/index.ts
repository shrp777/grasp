import Customer, { PaymentMethod } from "./Customer";
import Order from "./Order";
import Pizza from "./Pizza";
import BankCard from "./payment-methods/BankCard";

const margherita: Pizza = new Pizza("Margherita", 8);
const quattroStagioni: Pizza = new Pizza("Quattro Stagioni", 11);
const quattroFormaggi: Pizza = new Pizza("Quattro Formaggi", 12);
const regina: Pizza = new Pizza("Regina", 10);
const ortolana: Pizza = new Pizza("Ortolana", 10);
const diavola: Pizza = new Pizza("Diavola", 10);

const order = new Order(
  { pizza: margherita, quantity: 2, unitPrice: margherita.price },
  { pizza: quattroStagioni, quantity: 1, unitPrice: quattroStagioni.price }
);

const customer = new Customer();

customer.pay(order, new BankCard());

console.assert(order.paymentStatus === 1); //true
console.assert(order.paymentMethod === PaymentMethod.BankCard); //true
console.assert(order.amount); //27

/*

- ApplePay, Paypal et BankCard sont des implémentations de IPaymentMethod -> Polymorphisme
- les méthodes de paiement ne sont plus couplées à Order
- la méthode de paiement est injectée à Customer
- Customer n'est plus dépendant des différentes méthodes de paiement mais uniquement de l'interface IPaymentMethod

*/
