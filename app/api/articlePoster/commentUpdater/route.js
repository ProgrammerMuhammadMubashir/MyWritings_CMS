import { NextResponse } from "next/server";
import { collectionArticles } from "@/app/(site)/actions/setup";
import { collectionStats } from "@/app/(site)/actions/setup";




export async function PUT(request) {
  const data = await request.json();
  let [comment,article]=data
 
let updateArticle=await collectionArticles.updateOne({slug:article.slug},{$push:{comments:comment}})
const updatedDoc = await collectionStats.findOneAndUpdate(
  {}, 
  { $inc: { Engage: 0.2 , PV: 1}  }, 
  { new: true } // Returns the document after the update
);
 return NextResponse.json({msg:"Comment posted"})
 

}
