import { Grid } from "@/app/components/grid";

export function PostsSkeleton() {
  return (
    <Grid>
      {new Array(100).fill(undefined).map((_, i) => (
        <div
          key={i}
          className="flex flex-col justify-between gap-3 px-5 py-4 border-2 rounded-lg border-black/20 dark:border-white/30 animate-pulse"
        >
          <span className="w-full h-6 bg-black/20 dark:bg-white/40 rounded-full" />
          <span className="w-1/2 h-6 bg-black/20 dark:bg-white/40 rounded-full mb-6" />
          <span className="w-full h-2 bg-black/20 dark:bg-white/40 rounded-full" />
          <span className="w-full h-2 bg-black/20 dark:bg-white/40 rounded-full" />
          <span className="w-full h-2 bg-black/20 dark:bg-white/40 rounded-full" />
          <span className="w-full h-2 bg-black/20 dark:bg-white/40 rounded-full" />
        </div>
      ))}
    </Grid>
  );
}
