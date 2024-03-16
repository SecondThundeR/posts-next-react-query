import axios from "axios";

import type { Comment } from "../types/comment";

export async function getPostComments(postId: string) {
  const res = await axios.get(
    "https://jsonplaceholder.typicode.com/posts/" + postId + "/comments"
  );

  return res.data as Comment[];
}
