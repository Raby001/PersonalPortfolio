import Footer from "@/layout/Footer";
import "./globals.css"
import Navbar from "@/layout/Navbar";
import { Signika_Negative } from "next/font/google";
import { Toaster } from "react-hot-toast";


const signika = Signika_Negative({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});
export default function RootLayout({children}:{children: React.ReactNode;}){


  return <html lang="en">
      <body
        className={`${signika.className} 
        bg-white text-black 
        dark:bg-gray-950 dark:text-white
        min-h-screen flex flex-col
        `}
      >
        <Navbar />

        <main className="flex-1 w-full max-w-[700px] mx-auto px-[20px] md:px-0 pt-[100px]">
          {children}
        </main>

        <Toaster
          position="top-center"
          toastOptions={{
            style: {
              background: "#0f172a",
              color: "#fff",
              border: "1px solid #1e293b",
            },
          }}
        />

        <Footer />
      </body>
  </html>
}