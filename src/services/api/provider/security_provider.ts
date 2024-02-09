import {
  User,
  SignUp,
  AuthenticationPayload as SignIn,
} from "@/services/api/gen";
import {securityApi} from "@/services/api";

export interface SecurityProvider {
  signIn(payload: SignIn): Promise<User>;
  signUp(payload: SignUp): Promise<User>;
}

export const SecurityProvider: SecurityProvider = {
  async signIn(payload: SignIn): Promise<User> {
    return (await securityApi().signIn(payload)).data;
  },

  async signUp(payload: SignUp): Promise<User> {
    return (await securityApi().signUp(payload)).data;
  },
};
