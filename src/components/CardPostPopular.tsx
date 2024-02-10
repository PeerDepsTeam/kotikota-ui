import {FC, useState} from "react";
import {Card, CardContent, CardFooter} from "./shadcn-ui/card";
import {Button} from "./shadcn-ui/button";
import tsunami from "../assets/images/tsunami.png";
import {Post} from "@/services/api/gen";
export interface PIPostSummary {
  postId: Post;
}

export const CardPostPopular: FC<{post: PIPostSummary}> = ({post}) => {
  return (
    <Card className="mb-8 h-80 w-full overflow-hidden rounded-lg">
      <div className="flex">
        <div className="relative h-80 w-1/2">
          <img
            alt={`${post?.postId.title}`}
            className="absolute inset-0 h-full w-full rounded-l-lg object-cover"
            src={post?.postId?.thumbnail}
          />
        </div>
        <div className="flex w-1/2 flex-col justify-between rounded-r-lg bg-white bg-opacity-50 p-4 text-secondary">
          <CardContent className="overflow-y-auto">
            <div className="text-center text-4xl font-semibold">
              <a
                href="post/[id]"
                className="transform transition-all duration-300 hover:scale-110 hover:text-primary"
              >
                {post?.postId.title}
              </a>
            </div>
            <div className="mt-5 flex flex-row items-center justify-around">
              <div className="text-sm">
                {post?.postId.creation_datetime?.getDate()}
              </div>
              <div className="text-xs">{post?.postId.amount_required}</div>
            </div>
            <div className="h-15 mt-1 text-sm text-gray-700">
              {post?.postId.description}
            </div>
          </CardContent>
          <CardFooter className="mt-4 flex items-center justify-between">
            <Button
              className="rounded bg-primary px-4 py-2 text-white hover:bg-secondary"
              variant="default"
            >
              Donate now
            </Button>
            <MessageSquareIcon />
          </CardFooter>
        </div>
      </div>
    </Card>
  );
};

const MessageSquareIcon: FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
};
