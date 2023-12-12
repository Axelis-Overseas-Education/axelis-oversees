import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='bg-slate-700 flex justify-between items-center px-8 py-3'>
        {/* <Link className='text-white font-bold' href={"/"}>
            SIDCoding.
        </Link>
        <Link className='bg-white p-2 rounded' href={"/addTopic"}>
            Add Topic
        </Link> */}
        <img className="h-20 max-auto" src="/images/axelis_footer.png" alt="/" />
        <ul className='hidden md:flex text-white'>
            <li className='p-4'><Link href={"/"}>Home</Link></li>
            <li className='p-4'><Link href={"/about"}>About</Link></li>
            <li className='p-4'><Link href={"/contact"}>Contact</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar
