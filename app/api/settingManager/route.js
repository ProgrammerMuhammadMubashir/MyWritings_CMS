import { NextResponse } from "next/server";
import { connectDB } from "@/app/(site)/lib/setup";
await connectDB()
import { collectionSetting } from "@/app/(site)/lib/setup";

export const runtime = "nodejs";


export async function PUT(request) {
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
