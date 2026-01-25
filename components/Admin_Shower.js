"use client"
import React, { useEffect, useRef, useState } from 'react'
import { useContext } from 'react'
import { useRouter } from 'next/navigation'
import ArticlePosterPopup from './ArticlePosterPopup'
import { ThemeContext } from '@/app/(admin)/layout'
import { numContext } from '@/app/(admin)/Admin/page'
import Theme_handler from './Theme_handler'

const Admin_Shower = () => {
  const router=useRouter()
  let [art,setArt]=useState([])
  let [search,setSearch]=useState([])
  let[stats,setStats]=useState({})

const {theme,setTheme}=useContext(ThemeContext)
const { num, setNum } = useContext(numContext);

  let searchBar=useRef()

useEffect(() => {
const f=async()=>{
const res =await fetch(`http://localhost:3000/api/articlesAll/CRUD`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({msg:"Send data"}),
            })




art= await res.json();
setArt(art)
setSearch(art)
}
f()
const stats=async()=>{
const res =await fetch(`http://localhost:3000/api/statsManager`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({msg:"Send data"}),
            })

let data=await res.json()
console.log("Stats: " ,data)
setStats(data)

}
 stats()

 

 
}, [])





 


const handleDeletion=async(title)=>{
let z=confirm("Do you really want to delete article (It can't be undone)")
if(z){
  const res =await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/articlesAll/CRUD`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({title:title}),
            })

  let d=await res.json()
setArt(d.articles)
setSearch(d.articles)
searchBar.current.value=""
          }
}
console.log(art)

  
   const [popup,setPopup]=useState(null)
  console.log(num)
   const handleSubmit = async (e) => {
     e.preventDefault();
 

let d=Array.from(e.target)


let dataToBeSent=[]
d.forEach((input)=>{
  if(input.value!==""){
dataToBeSent.push(input.value)
console.log(input.value)
input.value="";
  }
})

console.log(dataToBeSent)
try{
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/articlePoster`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dataToBeSent),
    });
   
    const data = await res.json();
    console.log(data);
    setPopup(true)
    
  }
  catch(err){
    setPopup(false)
  }
  }
  const searchHandler=(e)=>{
    console.log(e.target.value)
    if(e.target.value!==""){

 
 let z= art.filter((ele)=>ele.title.toLowerCase().includes(e.target.value.toLowerCase()))
 
 console.log("hi",z)
 setSearch(z)
    }
    else{
   setSearch(art)
    }

    }
  
 const application=async()=>{
 let activespChipTheme=document.querySelector(".activespChipTheme")

  const res =await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/settingManager`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({theme:activespChipTheme.innerText}),
            })
            const data=await res.json()
            console.log(data)
            alert(`${activespChipTheme.innerText} theme applied!`)
            setTheme(`${activespChipTheme.innerText}`)
 }




  
  if (num===1) {
    return(
      <div className="dashWrap">
{popup !== null && <ArticlePosterPopup isSuccess={popup} />}
  <header className="dashHeader"id="dashHeader">
    <h1 className="dashHeading" >Create New Article</h1>
    <p className="dashSubtitle">
      Fill in the required fields to publish your article.
    </p>
  </header>

  <form className="dashForm"  onSubmit={handleSubmit}  method='POST' >
    <div className="dashField">
      <label className="dashLabel">Title</label>
      <input type="text" className="dashInput" name="title" />
    </div>

    <div className="dashField">
      <label className="dashLabel">Category</label>
<select className='dashInput' name="cata">
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
      <input type="text" className="dashInput" name="author" />
    </div>

    <div className="dashField">
      <label className="dashLabel">Publish Date</label>
      <input type="date" className="dashInput" name="publish_date" />
    </div>

    <div className="dashField">
      <label className="dashLabel">Tags (comma separated)</label>
      <input type="text" className="dashInput" name="tags" />
    </div>

    <div className="dashField">
      <label className="dashLabel">Content</label>
      <textarea className="dashTextarea" name="content"></textarea>
    </div>

  <button type="submit" className="dashSubmit"   onClick={() => {
    const el = document.getElementById("dashHeader");
    el?.scrollIntoView({ behavior: "smooth" });
  }} >
    
      Publish Article
    </button>
  
  </form>
</div>
    )

  }
  else if(num===2){
    return (
    <div className="spWrapper">
      <h1 className="spTitle">Website Settings</h1>

      <div className="spSection">
        <label className="spLabel">Theme</label>
        <div className="spChipRow">
<Theme_handler theme={theme} />
{/* hello world */}
        </div>
      </div>

    


      

      <div className="spButtons">
        <div className="spBtnPrimary" onClick={application}>Apply</div>
  
      </div>
    </div>

  );
  }
  else if(num===3){
return  (<div className="stWrapper">
  <h1 className="stTitle">Website Stats</h1>

  <div className="stCards">
  
    <div className="stCard">
      <p className="stCardLabel">Total articles</p>
      <h2 className="stCardNum">{stats.total}</h2>
    </div>

    <div className="stCard">
      <p className="stCardLabel">People visited</p>
      <h2 className="stCardNum">{stats.PV}</h2>
    </div>

    <div className="stCard">
      <p className="stCardLabel">Engagement</p>
      <h2 className="stCardNum">{stats.Engage}</h2>
    </div>
  </div>

</div>
 )
  }
else if(num===4){
  return (
  <>
    <div className="artWrap">
      <h2 className="artTitle">Articles CRUD</h2>
<input type="search" placeholder='Search here' ref={searchBar} onChange={searchHandler} className='searchInput'/>
      <div className="artList">
        {search.map((each) => (
          <div className="artCard" key={each._id}>
            <div className="artHeader">
              <h2 className="artCardTitle">{each.title}</h2>
              <span className="artDate">{each.publish_date}</span>
            </div>

            <div className="artActions">
              <button className="artBtn read"  onClick={()=>router.push(`blogpost/${each.category}/${each.slug}`)}>Read</button>
              <button className="artBtn edit" onClick={()=>router.push(`Edit/${each.slug}`)}>Edit</button>
              <button className="artBtn delete" onClick={()=>handleDeletion(each.title)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </>
);

}
  return  null;
}

export default Admin_Shower