import { Grid } from "@/app/components/grid";
import type { Post } from "@/app/posts/types/post";

import { PostCard } from "../post-card";

interface PostsGridProps {
  posts?: Post[];
}

export function PostsGrid({ posts }: PostsGridProps) {
  if (!posts || posts.length === 0)
    return <h1 className="text-4xl font-medium">No posts available</h1>;

  return (
    <Grid>
      {posts.map((post) => (
        <PostCard key={post.id} {...post} />
      ))}
    </Grid>
  );
}
