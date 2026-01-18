"use client"
import React, { useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from "next/navigation";
// import ThemeAndFont from "@/components/ThemeAndFont"


 const ArticlesPresenter = ({ slug, data }) => {

    const router=useRouter()
    useEffect(() => {
   let f=async()=>{
     let arr=Array.from(document.getElementsByClassName("cardImageContainer"))
   
      const fetchPromises = data.map((each) =>
          fetch(
            `https://pixabay.com/api/?key=51295509-7ce4d49982ceccf7ea8a0bbf3&q=${encodeURIComponent(each.tags
            )}&image_type=photo&per_page=25&color=black`
          )
        );
        const responses = await Promise.all(fetchPromises);

      // Parse all JSON responses in parallel
      const d= await Promise.all(responses.map((res) => res.json()));
for (let i = 0; i <arr.length; i++) {
  let random=Math.floor(Math.random()*25)
  arr[i].style.backgroundImage=`url(${d[i].hits[random].webformatURL})`
  
}

      }
      f()
          //  ThemeAndFont()
    }, [])
    

      // console.log(data ,"Hello")
  return (
    <>
      <h1 className="heading">{slug[0].toUpperCase()}</h1>

      <main className="main">
        <div className="articleConatainer">
          {data.map((article) => (
            <div className="articleCard" key={article._id}>

              {/* IMAGE / CARD HEADER */}
              <div className="cardImageContainer"  >
                {/* Optional: Add image background later */}
              </div>

              {/* CARD CONTENT */}
              <div className="cardContent">

                {/* TITLE */}
                <h2 className="articleTitle" >{article.title}</h2>

                {/* META INFO */}
                <div className="cardMeta">
                  <span className="author">{article.author}</span>
                  <span>{article.publish_date}</span>
                </div>

                {/* EXCERPT */}
                <p className="articleExcerpt">
                  {article.content.slice(0, 120)}...
                </p>

                {/* COMMENTS / ACTIONS */}
                <div className="cardMeta">
                  <span>💬 {article.comments?.length || 0} Comments</span>
                 
                    <button className="readMoreBtn" onClick={()=>router.push(`${slug[0]}/${article.slug}`)}>Read More</button>
                  
                </div>

              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  )
}


export default ArticlesPresenter