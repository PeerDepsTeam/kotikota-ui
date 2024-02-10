import {FC} from "react";
import {Layout, NavBar} from "@/layout";
import {Login} from "@/features/auth";

export const LoginPage: FC = () => {
  // it may also have some layout-ing but at the end, It'll always use its root from the corresponding feature
  return (
    <Layout header={<NavBar page="sign_in" />}>
      <div className="h-full pt-[3.8rem] md:mx-[18rem] mx-auto my-0 items-center justify-center">
        <Login />
      </div>
    </Layout>
  );
};
