import type { Comment } from "@/app/posts/types/comment";

export function CommentCard({ name, email, body }: Omit<Comment, "postId">) {
  return (
    <div className="flex flex-col justify-between gap-3 px-5 py-3 border-2 rounded-lg border-black/20 dark:border-white/30  transition-all duration-200 focus:outline-none hover:shadow-[rgba(0,0,0,0.2)_5px_5px_1px_1px] focus:shadow-[rgba(0,0,0,0.2)_5px_5px_1px_1px] dark:hover:shadow-[rgba(255,255,255,0.3)_5px_5px_1px_1px] dark:focus:shadow-[rgba(255,255,255,0.3)_5px_5px_1px_1px] hover:-translate-y-2 hover:-translate-x-2 focus:-translate-y-2 focus:-translate-x-2">
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl">{name}</h1>
        <p className="opacity-70">By: {email}</p>
      </div>
      <p className="text-lg">{body}</p>
    </div>
  );
}
