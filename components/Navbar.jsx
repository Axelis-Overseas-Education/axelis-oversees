import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    // <nav className='bg-slate-700 flex justify-between items-center px-8 py-3'>
    <nav className='bg-gray-50/90 backdrop-filter backdrop-blur-xl border-b border-gray-200 z-20 fixed top-0 w-full flex justify-between items-center px-8 py-3'>        
        <Link href={"/"}><img className="h-12 max-auto color-black hover:cursor-pointer" src="/images/logo_black.svg" alt="/" /></Link>
        <ul className='hidden md:flex text-black'>
            <li className='p-4'><Link href={"/"}>Home</Link></li>
            <li className='p-4'><Link href={"/about"}>About</Link></li>
            <li className='p-4'><Link href={"/contact"}>Contact</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar
