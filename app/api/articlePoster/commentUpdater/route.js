import { NextResponse } from "next/server";
import { connectDB } from "@/app/(site)/lib/setup";
await connectDB();
import { collectionArticles } from "@/app/(site)/lib/setup";
import { collectionStats } from "@/app/(site)/lib/setup";

export const runtime = "nodejs";




export async function PUT(request) {
  const data = await request.json();
  let [comment,article]=data
 
let updateArticle=await collectionArticles.updateOne({slug:article.slug},{$push:{comments:comment}})
const updatedDoc = await collectionStats.findOneAndUpdate(
  {}, 
  { $inc: { Engage: 0.2 , PV: 1}  }, 
  { new: true } 
);
 return NextResponse.json({msg:"Comment posted"})
 

}
