interface HeaderProps {
  title: string;
}

export function Header({ title }: HeaderProps) {
  return (
    <h1 className="text-9xl font-extralight mb-8 opacity-20 dark:opacity-30">
      {title}
    </h1>
  );
}
