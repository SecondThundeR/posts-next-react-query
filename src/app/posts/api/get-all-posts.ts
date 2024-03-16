import axios from "axios";

import type { Post } from "../types/post";

export async function getAllPosts() {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");

  return res.data as Post[];
}
