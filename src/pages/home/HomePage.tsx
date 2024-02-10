import {CardSuggestion} from "@/components/CardSuggestion";
import {Landing} from "@/components/Landing";
import {PaginationCustom} from "@/components/common/PaginationCustom";
import {Badge} from "@/components/shadcn-ui/badge";
import {Button} from "@/components/shadcn-ui/button";
import {Input} from "@/components/shadcn-ui/input";
import {CardPostPopular} from "@/components/CardPostPopular.tsx";
import {FC, useEffect, useState} from "react";
import {Post} from "@/services/api/gen";
import {PostProvider} from "@/services/api";
import {Partner} from "@/components/Partner";
import {Footer} from "@/components/Footer";
import {useToast} from "@/components/shadcn-ui/use-toast";

export const HomePage: FC = () => {
  const toast = useToast();
  const [posts, setPosts] = useState([] as Post[]);

  useEffect(() => {
    const fetchAllPosts = async () => {
      try {
        const post = await PostProvider.getMany({
          page: 1,
          pageSize: 10,
          params: "",
        });

        setPosts(post);
      } catch (error) {
        console.log("====================================");
        console.log(error);
        console.log("====================================");
        toast({
          variant: "destructive",
          message: "",
        });
      }
    };
    fetchAllPosts(), [];
  });

  return (
    <>
      <div className="max-w-screen-full mx-auto flex flex-col space-y-3 bg-white">
        <Landing />
        <section>
          <div className=" mt-5 flex flex-col items-center justify-between py-5">
            <h1 className="text-xl font-semibold text-primary">
              <span className="font-['DM Sans'] text-[32px] font-bold leading-[44.80px] text-zinc-900">
                Open{" "}
              </span>
              <span className="font-['DM Sans'] text-[32px] font-bold leading-[44.80px] text-slate-400">
                donations
              </span>
            </h1>
            <div className="mt-5 flex w-1/2">
              <Input className="w-full" placeholder="Find project..." />
              <Button
                className="ml-2 hover:bg-secondary hover:text-white"
                variant="outline"
              >
                Search
              </Button>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 py-4">
            <Badge
              variant="outline"
              className="text-md hover:bg-secondary hover:text-white"
            >
              Disaster
            </Badge>
            <Badge
              variant="outline"
              className="text-md hover:bg-secondary hover:text-white"
            >
              Children
            </Badge>
            <Badge
              variant="outline"
              className="text-md hover:bg-secondary hover:text-white"
            >
              Food Crisis
            </Badge>
            <Badge
              variant="outline"
              className="text-md hover:bg-secondary hover:text-white"
            >
              Health
            </Badge>
            <Badge
              variant="outline"
              className="text-md hover:bg-secondary hover:text-white"
            >
              Sanitation
            </Badge>
            <Badge
              variant="outline"
              className="text-md hover:bg-secondary hover:text-white"
            >
              Animal
            </Badge>
            <Badge
              variant="outline"
              className="text-md hover:bg-secondary hover:text-white"
            >
              Pandemic
            </Badge>
            <Badge
              variant="outline"
              className="text-md hover:bg-secondary hover:text-white"
            >
              War Crisis
            </Badge>
          </div>
          <div className="mx-auto my-8 w-[70rem]">
            {posts?.length && (
              <div className="grid grid-cols-1 gap-8">
                {<CardPostPopular key={posts[0]?.id} postId={posts[0]} />}
                <div className="flex justify-between gap-2">
                  {posts.map((posts) => (
                    <CardSuggestion key={posts?.id} post={posts} />
                  ))}
                </div>
                <PaginationCustom />
              </div>
            )}
          </div>
        </section>

        <Partner />
        <Footer />
      </div>
    </>
  );
};
