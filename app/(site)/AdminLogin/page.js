
"use client"

import { useEffect } from "react";
import { notFound, useRouter } from "next/navigation";
import ThemeAndFont from "@/components/ThemeAndFont"
export default function AdminLogin() {

  
 let router=useRouter()
    let adminHandler=async(e)=>{
      e.preventDefault()
      let d=Array.from(e.target)


let dataToBeSent=[]
d.forEach((input)=>{
  if(input.value!==""){
dataToBeSent.push(input.value)
console.log(input.value)
input.value="";
  }
})
let data;
try{
      const res=await fetch(`http://localhost:3000/api/checkAdmin`, {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify(dataToBeSent),
              })
              data=await res.json()  
              console.log(data)
              if(data.msg==="LD"){
                router.push("/Admin")
              }
              else if(!(data.msg==="LD")){
                alert("Incorrect credentials")
router.push("/AdminLogin")
              }
            }
            catch(err){
console.log(err)
            }

    }
  

  


  return (
    <div className="admin-login-page">
      <div className="login-container">
        <h1>Admin Login</h1>
        <form method="POST" onSubmit={adminHandler}>
          <input type="text" placeholder="Username" name="username" required />
          <input type="password" placeholder="Password" name="password" required />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}
