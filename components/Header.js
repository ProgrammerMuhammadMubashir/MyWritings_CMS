import React from 'react'
import Link from "next/link"
const Header = () => {
  return (
    <div className='header'>
<h1>My Writings</h1>
<ul className="UL">
  <Link href={'/'} className="headerLI" ><li>Home</li></Link>
  <Link href={'/About'} className="headerLI"><li>About</li></Link>
</ul>

    </div>
  )
}

export default Header