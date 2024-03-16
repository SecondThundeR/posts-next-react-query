import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <Link href="/posts">
        <p className="text-4xl hover:text-blue-600 dark:hover:text-blue-300">
          Posts
        </p>
      </Link>
    </div>
  );
}
