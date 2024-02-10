import {FC} from "react";
import {useParams} from "react-router-dom";
import {Layout} from "@/layout";
import {PostCard} from "@/features/post/Post";
import {useFetch} from "@/hooks";
import {PostProvider} from "@/services/api";
import {Icons} from "@/components/common/icons.tsx";

export const PostPage: FC = () => {
  const {id} = useParams();

  const {data, isLoading} = useFetch(() => PostProvider.getById(id!));

  return (
    <Layout>
      {isLoading || !data ? (
        <Icons.spinner className="h-6 w-6 animate-spin" />
      ) : (
        <PostCard post={data} />
      )}
    </Layout>
  );
};
