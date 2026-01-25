import UpdaterArticles from "@/components/UpdaterArticles";

export default async function Page({ params }) {
    const { slug } = await params
    let data;
  try{
    let body={slug:slug}
    const res =await fetch(`/api/articlePoster/Updater`, {
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