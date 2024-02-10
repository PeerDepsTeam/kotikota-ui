import {FC} from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/shadcn-ui/card.tsx";
import {FundsRaised, Post} from "@/services/api/gen";
import {money} from "@/lib/money.ts";

export interface FundRaisedProps {
  post: Post;
}

const mockFundRaised: FundsRaised = {
  id: "mock_fund_raised1",
  transactions: [],
  amount: 3_000_000,
};

export const FundRaised: FC<FundRaisedProps> = ({post}) => {
  // const {data: fund} = useFetch(() => PostProvider.getFundsRaised(post.id!));
  const fund = mockFundRaised;

  const remaining = (post.amount_required || 0) - (fund?.amount || 0);
  const percent = ((fund?.amount || 0) * 100) / (post.amount_required || 0);

  return (
    <div className="flex w-full flex-col space-y-5">
      <div className="p-2 text-xl font-bold">
        Goal <span className="rounded bg-green-400 p-2">{percent}%</span>
      </div>

      <div className="flex w-full space-x-1">
        <Card
          className="bg-green-500 text-white"
          style={{width: `${percent}%`}}
        >
          <CardHeader>
            <CardTitle>Funds raised</CardTitle>
          </CardHeader>
          <CardContent>{money(fund.amount)}</CardContent>
        </Card>
        <Card
          className="bg-red-400 text-white"
          style={{width: `${100 - percent}%`}}
        >
          <CardHeader>
            <CardTitle>Remaining</CardTitle>
          </CardHeader>
          <CardContent>{money(remaining)}</CardContent>
        </Card>
      </div>
    </div>
  );
};
