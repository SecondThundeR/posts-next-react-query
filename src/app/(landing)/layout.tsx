import type { PropsWithChildren } from "react";

import { Header } from "../components/header";

type LandingLayoutProps = Readonly<PropsWithChildren>;

export default function LandingLayout({ children }: LandingLayoutProps) {
  return (
    <>
      <Header title="Home" />
      {children}
    </>
  );
}
