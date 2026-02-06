import { NextResponse } from "next/server";
import { connectDB } from "@/app/(site)/lib/setup";
await connectDB()
import { collectionArticles } from "@/app/(site)/lib/setup";
import { collectionStats } from "@/app/(site)/lib/setup";


export const runtime = "nodejs";

export async function POST(request) {
  const data = await request.json();
    let response=await collectionStats.findOne({})
    console.log(response)
 return NextResponse.json(response)
 

}

