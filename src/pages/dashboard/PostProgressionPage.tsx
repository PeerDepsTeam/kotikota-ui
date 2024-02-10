import {PostProgression} from "@/features/dashboard";
import {useParams} from "react-router-dom";
import {Icons} from "@/components/common/icons.tsx";
import {useFetch} from "@/hooks";
import {PostProvider} from "@/services/api";

export const PostProgressionPage = () => {
  const {id} = useParams();
  const {data, isLoading} = useFetch(() => PostProvider.getById(id));

  if (isLoading) {
    return <Icons.spinner className="h-6 w-6 animate-spin" />;
  }

  if (!data) return null;

  return <PostProgression post={data} />;
};
