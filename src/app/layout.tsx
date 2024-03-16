import type { PropsWithChildren } from "react";
import type { Metadata } from "next";

import { Providers } from "./providers";

import "./globals.css";

export const metadata: Metadata = {
  title: "Posts App",
};

type RootLayoutProps = Readonly<PropsWithChildren>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <main className="container px-4 sm:px-0 mx-auto my-8">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
