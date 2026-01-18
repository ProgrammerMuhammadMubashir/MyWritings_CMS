"use client"
import React from 'react'
import { useRef } from "react"
const Theme_handler =({theme}) => {
console.log(theme)
      let Default=useRef()
      let Elegant=useRef()
      let Modern=useRef()
    
    const themeSwitchHandler=(switched,unswitched1,unswitched2)=>{
switched.current.classList.add("activespChipTheme")
unswitched1.current.classList.remove("activespChipTheme")
unswitched2.current.classList.remove("activespChipTheme")
    }
if(theme==="Default"){
    return (
<>
        <div className="spChip elegant spChipTheme"  ref={Elegant} onClick={()=>themeSwitchHandler(Elegant,Modern,Default)} >Elegant</div>
          <div className="spChip modern spChipTheme"  ref={Modern} onClick={()=>themeSwitchHandler(Modern,Elegant,Default)}>Modern</div>
          <div className="spChip default  spChipTheme activespChipTheme" ref={Default} onClick={()=>themeSwitchHandler(Default,Modern,Elegant)}>Default</div>
</>
    )
}
else if(theme==="Elegant"){
   return( <>
    <div className="spChip elegant spChipTheme activespChipTheme"  ref={Elegant} onClick={()=>themeSwitchHandler(Elegant,Modern,Default)} >Elegant</div>
          <div className="spChip modern spChipTheme"  ref={Modern} onClick={()=>themeSwitchHandler(Modern,Elegant,Default)}>Modern</div>
          <div className="spChip default  spChipTheme  "ref={Default} onClick={()=>themeSwitchHandler(Default,Modern,Elegant)}>Default</div>
    </>)
}
else if(theme==="Modern"){
return (
   <>
    <div className="spChip elegant spChipTheme "  ref={Elegant} onClick={()=>themeSwitchHandler(Elegant,Modern,Default)} >Elegant</div>
          <div className="spChip modern spChipTheme  activespChipTheme"  ref={Modern} onClick={()=>themeSwitchHandler(Modern,Elegant,Default)}>Modern</div>
          <div className="spChip default  spChipTheme  "ref={Default} onClick={()=>themeSwitchHandler(Default,Modern,Elegant)}>Default</div>
    </> 
)
}

}

export default Theme_handler