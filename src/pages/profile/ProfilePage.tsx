import Profile from "@/features/auth/components/Profile";
import {Layout} from "@/layout";
import {FC} from "react";
import {useAuthStore} from "@/features/auth";

export const ProfilePage: FC = () => {
  const user = useAuthStore((auth) => auth.user!);

  return (
    <Layout>
      <div className="mx-[2.8rem] mt-0 h-full pt-[2.8rem] md:mx-[11rem]">
        <Profile user={user} />
      </div>
    </Layout>
  );
};
