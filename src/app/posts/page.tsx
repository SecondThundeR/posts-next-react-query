import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

import { getQueryClient } from "@/get-query-client";

import { getAllPosts } from "./api/get-all-posts";
import { Posts } from "./components/posts/posts";

export default async function PostsPage() {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["posts"],
    queryFn: getAllPosts,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Posts />
    </HydrationBoundary>
  );
}
