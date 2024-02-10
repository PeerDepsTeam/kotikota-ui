import {Category} from "@/services/api/gen";
import {categoryApi} from "@/services/api";
import {DataProvider} from "@/services/api/provider/data_provider";
import {dataProvider} from "@/services/api/provider/middleware";

export interface CategoryProvider extends DataProvider<Category> {}

export const CategoryProvider: CategoryProvider = dataProvider({
  async getMany(): Promise<Category[]> {
    return (await categoryApi().getCategories()).data;
  },

  async crupdateById(cid: string, update: Category): Promise<Category> {
    return (await categoryApi().crupdateCategoryById(cid, update)).data;
  },

  getById(): Promise<Category> {
    throw new Error("Function not implemented.");
  },

  crupdate(): Promise<Category> {
    throw new Error("Function not implemented.");
  },

  crupdateMany(): Promise<Category[]> {
    throw new Error("Function not implemented.");
  },

  deleteById(): Promise<Category> {
    throw new Error("Function not implemented.");
  },
});
