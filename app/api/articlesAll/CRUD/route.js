import { NextResponse } from "next/server";
import { collectionArticles } from "@/app/(site)/lib/setup";
import { collectionStats } from "@/app/(site)/lib/setup";
import { connectDB } from "@/app/(site)/lib/setup";
export const runtime = "nodejs";

export async function POST(request) {
await connectDB();
  const data = await request.json(); 
 const articles=await collectionArticles.find({})
 
  return NextResponse.json(articles)
}
export async function DELETE(request) {
await connectDB();
  const data = await request.json(); 
 const articleDELETE=await collectionArticles.deleteOne(data)
const articles=await collectionArticles.find({})
const updatedDoc = await collectionStats.findOneAndUpdate(
  {}, 
  { $inc: { total:-1}  }, 
  { new: true } // Returns the document after the update
);
  return NextResponse.json({msg:"Article deleted",articles})
}
