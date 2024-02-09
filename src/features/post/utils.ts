import {Post, User} from "@/services/api/gen";
import {nanoid} from "nanoid";

export const createPost = (user: User): Post => ({
  id: nanoid(),
  content: "Tell more about your startup",
  categories: [],
  title: "Your startup name",
  description: "Describe your startup a bit!",
  author: user,
  amount_required: 0,
  deadline: new Date(),
});
