import { PaymentMethod } from "../Customer";
import Order from "../Order";
import IPaymentMethod from "./IPaymentMethod";

export default class BankCard implements IPaymentMethod {
  name: PaymentMethod = PaymentMethod.BankCard;
  processOrder(orderId: string, orderAmount: number): boolean {
    return true;
  }
}
