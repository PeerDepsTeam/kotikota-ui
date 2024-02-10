import Profile from "@/features/auth/components/Profile";
import {Layout} from "@/layout";
import {FC} from "react";
import {useAuthStore} from "@/features/auth";
import {useFetch} from "@/hooks";
import {UserProvider} from "@/services/api";

export const ProfilePage: FC = () => {
  const user = useAuthStore((auth) => auth.user!);
  const {data, isLoading} = useFetch(() => UserProvider.getById(user.id!));

  return (
    <Layout>
      <div className="mx-[2.8rem] h-full pt-[3.8rem] md:mx-[11rem]">
        {isLoading || !data ? <></> : <Profile user={data} />}
      </div>
    </Layout>
  );
};
