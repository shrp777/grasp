import { PaymentMethod } from "../Customer";
import Order from "../Order";
import IPaymentMethod from "./IPaymentMethod";

export default class ApplePay implements IPaymentMethod {
  name: PaymentMethod = PaymentMethod.ApplePay;
  processOrder(orderId: string, orderAmount: number): boolean {
    return true;
  }
}
