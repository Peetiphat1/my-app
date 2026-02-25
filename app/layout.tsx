import type { Metadata } from "next";
import { Geist, Geist_Mono , Bungee} from "next/font/google";
import "./globals.css";
import Link from "next/link";

const bungee = Bungee({
  variable: "--font-Bungee_Display",
  weight:"400"

})


export const metadata: Metadata = {
  title: "Home App",
  description: "My Home APP",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bungee.className} `}
      >
        
        <nav className="< flex m2- p-2 text-xl font-bold text-red-600 border-2 shadow-lg bg-amber-300 text-center'>
        HOME justify-between">
     
      <Link href="/">Home</Link>
      <Link href="/about">about</Link>
      <Link href="/foo">foo</Link>
     
        </nav>
    <div childrenm-8>
        {children}

    </div>
      </body>
    </html>
  );
}
