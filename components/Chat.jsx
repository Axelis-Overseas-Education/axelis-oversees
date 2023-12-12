'use client';
import React, { useState } from 'react'

const Chat = () => {
    const [hovered, setHovered] = useState(false)
    const [window, setWindow] = useState(false)
    const winodHandler = () => {
        setWindow(!window)
    }    
  return (
    <div className='fixed flex bottom-5 right-5'>
        <div className={hovered ? 'Opacity-1':'opacity-0'} >
                <div className='bg-[#f9f0ff] absolute left-[calc(-100%-44px-80px)] top-[calc(50%-24px)]  z-1000 p-[12px] shadow rounded-3xl transition-3 transition-all ease delay-150 duration-300'>
                    Hello Chatbot Here!!
                </div>
        </div>        
        <div className={window ? 'show':'hidden'}>
            <div className='fixed bottom-[116px] right-[24px] w-[420px] h-[530px] max-w-[calc(100%-48px)] bg-white rounded-xl border-solid overflow-hidden shadow border-[#7a39e0]'>
                <h1>Hello World</h1>
            </div>
        </div>
        <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} onClick={() => setWindow(!window)}>            
            <button className='rounded  font-bold p-2'>Chat</button>
        </div>      
    </div>
  )
}

export default Chat
