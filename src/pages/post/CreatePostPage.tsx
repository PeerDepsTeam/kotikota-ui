import {FC} from "react";
import {useAuthStore} from "@/features/auth";
import {CreatePost} from "@/features/post";
import {createPost} from "@/features/post/utils.ts";
import {Layout} from "@/layout";

export const CreatePostPage: FC = () => {
  const user = useAuthStore((auth) => auth.user!);

  const post = createPost(user);

  return (
    <Layout>
      <div className="relative h-full w-full pt-5">
        <CreatePost post={post} key={post.id} />
      </div>
    </Layout>
  );
};
