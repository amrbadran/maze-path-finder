import type { Metadata } from "next";

import { Press_Start_2P } from "next/font/google";

import "./globals.css";

const pressStart2P = Press_Start_2P({
  subsets: ["latin"],
  weight: "400", // Only one weight
  variable: "--font-press-start",
});
export const metadata: Metadata = {
  title: "Maze Path Finder",
  description:
    "Maze Safety Classification and Path Planning using Perceptron and A* Algorithm",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${pressStart2P.variable}  custom-wood-dark`}>
        {children}
      </body>
    </html>
  );
}
