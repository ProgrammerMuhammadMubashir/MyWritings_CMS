import { NextResponse } from "next/server";
import { collectionArticles } from "../../(site)/actions/setup";



export async function POST(request) {
  const data = await request.json(); 
 const articles=await collectionArticles.find({category:data.cata})
 
  return NextResponse.json(articles)
}


