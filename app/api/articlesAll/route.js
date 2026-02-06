import { NextResponse } from "next/server";
import { connectDB } from "@/app/(site)/lib/setup";
await connectDB();
import { collectionArticles } from "../../(site)/lib/setup";

export const runtime = "nodejs";

export async function POST(request) {
  const data = await request.json(); 
 const articles=await collectionArticles.find({category:data.cata})
 
  return NextResponse.json(articles)
}


