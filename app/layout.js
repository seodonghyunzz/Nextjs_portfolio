import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./header";
import Footer from "./footer";
import GoTop from "./gotop";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SDH Coding Diary",
  description: "Portfolio SDH Coding Diary",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        {children}
        <GoTop/>
        <Footer/>
      </body>
    </html>
  );
}
