import {Post} from "@/services/api/gen";
import {FC} from "react";
import {FundRaised} from "@/features/dashboard";

export interface PostProgressionProps {
  post: Post;
}

export const PostProgression: FC<PostProgressionProps> = ({post}) => {
  return (
    <div className="flex h-full w-full flex-col space-y-6 p-6">
      <div className="text-2xl font-bold">
        <div>
          Project <span className="bg-muted p-1">{post.title}</span>
        </div>

        <div className="p-2 text-sm font-normal">{post.description}</div>
      </div>

      <FundRaised post={post} />
    </div>
  );
};
