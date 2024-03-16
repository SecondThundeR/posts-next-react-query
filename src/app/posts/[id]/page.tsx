import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

import { getQueryClient } from "@/get-query-client";

import { getPostById } from "../api/get-post-by-id";
import { getPostComments } from "../api/get-post-comments";
import { Post } from "../components/post/post";

interface PageProps {
  params: {
    id: string;
  };
}

export default async function Page({ params: { id } }: PageProps) {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["post", id],
    queryFn: async () => getPostById(id),
  });

  await queryClient.prefetchQuery({
    queryKey: ["post-comments", id],
    queryFn: async () => getPostComments(id),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Post id={id} />
    </HydrationBoundary>
  );
}
