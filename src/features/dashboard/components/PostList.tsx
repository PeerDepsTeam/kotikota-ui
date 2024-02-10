import {PostListItem} from "@/features/dashboard/components/PostListItem.tsx";
import {FC} from "react";
import {useFetch} from "@/hooks";
import {DEFAULT_QUERY, PostProvider} from "@/services/api";
import {User} from "@/services/api/gen";
import {Icons} from "@/components/common/icons.tsx";
import {Link, useNavigate} from "react-router-dom";
import {nanoid} from "nanoid";
import {Button} from "@/components/shadcn-ui/button.tsx";

export interface PostListProps {
  user: User;
}

export const PostList: FC<PostListProps> = ({user}) => {
  const navigate = useNavigate();
  const {data = [], isLoading} = useFetch(
    () =>
      PostProvider.getByUserId(user.id!, {
        ...DEFAULT_QUERY,
      }),
    []
  );

  return (
    <div className="flex h-full w-full flex-col space-y-6 overflow-y-scroll bg-neutral-100 p-6">
      <div className="text-2xl font-bold">Projects list</div>
      <div className="flex w-full justify-end">
        <Button onClick={() => navigate(`/posts/${nanoid()}/launch`)}>
          Start new project
        </Button>
      </div>

      <div className="mx-auto my-0 flex w-[50rem] flex-col space-y-3">
        {isLoading ? (
          <Icons.spinner className="h-6 w-6 animate-spin" />
        ) : (
          (data || []).map((post) => <PostListItem key={post.id} post={post} />)
        )}
      </div>
    </div>
  );
};
