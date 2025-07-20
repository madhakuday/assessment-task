import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PROPERTY SEARCH",
  description: "Find properties easily with our powerful property search tool.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
