import {FC} from "react";
import {
  FundsRaised,
  PaymentRequest as Payment,
  PaymentRequestPaymentTypeEnum,
  UserSexEnum,
} from "@/services/api/gen";
import {money, toMinors} from "@/lib/money.ts";
import {Avatar, AvatarImage} from "@/components/shadcn-ui/avatar.tsx";

export interface TransactionsProps {
  fund: FundsRaised;
}

const mockPayments: Payment[] = [
  {
    id: "p1",
    amount: toMinors(500_000),
    label: "Good luck!",
    reference: "REF-1023923",
    payment_type: PaymentRequestPaymentTypeEnum.ACTION,
    from: {
      id: "p1",
      first_name: "john1",
      last_name: "doe1",
      username: "username1",
      email: "john@gmail.com",
      bio: "Richmannn",
      sex: UserSexEnum.M,
      photo: "",
    },
  },
  {
    id: "p2",
    amount: toMinors(200_000),
    label: "U can have it",
    reference: "REF-10129323",
    payment_type: PaymentRequestPaymentTypeEnum.DONATION,
  },
];

export const Transactions: FC<TransactionsProps> = ({fund}) => {
  const payments = fund.transactions || mockPayments;

  return (
    <div className="w-ful border-gray-3 h-full rounded border">
      <div className="p-3 py-5 text-2xl font-bold">Transactions</div>
      <div>
        {payments.map((payment) => (
          <Transaction key={payment.id} payment={payment} />
        ))}
      </div>
    </div>
  );
};

const Transaction: FC<{payment: Payment}> = ({payment}) => {
  const {from} = payment;
  return (
    <div className="flex cursor-pointer items-center justify-between space-x-2 border border-gray-100 p-4 hover:bg-gray-50">
      {from?.photo && (
        <Avatar>
          <AvatarImage src={`data:image/jpeg;base64,${from?.photo}`} />
        </Avatar>
      )}
      <div className="font-bold">{payment.from?.username}</div>

      <div className="ml-4 space-y-1">
        <p className="text-md font-bold leading-none">{payment.label}</p>
        <p className="text-md text-muted-foreground">{payment.reference}</p>
      </div>
      <div className="text-xl font-bold text-green-500">
        {money(payment.amount)}
      </div>
    </div>
  );
};
