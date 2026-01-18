"use client"
import React, { useEffect } from 'react'

import { useState ,useRef} from 'react'
import { useContext } from 'react';
import { numContext } from '@/app/(admin)/Admin/page';
 const Sidebar = () => {
  const { num, setNum } = useContext(numContext);
  let write=useRef()
  let setting=useRef()
  let stats=useRef()
  let art=useRef()
  useEffect(() => {
  
    if(num===1){
      write.current.classList.add("activeItem")
      setting.current.classList.remove("activeItem")
stats.current.classList.remove("activeItem")
art.current.classList.remove("activeItem")
}
else if(num===2){
  write.current.classList.remove("activeItem")
  setting.current.classList.add("activeItem")
  stats.current.classList.remove("activeItem")
  art.current.classList.remove("activeItem")
}
else if(num===3){
  write.current.classList.remove("activeItem")
  setting.current.classList.remove("activeItem")
  art.current.classList.remove("activeItem")
  stats.current.classList.add("activeItem")
    }
    else if(num===4){
       write.current.classList.remove("activeItem")
  setting.current.classList.remove("activeItem")
  art.current.classList.add("activeItem")
  stats.current.classList.remove("activeItem")
    }
  
  
  }, [num])
  
  return (
    
    
    <aside className="sidebar">
      <nav className="sidebarNav">
        <ul>
          <li className="sidebarItem" onClick={()=>{setNum(1) ;localStorage.setItem("num",1)}} ref={write} >
            <span className="sidebarEmoji">✏️</span>
            <span className="sidebarLabel" >Write</span>
          
          </li>
          <li className="sidebarItem"  onClick={()=>{setNum(2) ;localStorage.setItem("num",2)}} ref={setting}>
            <span className="sidebarEmoji">⚙️</span>
            <span className="sidebarLabel">Website Settings</span>
          </li>
          <li className="sidebarItem"  onClick={()=>{setNum(3) ;localStorage.setItem("num",3)}} ref={stats}>
            <span className="sidebarEmoji">📊</span>
            <span className="sidebarLabel">Stats</span>
          </li>
          <li className="sidebarItem"  onClick={()=>{setNum(4) ;localStorage.setItem("num",4)}} ref={art}>
            <span className="sidebarEmoji">📰</span>
            <span className="sidebarLabel">Articles</span>
          </li>
  
        </ul>
      </nav>

    </aside>


   
    )

}
export default Sidebar