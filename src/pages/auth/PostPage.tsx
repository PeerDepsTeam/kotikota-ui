import {FC} from "react";
import {Layout, NavBar} from "@/layout";
import {Post} from "@/features/post/Post";

export const PostPage: FC = () => {
  // it may also have some layout-ing but at the end, It'll always use its root from the corresponding feature
  return (
    <Layout>
      <Post />
    </Layout>
  );
};
