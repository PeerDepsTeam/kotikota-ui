// https://github.com/blogify-app/blogify-web/tree/preprod/src/services/security
import Auth from "firebase/auth";
import {Configuration, SignUp, User} from "@/services/api/gen";
import {SecurityProvider} from "@/services/api";
import {getCachedAuth, logout} from "@/services/security/firebase_auth.ts";

/**
 * Firebase oauth provider such as:
 * - GoogleAuthProvider
 * - GithubAuthProvider
 */
export type ProviderCtor = {
  new (): Auth.AuthProvider;
};

export interface AuthProvider {
  login(credential: Auth.UserCredential): Promise<User>;
  check(): Promise<void>;
  logout(): Promise<void>;
  onError(err: Record<string, unknown>): Promise<void>;

  register(user: SignUp, credential: Auth.UserCredential): Promise<User>;
  getIdentity(): Promise<string>;
  getPermissions(): Promise<any[]>;
  forgotPassword(): Promise<void>;
  updatePassword(): Promise<void>;

  // auth config for openapi
  getAuthConf(): Configuration;
}

export const AuthProvider = new (class Provider implements AuthProvider {
  async login(): Promise<User> {
    // FIXME: remove {} as any when spec is updated
    return SecurityProvider.signIn({} as any);
  }

  async register(user: SignUp): Promise<User> {
    return SecurityProvider.signUp(user);
  }

  getAuthConf(): Configuration {
    return new Configuration({
      accessToken: getCachedAuth().token ?? "",
    });
  }

  check(): Promise<void> {
    throw new Error("Function not implemented.");
  }

  forgotPassword(): Promise<void> {
    throw new Error("Function not implemented.");
  }

  getIdentity(): Promise<string> {
    throw new Error("Function not implemented.");
  }

  getPermissions(): Promise<any[]> {
    throw new Error("Function not implemented.");
  }

  logout(): Promise<void> {
    return logout();
  }

  onError(): Promise<void> {
    throw new Error("Function not implemented.");
  }

  updatePassword(): Promise<void> {
    throw new Error("Function not implemented.");
  }
})();
