import {FundsRaised, Post} from "@/services/api/gen";
import {postingApi, DataProvider, DEFAULT_QUERY, Query} from "@/services/api";
import {dataProvider} from "@/services/api/provider/middleware";

export interface PostProvider extends DataProvider<Post> {
  getFundsRaised(pid: string): Promise<FundsRaised>;
}

export const PostProvider: PostProvider = dataProvider({
  async getById(pid: string): Promise<Post> {
    return (await postingApi().getPostById(pid)).data;
  },

  async getMany(query = DEFAULT_QUERY): Promise<Post[]> {
    return (
      await postingApi().getPosts(
        query.page,
        query.pageSize,
        query.params.categories
      )
    ).data;
  },

  async crupdateById(pid: string, update: Post): Promise<Post> {
    return (await postingApi().crupdatePostById(pid, update)).data;
  },

  async deleteById(pid: string, _query: Query): Promise<Post> {
    return (await postingApi().deletePostById(pid)).data;
  },

  async getFundsRaised(pid: string): Promise<FundsRaised> {
    return (await postingApi().getFundRaised(pid)).data;
  },

  crupdate(_payload: Post): Promise<Post> {
    throw new Error("Function not implemented.");
  },

  crupdateMany(_toCrupdate: Post[]): Promise<Post[]> {
    throw new Error("Function not implemented.");
  },
});
