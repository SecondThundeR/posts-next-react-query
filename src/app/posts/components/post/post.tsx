"use client";

import { memo, Suspense } from "react";
import { useSuspenseQuery } from "@tanstack/react-query";

import { getPostById } from "../../api/get-post-by-id";
import { Comments } from "../comments/comments";

interface PostProps {
  id: string;
}

export const Post = memo(function Post({ id }: PostProps) {
  const { data } = useSuspenseQuery({
    queryKey: ["post", id],
    queryFn: async () => getPostById(id),
  });

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-5xl sm:text-7xl font-extrabold">{data?.title}</h1>
      <p className="text-lg">{data?.body}</p>
      <h2 className="text-5xl sm:text-7xl opacity-30">Comments</h2>
      <Suspense
        fallback={
          <p className="text-xl font-light opacity-80">
            Loading post comments...
          </p>
        }
      >
        <Comments postId={id} />
      </Suspense>
    </div>
  );
});
