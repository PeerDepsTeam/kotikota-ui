import {FC} from "react";
import {Card, CardContent} from "./shadcn-ui/card";
import {Button} from "./shadcn-ui/button";
import {Post} from "@/services/api/gen";

type CardSuggProps = {
  post: Post;
};
export const CardSuggestion: FC<CardSuggProps> = ({post}) => {
  const formattedDate = post?.creationDate
    ? new Date(creationDate).getDate()
    : "";
  return (
    <Card className="mb-8 w-[280px] overflow-hidden rounded-lg">
      <div className="relative h-48">
        <img
          alt="Tsunami in Malika"
          className="absolute inset-0 h-full w-full rounded-t-lg object-cover"
          src={`data:image/jpeg;base64,${post?.thumbnail}`}
        />
        <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 px-4 py-2 text-white">
          <div className="text-xl font-semibold">
            <a
              href={`/posts/${post.id}`}
              className="transform transition-all duration-300 hover:scale-110 hover:text-primary"
            >
              {post?.title}
            </a>
          </div>
          <div className="text-sm">{formattedDate}</div>
          <div className="text-xs">{post?.amount_required}</div>
        </div>
      </div>
      <CardContent className="p-4">
        <div className="text-sm text-gray-700">{post?.description}</div>
        <div className="mt-4 flex items-center justify-between">
          <Button
            className="rounded bg-primary px-4 py-2 text-white hover:bg-secondary"
            variant="default"
          >
            Donate now
          </Button>
          <MessageSquareIcon />
        </div>
      </CardContent>
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
