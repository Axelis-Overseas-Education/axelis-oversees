'use client';
import React, { useState } from 'react'
// import { useRouter } from 'next/router';

const DemoBanner = ({page}) => {        
  return (
    <div className='fixed flex right-1 top-[50%] bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg text-white'>        
            <button className='rounded  font-bold p-2'>Download {page}</button>            
    </div>
  )
}

export default DemoBanner
