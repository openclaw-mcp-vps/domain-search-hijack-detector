import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Domain Search Hijack Detector",
  description: "Detect when registrars steal your domain searches. Monitor domain availability and get alerted if a registrar registers it themselves."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="3ad4bfe6-532f-479e-a18e-0952ac942d5f"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
