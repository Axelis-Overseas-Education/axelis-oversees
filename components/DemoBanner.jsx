'use client';
import React, { useState } from 'react'
import Link from "next/link";
// import { useRouter } from 'next/router';

const DemoBanner = ({page}) => {        
  var destination;
  if (page == "LOR") {
    destination = `/pdf/${"LOR_Demo.pdf"}`
  }
  if (page == "SOP") {
    destination = `/pdf/${"SOP_Demo.pdf"}`
  }
  return (
    <div className='fixed flex right-1 top-[50%] bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg text-white'>        
           <Link href={{pathname:'/forms', query:{ destination : destination }}}><button className='rounded  font-bold p-2'>Download {page}</button></Link>
    </div>
  )
}

export default DemoBanner
