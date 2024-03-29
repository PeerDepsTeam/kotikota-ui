import {FC} from "react";
import {Layout, NavBar} from "@/layout";
import {Stepper} from "@/components/common/stepper.tsx";
import {Signup} from "@/features/auth/components/SignUp";

export const SignupPage: FC = () => {
  // it may also have some layout-ing but at the end, It'll always use its root from the corresponding feature
  return (
    <Layout header={<NavBar page="sign_up" />}>
      <Stepper>
        <div className="mx-auto my-0 h-full items-center justify-center pt-[3.8rem] md:mx-[16rem]">
          <Signup />
        </div>
      </Stepper>
    </Layout>
  );
};
