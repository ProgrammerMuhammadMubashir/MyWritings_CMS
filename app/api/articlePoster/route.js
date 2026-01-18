import { NextResponse } from "next/server";
import { collectionArticles } from "@/app/(site)/actions/setup";
import { collectionStats } from "@/app/(site)/actions/setup";

export async function POST(request) {
    const data = await request.json();

let [title,cata,author,publish_date,tags,content]=data
let slug = title.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-");
title=title.toLowerCase().split('').map(word => {
            if (word.length === 0) return '';
            return word.charAt(0).toUpperCase() + word.slice(1);
        }) .join('');
console.log(slug,title)
let dataToBePosted= new collectionArticles(
    {title:title,slug:slug,category:cata,author:author,publish_date:publish_date,tags:tags,content:content,comments:[{},{},{}]}
)
await dataToBePosted.save()
const updatedDoc = await collectionStats.findOneAndUpdate(
  {}, 
  { $inc: { total:1}  }, 
  { new: true } // Returns the document after the update
);

  return NextResponse.json({msg:"Article Inserted"});
}
