"use client";

import { memo } from "react";
import { useSuspenseQuery } from "@tanstack/react-query";

import { getAllPosts } from "../../api/get-all-posts";

import { PostsGrid } from "./posts-grid";

export const Posts = memo(function Posts() {
  const { data } = useSuspenseQuery({
    queryKey: ["posts"],
    queryFn: getAllPosts,
  });

  return <PostsGrid posts={data} />;
});
