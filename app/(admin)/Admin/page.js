"use client"
import React from 'react'
import Admin_Shower from '@/components/Admin_Shower'
import Styles from "./page.module.css"
import Sidebar from '@/components/Sidebar'
import { createContext } from 'react'
import { useState , useEffect } from 'react'
export const numContext = createContext(1);
const func=()=>{
  if(!localStorage.getItem("num")) return 1;
  else return Number(localStorage.getItem("num"));
}

const Page = () => {
const [num,setNum]=useState(1)
useEffect(() => {
  let val=func()
   setNum(val)
}, [])




  return (
    <numContext.Provider value={{num,setNum}}>
      <div className='AdminPage'>
     <Sidebar/>
     <Admin_Shower/>
   </div>
</numContext.Provider>
  )
}

export default Page