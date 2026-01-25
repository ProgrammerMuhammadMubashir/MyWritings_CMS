
import pageStyles from "./page.module.css";
import Link from "next/link"
import ArticlesPresenter from "@/components/ArticlesPresenter"
import SelfArticle from "@/components/SelfArticle" 
import ArticlePresenter_Self from "@/components/ArticlePresenter_Self";

export default async function Page({ params }) {
  let data;

    
    const { slug } =await params;
     console.log(slug.length,slug)
    if(slug.length===1){
  let userData={cata:slug[0]}
const res =await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/articlesAll`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
            })




 data= await res.json();
console.log("RAW RESPONSE:", data);
}
else if(slug.length===2){
  let userData={title:slug[1]}

const res =await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/articlesAll/SelfArticle`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
            })




data= await res.json();
console.log("RAW RESPONSE of article:", data);
}
console.log(slug);

  
if(slug.length===1){
  return (
<ArticlesPresenter slug={slug} data={data}/> 
  )
}
else if(slug.length===2){
  return (
<ArticlePresenter_Self  article={data} />

  )
}
   

    
       
  }