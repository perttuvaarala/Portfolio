import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import ThemeScript from "./_components/ThemeScript";
import ThemeToggle from "./_components/ThemeToggle";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Perttu Vaarala | Software Engineer",
  description:
    "Software engineer building web applications and APIs that are secure, tested and easy to run.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased motion-safe:scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <ThemeScript />
      </head>
      <body className="min-h-full flex flex-col">
        <header className="absolute inset-x-0 top-0">
          <div className="mx-auto flex w-full max-w-4xl justify-end px-6 pt-6">
            <ThemeToggle />
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
