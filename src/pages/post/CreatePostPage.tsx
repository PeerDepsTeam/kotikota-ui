import {FC} from "react";
import {Layout} from "@/layout";
import {CreatePost} from "@/features/post";
import {useAuthStore} from "@/features/auth";
import {createPost} from "@/features/post/utils.ts";

export const CreatePostPage: FC = () => {
  const user = useAuthStore((auth) => auth.user!);

  const post = createPost(user);

  return (
    <Layout>
      <div className="h-full w-full pt-5">
        <CreatePost post={post} key={post.id} />
      </div>
    </Layout>
  );
};
