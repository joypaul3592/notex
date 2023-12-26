import { Space_Grotesk } from "next/font/google";
import "./assets/styles/globals.css";
import Navbar from "./components/sheard/common/navbar/Navbar";
import Footer from "./components/sheard/common/footer/Footer";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata = {
  title: "Notex - A Tech Solutions",
  description: "Where Ideas Meet Impeccable Execution - Welcome to Notex",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={spaceGrotesk.className}>
        <div className=" bg-[#111204]">
          <Navbar />
          <div className=" container mx-auto 2xl:px-20 xl:px-10 px-2 z-[10]">
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
