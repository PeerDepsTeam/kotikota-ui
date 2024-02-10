import {FC} from "react";
import {FundRaised, Transactions} from "@/features/dashboard";
import {useFetch} from "@/hooks";
import {Post} from "@/services/api/gen";
import {PostProvider} from "@/services/api";
import {Icons} from "@/components/common/icons.tsx";

export interface PostProgressionProps {
  post: Post;
}

export const PostProgression: FC<PostProgressionProps> = ({post}) => {
  const {data: fund, isLoading} = useFetch(() =>
    PostProvider.getFundsRaised(post.id!)
  );

  return (
    <div className="flex h-full w-full flex-col space-y-6 p-6">
      <div className="text-2xl font-bold">
        <div>
          Project <span className="bg-muted p-1">{post.title}</span>
        </div>

        <div className="p-2 text-sm font-normal">{post.description}</div>
      </div>

      {isLoading || !fund ? (
        <div className="h-full w-full items-center justify-center">
          <Icons.spinner className="h-6 w-9 animate-spin" />
        </div>
      ) : (
        <>
          <FundRaised post={post} fund={fund} />
          <div className="my-0 h-full w-[60rem] space-x-4">
            <Transactions fund={fund} />
          </div>
        </>
      )}
    </div>
  );
};
