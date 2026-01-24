import { NextResponse } from "next/server";
import { collectionArticles } from "@/app/(site)/actions/setup";
import { collectionStats } from "@/app/(site)/actions/setup";


import connectDB from "@/app/(site)/actions/setup"

export async function POST(request) {
  await connectDB()
  const data = await request.json();
    let response=await collectionStats.findOne({})
    console.log(response)
 return NextResponse.json(response)
 

}

