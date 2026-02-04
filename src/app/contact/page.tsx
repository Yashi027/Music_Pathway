'use client'
import React from 'react'
import { Spotlight } from '@/components/ui/Spotlight'

const page = () => {
  return (
    <div className='mt-30 ml-25 px-5 flex items-center justify-center ' >
      <Spotlight
               className="absolute -top-72 left-1/2 -translate-x-1/2 z-0"
                fill="#38bdf8"
            />
        <form action="/">
        <h2 className='font-bold text-4xl text-gray-200 text-center'>Get in Touch</h2>
        <div className="flex flex-col mt-6">
          <input type="text" name='Name' placeholder="Your name" className='border-1 w-80 py-1 px-1 rounded-md' required/>
          <input type="email" name='Email' placeholder="Your email" className='border-1 w-80 mt-4 px-1 py-1 rounded-md' required />
          <textarea className='border-1 mt-4 w-80 h-40 px-1 py-1 rounded-md' placeholder='Write message..'></textarea>
        </div>
        <button type="submit" className="w-full mt-2 bg-black text-white font-medium py-2.5 rounded-lg hover:bg-blue-400 active:scale-[0.98] transition">Submit</button>
        </form>
    </div>
  )
}

export default page