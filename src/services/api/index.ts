// https://github.com/blogify-app/blogify-web/blob/preprod/src/services/api/index.ts
import {SecurityApi} from "@/services/api/gen";
import {AuthProvider} from "@/services/security";

export const securityApi = () => new SecurityApi(AuthProvider.getAuthConf());

export * from "./provider";
