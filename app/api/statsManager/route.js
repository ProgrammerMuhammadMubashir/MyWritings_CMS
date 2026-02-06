import { NextResponse } from "next/server";
import { collectionArticles } from "@/app/(site)/lib/setup";
import { collectionStats } from "@/app/(site)/lib/setup";

import { connectDB } from "@/app/(site)/lib/setup";

export const runtime = "nodejs";

export async function POST(request) {
  await connectDB()
  const data = await request.json();
    let response=await collectionStats.findOne({})
    console.log(response)
 return NextResponse.json(response)
 

}

