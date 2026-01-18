'use client'
import {useRouter} from "next/navigation"

export default function Error({ error, reset }) {
    const router=useRouter()
  return (
    <div className="app-error">
      <div className="error-box">
        <h1>Unexpected Error</h1>
        <p>Something didn’t load correctly.</p>
<div className="btns-group">
      <button onClick={reset}>
        Try Again
      </button>
      <button onClick={()=>router.push("/")}>
      Move to Home
      </button>
      </div>
      </div>
    </div>
  )
}
