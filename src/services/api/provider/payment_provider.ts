import {dataProvider} from "@/services/api/provider/middleware";
import {DataProvider, payingApi} from "@/services/api";
import {PaymentRequest} from "@/services/api/gen";

export interface PaymentProvider extends DataProvider<PaymentRequest> {
  initPayment(paymentRequest: PaymentRequest): Promise<PaymentRequest>;
}

export const PaymentProvider: PaymentProvider = dataProvider({
  async initPayment(paymentRequest: PaymentRequest): Promise<PaymentRequest> {
    return (await payingApi().initiatePayment(paymentRequest)).data;
  },

  crupdate(): Promise<PaymentRequest> {
    throw new Error("Function not implemented.");
  },

  crupdateById(): Promise<PaymentRequest> {
    throw new Error("Function not implemented.");
  },

  crupdateMany(): Promise<PaymentRequest[]> {
    throw new Error("Function not implemented.");
  },

  deleteById(): Promise<PaymentRequest> {
    throw new Error("Function not implemented.");
  },

  getById(): Promise<PaymentRequest> {
    throw new Error("Function not implemented.");
  },

  getMany(): Promise<PaymentRequest[]> {
    throw new Error("Function not implemented.");
  },
});
