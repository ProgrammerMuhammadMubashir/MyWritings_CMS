import { NextResponse } from "next/server";
import { collectionArticles } from "../../(site)/actions/setup";
import { connectDB } from "@/app/(site)/actions/setup";


export async function POST(request) {
await connectDB();
  const data = await request.json(); 
 const articles=await collectionArticles.find({category:data.cata})
 
  return NextResponse.json(articles)
}


