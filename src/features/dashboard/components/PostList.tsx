import {Post} from "@/services/api/gen";
import {PostListItem} from "@/features/dashboard/components/PostListItem.tsx";

const mockPosts: Post[] = [
  {
    id: "mock_1",
    amount_required: 10_000_000,
    deadline: new Date(),
    author: {},
    description: "mock project",
    title: "Startup0",
    creation_datetime: new Date(),
    content: "<h1>Announcing CMock project</h1>",
    categories: [
      {
        id: "c1",
        label: "IT",
      },
      {
        id: "c2",
        label: "Social",
      },
    ],
  },
  {
    id: "mock_2",
    amount_required: 50_000_000,
    deadline: new Date(),
    author: {},
    description: "mock project",
    title: "New project",
    creation_datetime: new Date(),
    content: "<h1>Announcing CMock project</h1>",
    categories: [
      {
        id: "c4",
        label: "Environment",
      },
      {
        id: "c7",
        label: "Kid",
      },
    ],
  },
];

export const PostList = () => {
  // const user = useAuthStore(auth => auth.user!)
  // const {} = useFetch(() => PostProvider.getPostByUserId(user.id!));
  const posts = mockPosts;

  return (
    <div className="flex h-full w-full flex-col space-y-6 overflow-y-scroll bg-neutral-100 p-6">
      <div className="text-2xl font-bold">Projects list</div>
      <div className="mx-auto my-0 flex w-[50rem] flex-col space-y-3">
        {posts.map((post) => (
          <PostListItem key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};
