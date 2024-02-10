import {DataProvider, userApi} from "@/services/api";
import {User} from "@/services/api/gen";
import {dataProvider} from "@/services/api/provider/middleware";

export type UserProvider = DataProvider<User>;

export const UserProvider: UserProvider = dataProvider({
  async getById(id: string): Promise<User> {
    return (await userApi().getUserById(id!)).data;
  },

  async crupdateById(id: string, update: User): Promise<User> {
    return (await userApi().crupdateUserById(id, update)).data;
  },

  getMany(): Promise<User[]> {
    throw new Error("Function not implemented.");
  },

  crupdate(): Promise<User> {
    throw new Error("Function not implemented.");
  },

  crupdateMany(): Promise<User[]> {
    throw new Error("Function not implemented.");
  },

  deleteById(): Promise<User> {
    throw new Error("Function not implemented.");
  },
});
