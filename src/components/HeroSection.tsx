import Link from 'next/link'
import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { Button } from "./ui/moving-border";

const HeroSection = () => {
  return (
    <div className='h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0'>
        <Spotlight
         className="absolute -top-72 left-1/2 -translate-x-1/2 z-0"
          fill="#38bdf8"
      />
        <div className='p-4 relative z-10 w-full text-center'>
            <h1 className='mt-20 md:mt-0 text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400'>Master the art of Music</h1>
            <p className='mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto'>Dive into our comprehensive music courses and transform your musical journey today.</p>
            <div className="mt-4"><Link href={"/courses"}>
            <Button borderRadius='1.75rem' className='bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800'>Explore courses</Button>
            </Link></div>
        </div>
    </div>
  )
}

export default HeroSection