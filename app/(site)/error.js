'use client'
import { useRouter } from "next/navigation"
export default function Error({ error, reset }) {
    let router=useRouter()
  return (
    <div className="app-error">
      <h1>Something went wrong</h1>
      <p>We hit an unexpected error.</p>
<div className="btns-group">
      <button onClick={reset}>
        Try Again
      </button>
      <button onClick={()=>router.push("/")}>
      Move to Home
      </button>
      </div>
    </div>
  )
}
