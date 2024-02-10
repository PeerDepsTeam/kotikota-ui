import {PostProgression} from "@/features/dashboard";
import {useParams} from "react-router-dom";
import {useFetch} from "@/hooks";
import {PostProvider} from "@/services/api";
import {Post} from "@/services/api/gen";

const mock: Post = {
  id: "mock_1",
  amount_required: 10_000_000,
  deadline: new Date(),
  author: {},
  description: "mock project",
  title: "CMock",
  creation_datetime: new Date(),
  content: "<h1>Announcing CMock project</h1>",
  categories: [],
};

export const PostProgressionPage = () => {
  const {id} = useParams();
  const {data} = useFetch(() => PostProvider.getById(id));
  return <PostProgression post={data || mock} />;
};
