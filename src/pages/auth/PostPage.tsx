import {FC, useEffect, useState} from "react";
import {Layout} from "@/layout";
import {PostCard} from "@/features/post/Post";
import {useParams} from "react-router-dom";
import {PostProvider} from "@/services/api";
import {useToast} from "@/hooks";
import {Post} from "@/services/api/gen";

export const PostPage: FC = () => {
  const [post, setPost] = useState<Post>();

  const toast = useToast();
  const {id} = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const data = await PostProvider.getById(id);
        setPost(data);
      } catch (_e) {
        toast({
          variant: "destructive",
          message: "Unable to fetch post.",
        });
      }
    };
    if (id) {
      void fetchPost();
    }
  }, [id]);
  return (
    <Layout>
      <PostCard post={post} />
    </Layout>
  );
};
