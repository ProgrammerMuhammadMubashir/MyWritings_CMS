"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
const UpdaterArticles = ({data}) => {
    const router=useRouter()
    const handleUpdate = async (e) => {
     e.preventDefault();

let d=Array.from(e.target)

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || '';


let dataToBeSent=[]
d.forEach((input)=>{
  if(input.value!==""){
dataToBeSent.push(input.value)
input.value="";
  }
})
dataToBeSent.push(data.slug)
console.log(dataToBeSent)
try{
    const res = await fetch(`${BASE_URL}/api/articlePoster/Updater`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dataToBeSent),
    });
   
    const d2 = await res.json();
    console.log(d2);
    alert("Article updated")
    router.push(`/Admin`)
}
catch(err){
    // setPopup(false)
    console.log(err)
    alert(`${err}`)
  }
  }
  return (
   <div className="dashWrap" style={{margin:"auto"}}>
  {/* {popup !== null && <ArticlePosterPopup isSuccess={popup} />} */}
    <header className="dashHeader" id="dashHeader">
      <h1 className="dashHeading" >Edit the Article</h1>
      <p className="dashSubtitle">
        Fill in the required fields to edit your article.
      </p>
    </header>
  
    <form className="dashForm"  onSubmit={handleUpdate} method='PUT' >
      <div className="dashField">
        <label className="dashLabel">Title</label>
        <input type="text" className="dashInput" name="title"  defaultValue={data.title} />
      </div>
  
      <div className="dashField">
        <label className="dashLabel">Category</label>
  <select className='dashInput' name="cata" defaultValue={data.category}>
  <option>Select Category</option>  
  <option value="fashion">fashion</option>
  <option value="news">news</option>
  <option value="entertainment">entertainment</option>
  <option value="sports">sports</option>
  <option value="travel">travel</option>
  <option value="food">food</option>
  <option value="nature">nature</option>
  <option value="technology">technology</option>
  <option value="art">art</option>
  <option value="business">business</option>
  <option value="health">health</option>
  </select>
      </div>
  
      <div className="dashField">
        <label className="dashLabel">Author</label>
        <input type="text" className="dashInput" name="author" defaultValue={data.author} />
      </div>
  
      <div className="dashField">
        <label className="dashLabel">Publish Date</label>
        <input type="date" className="dashInput" name="publish_date" defaultValue={data.publish_date} />
      </div>
  
      <div className="dashField">
        <label className="dashLabel">Tags (comma separated)</label>
        <input type="text" className="dashInput" name="tags" defaultValue={data.tags} />
      </div>
  
      <div className="dashField">
        <label className="dashLabel">Content</label>
        <textarea className="dashTextarea" name="content" defaultValue={data.content}></textarea>
      </div>
  
    <button type="submit" className="dashSubmit"  onClick={() => {
    const el = document.getElementById("dashHeader");
    el?.scrollIntoView({ behavior: "smooth" });
  }}  >
      
        Update Article
      </button>
    
    </form>
  </div>
  )
}

export default UpdaterArticles