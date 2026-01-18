"use client"
import "./globals.css";
import Footer from "@/components/footer";
import Header from "@/components/Header"
import { useEffect } from "react";
import ThemeAndFont from "@/components/ThemeAndFont";

// export const metadata = {
//   title: "My Writings",
//   description: "The piece of arts written by Muhammad Mubashir",
// };

export default function RootLayout({ children }) {
  useEffect(() => {
  ThemeAndFont()
  }, [])
  
  return (
    <html lang="en">
      <body>
<Header/>
        {children}
          <Footer />
      </body>
    </html>
  );
}
