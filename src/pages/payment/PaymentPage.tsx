import {PaymentCard} from "@/features/payment";
import {Layout} from "@/layout";
import {FC} from "react";

export const PaymentPage: FC = () => {
  return (
    <Layout>
      <PaymentCard />
    </Layout>
  );
};
