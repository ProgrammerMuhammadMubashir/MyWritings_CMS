
"use client"
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import { useEffect, useState } from "react";
import ThemeAndFontAdmin from "@/components/ThemeAndFontAdmin";
import { createContext } from "react";
// export const metadata = {
//   title: "My Writings - Admin Panel",
//   description: "The piece of arts written by Muhammad Mubashir",
// };
export const ThemeContext=createContext()
export default function AdminLayout({ children }) {

 const [theme,setTheme]=useState("")
  useEffect(() => {
    let func=async()=>{
   await ThemeAndFontAdmin()
    let t=await ThemeAndFontAdmin()
    setTheme(t)
    }
    func()
  }, [theme])
  return (
    <html lang="en">
      <body>
           <ThemeContext.Provider value={{theme,setTheme}}>
        {children}
         </ThemeContext.Provider>
        
      </body>
    </html>
  );
}
