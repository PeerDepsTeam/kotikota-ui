import {PostList} from "@/features/dashboard";
import {useAuthStore} from "@/features/auth";

export const PostListPage = () => {
  const auth = useAuthStore();
  return <PostList user={auth.user!} />;
};
