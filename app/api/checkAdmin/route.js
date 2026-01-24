
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import connectDB from "@/app/(site)/actions/setup"


export async function POST(request) {
await connectDB();
  const data = await request.json();
let [username,password]=data
   if(username===process.env.ADMIN_NAME && password===process.env.ADMIN_PASSWORD){
 
   const token= jwt.sign(
      {username:username},
      process.env.SECRET,
      {expiresIn:"1d"}
    )
  const response = NextResponse.json({ msg: "LD" });

  response.cookies.set("token", token, {
    httpOnly: true,     // 🔐 not accessible via JS
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: 60 * 60 * 24, // 1 day
  });

  return response;
}
else
    {   
        return NextResponse.json({msg:"LN"})
   }

}




