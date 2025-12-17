import type { Metadata } from "next";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export const metadata: Metadata = {
  title: "Teknomaven - Interactive Web Components",
  description: "Demo portfolio showcasing various interactive web components and tutorials",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/gambar/favicon.PNG" />
      </head>
      <body>{children}</body>
    </html>
  );
}
