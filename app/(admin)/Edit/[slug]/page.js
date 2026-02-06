import UpdaterArticles from "@/components/UpdaterArticles";

export default async function Page({ params }) {
    const { slug } = await params
    let data;
  try{
    let body={slug:slug}
    const BASE_URL = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";
    const res =await fetch(`${BASE_URL}/api/articlePoster/Updater`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
            })
            console.log(body)
 data= await res.json();
    console.log(data)
        }
        catch(err){
            console.log(err)
        }
   


    return (
 <UpdaterArticles data={data}/>
    )
}