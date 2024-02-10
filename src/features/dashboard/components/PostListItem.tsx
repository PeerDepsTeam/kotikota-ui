import {FC} from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/shadcn-ui/card.tsx";
import {CategoryBadge} from "@/features/category/components";
import {FundsRaised as FundsRaise, Post} from "@/services/api/gen";
import {cn} from "@/lib/utils.ts";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/shadcn-ui/tooltip.tsx";

export interface PostListItemProps {
  post: Post;
}

const mockFundRaised: FundsRaise = {
  id: "mock_fund_raised1",
  amount: 10_000_000,
};

export const PostListItem: FC<PostListItemProps> = ({post}) => {
  // const {} = useFetch(() => PostProvider.getFundsRaised(post.id!));
  const fund = mockFundRaised;
  const percent = ((fund?.amount || 0) * 100) / (post.amount_required || 0);

  const hasReachedFundRaiseGoal =
    (fund.amount || 0) >= (post.amount_required || 0);

  return (
    <Card>
      <div className="flex w-full items-center justify-between px-3">
        <CardHeader>
          <CardTitle className="text-amber-400">{post.title}</CardTitle>
          <CardDescription>{post.description}</CardDescription>
        </CardHeader>
        <Tooltip>
          <TooltipTrigger>
            <div className={cn("text-md font-semibold")}>
              {fund.amount} /{" "}
              <span
                className={cn({
                  "text-red-400": !hasReachedFundRaiseGoal,
                  "text-green-400": hasReachedFundRaiseGoal,
                })}
              >
                {post.amount_required}
              </span>
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p>goal / fund raises</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger>
            <div className="rounded bg-purple-400 p-1 font-bold text-white">
              {percent}%
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p>funds completion percent</p>
          </TooltipContent>
        </Tooltip>
      </div>
      <div className="w-full flex-wrap space-x-2 p-4">
        {(post.categories || []).map((category) => (
          <CategoryBadge key={category.id} className="mb-2">
            {category.label}
          </CategoryBadge>
        ))}
      </div>
    </Card>
  );
};
