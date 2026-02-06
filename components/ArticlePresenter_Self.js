"use client"

import React, { useState ,useEffect} from 'react'
import { useRouter } from "next/navigation";
import ThemeAndFont from "@/components/ThemeAndFont"
const ArticlePresenter_Self = ({article}) => {
  // useEffect(() => {
    
  
  //  ThemeAndFont()
  // }, [])
  
  let router=useRouter()
console.log(article.comments)
let [comments,setComments]=useState(article.comments)

const commentHandler=async(e)=>{
e.preventDefault()
console.log(e.target[0].value)

let userName=prompt("Enter your name")
if(userName!==""){
  
const BASE_URL =process.env.NEXT_PUBLIC_API_URL || ""

const comment={commenter:userName,comment:e.target[0].value,createdAt:Date.now()}
const res=await fetch(`${BASE_URL}/api/articlePoster/commentUpdater`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify([comment,article]),
            })

      const data=await res.json()
      console.log(data)
      setComments(prev => [...prev, comment])
      e.target[0].value=""

}
else{
  alert("Can't comment without name")
  e.target[0].value=""
}
}




  return (
    <div className="arx-wrapper">
    <button
      className="backButton"
      onClick={() => router.back()}
    >
      <span className="arrow">←</span> Back
    </button>
      <article className="arx-article">

        <header className="arx-header">
          <span className="arx-category">
            {article.category}
          </span>

          <h1 className="arx-title">
            {article.title}
          </h1>

          <div className="arx-meta">
            <span className="arx-author">{article.author}</span>
            <span className="arx-dot">•</span>
            <span className="arx-date">{article.publish_date}</span>
          </div>
        </header>

        <section className="arx-content">
          {article.content}
        </section>

        <footer className="arx-footer">
          <div className="arx-tags">
            {article.tags?.split(",").map((tag, idx) => (
              <span className="arx-tag" key={idx}>
                {tag.trim()}
              </span>
            ))}
          </div>
        </footer>

      </article>

      {/* COMMENTS */}
      <section className="arx-comments">
        <h2 className="arx-comments-title">Comments</h2>

        {comments?.length > 0 ? (
          comments.map((comment, idx) => (
            <div className="arx-comment" key={idx}>
              <p className="arx-comment-text">
                {comment.comment}
              </p>
              <span className="arx-comment-author">
                {comment.commenter}
              </span>
            </div>
          ))
        ) : (
          <p className="arx-no-comments">
            No comments yet.
          </p>
        )}

        <div className="arx-comment-box">
          <form method="PUT" onSubmit={commentHandler}>
          <textarea
            className="arx-comment-input"
            placeholder="Write a comment..."
        name='comment'  required ></textarea>
          <button className="arx-comment-btn" type='submit'>
            Post Comment
          </button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default ArticlePresenter_Self