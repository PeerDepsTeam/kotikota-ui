import {FundsRaised, Post} from "@/services/api/gen";
import {FC} from "react";
import {FundRaised, Transactions} from "@/features/dashboard";

export interface PostProgressionProps {
  post: Post;
}

const mockFundRaised: FundsRaised = {
  id: "mock_fund_raised1",
  amount: 3_000_000,
};

export const PostProgression: FC<PostProgressionProps> = ({post}) => {
  // const {data: fund} = useFetch(() => PostProvider.getFundsRaised(post.id!));
  const fund = mockFundRaised;

  return (
    <div className="flex h-full w-full flex-col space-y-6 p-6">
      <div className="text-2xl font-bold">
        <div>
          Project <span className="bg-muted p-1">{post.title}</span>
        </div>

        <div className="p-2 text-sm font-normal">{post.description}</div>
      </div>

      <FundRaised post={post} fund={fund} />

      <div className="my-0 h-full w-[60rem] space-x-4">
        <Transactions fund={fund} />
      </div>
    </div>
  );
};
