import axios from "axios";

import type { Post } from "../types/post";

export async function getPostById(postId: string) {
  const res = await axios.get(
    "https://jsonplaceholder.typicode.com/posts/" + postId
  );

  return res.data as Post;
}
