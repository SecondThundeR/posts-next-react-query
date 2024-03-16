import Link from "next/link";

import type { Post } from "@/app/posts/types/post";

export function PostCard({ id, title, body }: Omit<Post, "userId">) {
  return (
    <Link
      href={`/posts/${id}`}
      className="flex flex-col justify-between gap-3 px-5 py-3 border-2 rounded-lg border-black/20 dark:border-white/30  transition-all duration-200 focus:outline-none hover:shadow-[rgba(0,0,0,0.2)_5px_5px_1px_1px] focus:shadow-[rgba(0,0,0,0.2)_5px_5px_1px_1px] dark:hover:shadow-[rgba(255,255,255,0.3)_5px_5px_1px_1px] dark:focus:shadow-[rgba(255,255,255,0.3)_5px_5px_1px_1px] hover:-translate-y-2 hover:-translate-x-2 focus:-translate-y-2 focus:-translate-x-2"
    >
      <h1 className="text-2xl font-medium line-clamp-2">{title}</h1>
      <p className="opacity-60 line-clamp-4">{body}</p>
    </Link>
  );
}
