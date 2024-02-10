import {FC} from "react";
import {Icon} from "@iconify/react";
import {Layout} from "@/layout";
import {Icons} from "@/components/common/icons";
import {Button} from "@/components/common/button";
import {FacebookShareButton, TwitterShareButton} from "react-share";
import {Post} from "@/services/api/gen";
import {Reader} from "../wisiwig";
import {useAuthStore} from "@/features/auth";
import {useNavigate} from "react-router-dom";

export interface PostProps {
  post: Post | undefined;
}

export const PostCard: FC<PostProps> = ({post}) => {
  const url = "kotikota.vercel.app/posts/" + post?.id;
  const auth = useAuthStore();

  const isAuthenticated = auth.user != null;
  const isSelfPost = auth.user?.id === post?.author?.id;
  const navigate = useNavigate();

  return (
    <Layout>
      <div
        data-testid="post-title"
        className="mb-4 mt-40 flex w-full justify-center p-11 text-center md:mt-20"
      >
        <p className="font-optical-sizing-auto normal font-title text-6xl font-bold">
          {post?.title}
        </p>
      </div>
      <div className="flex w-full justify-center">
        <div
          data-testid="post-details"
          className="grid w-[31.25rem] grid-cols-8"
        >
          <div className="col-span-3 flex items-center justify-center">
            <Icon icon="material-symbols-light:face-6" className="text-2xl" />
            <span className="mx-1">
              <strong>{post?.author?.username}</strong>
            </span>
          </div>
          <div className="col-span-2 flex items-center justify-center">
            <Icon
              icon="material-symbols-light:nest-clock-farsight-analog-outline"
              className="text-2xl"
            />{" "}
            <p className="">Read 0s ago</p>
          </div>
          <div className="col-span-3 flex items-center justify-center">
            <Icon
              icon="material-symbols-light:calendar-month-outline"
              className="text-2xl"
            />{" "}
            <p>About 18 hours ago</p>
          </div>
        </div>
      </div>
      <div className="my-5 grid grid-cols-8">
        <div className="col-span-1 h-[18.75rem]"></div>
        <div className="col-span-6 grid grid-cols-8 gap-5">
          <div data-testid="post-content" className="col-span-8 p-4">
            <div className="mx-10"></div>

            <div className="">
              <img
                src={
                  post.thumbnail?.includes("data:image")
                    ? post.thumbnail
                    : `data:image/jpeg;base64,${post?.thumbnail}`
                }
                alt=""
                className=" m-auto mb-[5rem] h-[40rem] w-[70rem]"
              />
            </div>
            <div className="mx-10">
              <Reader>{post?.content!}</Reader>
            </div>
            <div className=" flex justify-between">
              <div className="flex items-stretch justify-self-center">
                <Button
                  // isLoading={isLoading}
                  data-testid="like"
                  className="mx-5 flex items-stretch justify-self-center"
                >
                  <Icons.like data-testid="like-svg" />
                  <label data-testid="like-reaction" className="ml-2"></label>
                </Button>
                <Button
                  // isLoading={isLoading}
                  data-testid="dislike"
                  className="mx-5 flex items-stretch justify-self-center"
                >
                  <Icons.dislike data-testid="dislike-svg" />
                  <label
                    data-testid="dislike-reaction"
                    className="ml-2"
                  ></label>
                </Button>
              </div>

              <div className="flex justify-between ">
                {isAuthenticated && !isSelfPost && (
                  <Button
                    onClick={() => navigate(`/posts/${post?.id}/payments`)}
                  >
                    Donate
                  </Button>
                )}
                <span className="flex justify-between">
                  <div className="mx-2 flex items-center rounded-[8px] p-2">
                    <FacebookShareButton url={url}>
                      <svg
                        className="h-6 w-6 text-gray-800 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M13.1 6H15V3h-1.9A4.1 4.1 0 0 0 9 7.1V9H7v3h2v10h3V12h2l.6-3H12V6.6a.6.6 0 0 1 .6-.6h.5Z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </FacebookShareButton>
                  </div>
                  <div className="flex items-center rounded-[8px] p-2">
                    <TwitterShareButton url={url}>
                      <svg
                        className="h-6 w-6 text-gray-800 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M22 5.9c-.7.3-1.5.5-2.4.6a4 4 0 0 0 1.8-2.2c-.8.5-1.6.8-2.6 1a4.1 4.1 0 0 0-6.7 1.2 4 4 0 0 0-.2 2.5 11.7 11.7 0 0 1-8.5-4.3 4 4 0 0 0 1.3 5.4c-.7 0-1.3-.2-1.9-.5a4 4 0 0 0 3.3 4 4.2 4.2 0 0 1-1.9.1 4.1 4.1 0 0 0 3.9 2.8c-1.8 1.3-4 2-6.1 1.7a11.7 11.7 0 0 0 10.7 1A11.5 11.5 0 0 0 20 8.5V8a10 10 0 0 0 2-2.1Z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </TwitterShareButton>
                  </div>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-1 h-[18.75rem]"></div>
      </div>
      <div data-testid="user-details" className="grid grid-cols-8 bg-slate-50 ">
        <div className="col-span-1 h-[18.75rem]"></div>
        <div className="col-span-6 grid h-[18.75rem] grid-cols-8">
          <div
            data-testid="user-profile-picture"
            className=" col-span-2 flex justify-center"
          >
            <img
              src={`data:image/jpeg;base64,${post?.author?.photo}`}
              className="m-auto h-[12.5rem] w-[12.5rem] rounded-md bg-white object-cover"
            />
          </div>
          <div className="container col-span-6 flex flex-col justify-center">
            {" "}
            <p className=" font-thin"> User 1</p>
            <p className="mb-5 text-left font-title text-2xl hover:text-slate-700 focus:text-slate-200 active:font-semibold">
              {post?.author?.first_name} {post?.author?.last_name}{" "}
            </p>
            <p className="overflow-hidden truncate">{post?.author?.about}</p>
            <a className=" font-thin" href={post?.author?.email}>
              Contact this author
            </a>
          </div>
        </div>
        <div className="col-span-1 h-[18.75rem]"></div>
      </div>
    </Layout>
  );
};
