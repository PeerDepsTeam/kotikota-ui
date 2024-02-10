// https://github.com/blogify-app/blogify-web/blob/preprod/src/services/api/index.ts
import {
  SecurityApi,
  PostingApi,
  PayingApi,
  UserApi,
  CategoryApi,
  HealthApi,
} from "@/services/api/gen";
import {AuthProvider} from "@/services/security";

export const healthApi = () => new HealthApi(AuthProvider.getAuthConf());

export const securityApi = () => new SecurityApi(AuthProvider.getAuthConf());

export const postingApi = () => new PostingApi(AuthProvider.getAuthConf());

export const payingApi = () => new PayingApi(AuthProvider.getAuthConf());

export const userApi = () => new UserApi(AuthProvider.getAuthConf());

export const categoryApi = () => new CategoryApi(AuthProvider.getAuthConf());

export * from "./provider";
