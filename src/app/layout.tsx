import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "6号的思考",
  description: "思考、记录与分享",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="dark">
      <head>
        <link rel="icon" href="/eo-logo-blue.svg" />
      </head>
      <body className="bg-black text-white antialiased">
        {children}
      </body>
    </html>
  );
}
