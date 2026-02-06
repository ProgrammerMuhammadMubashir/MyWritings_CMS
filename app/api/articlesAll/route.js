import { NextResponse } from "next/server";
import { collectionArticles } from "../../(site)/lib/setup";
import { connectDB } from "@/app/(site)/lib/setup";

export const runtime = "nodejs";

export async function POST(request) {
await connectDB();
  const data = await request.json(); 
 const articles=await collectionArticles.find({category:data.cata})
 
  return NextResponse.json(articles)
}


