import { NextResponse } from "next/server";
import { collectionSetting } from "@/app/(site)/actions/setup";

import { connectDB } from "@/app/(site)/actions/setup";
export const runtime = "nodejs";


export async function PUT(request) {
  await connectDB()
  const data = await request.json(); 
let doctoUpdate=collectionSetting.findOne({})
await collectionSetting.updateOne(doctoUpdate,data)

 
  return NextResponse.json(data)
}

export async function POST(request) {
  const data = await request.json(); 
let doc=await collectionSetting.findOne({})

 
  return NextResponse.json(doc)
}
