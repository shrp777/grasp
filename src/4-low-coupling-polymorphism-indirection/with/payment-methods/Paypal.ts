import { PaymentMethod } from "../Customer";
import Order from "../Order";
import IPaymentMethod from "./IPaymentMethod";

export default class Paypal implements IPaymentMethod {
  name: PaymentMethod = PaymentMethod.Paypal;
  processOrder(orderId: string, orderAmount: number): boolean {
    return true;
  }
}
