import Profile from "@/features/auth/components/Profile";
import { Layout } from "@/layout";
import { User, UserSexEnum } from "@/services/api/gen";
import {FC} from "react";
import Avatar from "@/assets/images/avatar.png";

export const ProfilePage: FC = () =>{
  const user: User = {
    id: "123456",
    last_name: "Doe",
    first_name: "John",
    username: "john.doe",
    birth_date: new Date("1990-01-01"),
    email: "john.doe@example.com",
    photo: Avatar,
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    sex: UserSexEnum.M,
  };

  return(
  <Layout>
      <div className="mx-[2.8rem] h-full pt-[3.8rem] md:mx-[11rem]">
      <Profile user={user}/>
    </div>
  </Layout>
  )
}