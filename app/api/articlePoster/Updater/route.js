import { NextResponse } from "next/server";
import { collectionArticles } from "@/app/(site)/actions/setup";
import connectDB from "@/app/(site)/actions/setup"




export async function POST(request) {
await connectDB();
  const data = await request.json(); 
 const article=await collectionArticles.findOne({slug:data.slug})
 return NextResponse.json(article)
}

export async function PUT(request) {
  const data = await request.json();
  let [title,cata,author,publish_date,tags,content,slug]=data 
  try{
 
 const articleUpdate=await collectionArticles.updateOne({slug:slug},{ 
          title: title.toUpperCase(),
          slug: title.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-"),
          category: cata,
          author: author,
          publish_date: publish_date,
          tags: tags,
          content: content
      })
 if (articleUpdate.matchedCount === 0) {
      return NextResponse.json({ msg: "Article not found" }, { status: 404 });
    }

    return NextResponse.json({ msg: "Article updated" });
    
  } catch (error) {
    return NextResponse.json({ msg: "Error updating article", error: error.message }, { status: 500 });
  }

}
