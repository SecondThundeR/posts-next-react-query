"use client";

import { memo } from "react";
import { useSuspenseQuery } from "@tanstack/react-query";

import { Grid } from "@/app/components/grid";

import { getPostComments } from "../../api/get-post-comments";

interface CommentsProps {
  postId: string;
}

export const Comments = memo(function Comments({ postId }: CommentsProps) {
  const { data } = useSuspenseQuery({
    queryKey: ["post-comments", postId],
    queryFn: async () => getPostComments(postId),
  });

  return (
    <Grid>
      {data?.map((comment) => (
        <div
          key={comment.id}
          className="flex flex-col gap-4 px-5 py-3 border-2 rounded-lg border-black/20 dark:border-white/30  transition-all duration-200 dark:hover:shadow-[rgba(255,255,255,0.3)_5px_5px_1px_1px] hover:shadow-[rgba(0,0,0,0.2)_5px_5px_1px_1px] hover:-translate-y-2 hover:-translate-x-2"
        >
          <div className="flex flex-col gap-1">
            <h1 className="text-2xl">{comment.name}</h1>
            <p className="opacity-70">By: {comment.email}</p>
          </div>
          <p className="text-lg">{comment.body}</p>
        </div>
      ))}
    </Grid>
  );
});
