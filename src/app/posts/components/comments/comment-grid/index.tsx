import { Grid } from "@/app/components/grid";
import type { Comment } from "@/app/posts/types/comment";

import { CommentCard } from "../comment-card";

interface CommentsGridProps {
  comments?: Comment[];
}

export function CommentsGrid({ comments }: CommentsGridProps) {
  if (!comments || comments.length === 0)
    return <h1 className="text-4xl font-medium">No comments available</h1>;

  return (
    <Grid>
      {comments.map((comment) => (
        <CommentCard key={comment.id} {...comment} />
      ))}
    </Grid>
  );
}
