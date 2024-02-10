import {FC} from "react";
import {Link} from "react-router-dom";
import {Icon} from "@iconify/react";
import {Layout} from "@/layout";
import {Icons} from "@/components/common/icons";
import Share from "@/assets/share.svg";
import {Button} from "@/components/common/button";
import pic from "@/assets/profile.jpg";

// export interface PostProps {
//   post: PostType;
// }

export const Post: FC = () => {
  return (
    <Layout>
      <div
        data-testid="post-title"
        className="mb-4 mt-40 flex w-full justify-center p-11 text-center md:mt-20"
      >
        <p className=" mt-16 font-title text-6xl "> Post Title</p>
        {/* <p className="font-optical-sizing-auto normal font-title text-6xl font-bold">
          {post.title}
        </p> */}
      </div>
      <div className="flex w-full justify-center">
        <div
          data-testid="post-details"
          className="grid w-[31.25rem] grid-cols-8"
        >
          <div className="col-span-3 flex items-center justify-center">
            <Icon icon="material-symbols-light:face-6" className="text-2xl" />
            <span className="mx-1">
              {/* by <strong>{author?.username}</strong> */}
              <p>By User 1 </p>
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
                src={pic}
                alt=""
                className=" m-auto mb-[5rem] h-[40rem] w-[70rem]"
              />
            </div>

            <div className=" flex">
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

              <div className="flex items-center gap-8">
                <Button className=" ml-[42rem]">Donate</Button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
                  />
                </svg>
              </div>
            </div>

            <div data-testid="post-tags" className="mx-10 flex w-full py-10">
              <span className="mr-2 font-thin">Tags : </span>
              <div className="flex justify-evenly">
                {/* {post.categories!.map((category, index) => (
                  <CategoryBadge
                    key={category.id}
                    data-testid={`category-${index + 1}`}
                    className="mx-1"
                  >
                    {category.label}
                  </CategoryBadge>
                ))} */}

                <p className=" font-light">User 1 </p>
              </div>
            </div>
            <div className="mx-10">
              {/* {comments.map((comment, index) => (
                <Comment key={index} comment={comment} />
              ))}
              {user && (
                <AddComment
                  postId={post?.id!}
                  setIsRefresh={setIsRefresh}
                  isRefresh={isRefresh}
                />
              )} */}
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
              src={pic}
              className="m-auto h-[12.5rem] w-[12.5rem] rounded-md bg-white object-cover"
            />
          </div>
          <div className="container col-span-6 flex flex-col justify-center">
            {" "}
            <p className=" font-thin"> User 1</p>
            {/* <Linkto={`/users/${author?.id || ""}`} */}
            {/*                
              className="mb-5 text-left font-title text-2xl hover:text-slate-700 focus:text-slate-200 active:font-semibold"> */}
            {/* {author?.first_name} {author?.last_name} */}
            {/* </Link> */}
            {/* <p className="overflow-hidden truncate">{author?.about}</p> */}
            {/* <Link */}
            {/* //   to={`/users/${author?.id || ""}`} */}
            {/* className=" my-3 underline hover:text-slate-700 focus:text-slate-700 active:font-semibold"
            > */}
            <u className=" font-thin">See more about this author</u>
            {/* </Link> */}
          </div>
        </div>
        <div className="col-span-1 h-[18.75rem]"></div>
      </div>
    </Layout>
  );
};
