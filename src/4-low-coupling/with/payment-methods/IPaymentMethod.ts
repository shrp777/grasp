import { PaymentMethod } from "../Customer";

export default interface IPaymentMethod {
  readonly name: PaymentMethod;
  processOrder(orderId: string, orderAmount: number): boolean;
}
