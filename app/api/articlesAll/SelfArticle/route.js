import { NextResponse } from "next/server";
import { collectionArticles } from "@/app/(site)/actions/setup";

import connectDB from "@/app/(site)/actions/setup"

export async function POST(request) {
await connectDB();
  const data = await request.json(); 
  
  let title=data.title
  title=title.split('-').map(word => word.toUpperCase() ).join(' ');
 const article=await collectionArticles.findOne({title:title})

  return NextResponse.json(article)

}


