import type { Metadata } from "next";
import { Geist, Geist_Mono , Bungee} from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from 'next/image';

const bungee = Bungee({
  variable: '--font-bungee',
  weight: "400",
  subsets: ['latin']
})


export const metadata: Metadata = {
  title: "Home App",
  description: "My Home APP",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}){
  return (
    <html lang="en" className={bungee.variable}>
      <body className="bg-[#f6f2e0] antialiased flex flex-col min-h-screen">
        {/* Navbar */}
        <nav className="flex items-center justify-between px-6 py-4 shadow-md border-b-4 border-[#b6a29c] bg-[#f6f2e0] text-[#41393c]">
          <div className="flex items-center gap-4">
            <Image
              src="https://cdn-icons-png.flaticon.com/128/2948/2948025.png"
              width={40}
              height={40}
              alt="Home Logo"
            />
            <span className="text-[2rem] font-bold">CoC</span>
          </div>

          <ul className="hidden sm:flex items-center gap-8 text-[2rem] font-semibold">
            <li>
              <Link href="/" className="hover:text-blue-600 transition-colors">HOME</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-blue-600 transition-colors">ABOUT</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue-600 transition-colors">CONTACT</Link>
            </li>
          </ul>

          <div className="flex flex-col sm:hidden cursor-pointer">
            <div className="w-[2em] h-1 bg-black rounded-[2em] my-1 mx-[1em]"></div>
            <div className="w-[2em] h-1 bg-black rounded-[2em] my-1 mx-[1em]"></div>
            <div className="w-[2em] h-1 bg-black rounded-[2em] my-1 mx-[1em]"></div>
          </div>
        </nav>

        {/* Main Content Area */}
        <main className="flex-grow">
          {children}
        </main>

        {/* Footer */}
        <footer className="flex flex-col items-start px-6 sm:items-center sm:px-0 border-t-2 border-[#b39f99] mt-[2vh] pb-8 text-[#41393c]">
          <span className="text-[clamp(0.9rem,3vw,1.5em)] font-bold mt-[1vh]">
            Lorem ipsum dolor sit amet
          </span>
          <span className="text-[clamp(0.6rem,3vw,1.2em)] mt-[0.5vh] text-left sm:text-center max-w-[600px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora rem atque veritatis voluptatibus ex dolore.
          </span>
          <span className="text-[clamp(0.7rem,3vw,1.5em)] font-bold mt-[0.5em]">
            Copyright © All Right Reserved
          </span>
        </footer>
      </body>
    </html> 
  );
}
      
   
