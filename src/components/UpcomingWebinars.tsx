'use client'
import Link from 'next/link'
import React from 'react'
import { HoverEffect } from "./ui/card-hover-effect";

const featuredWebinars = [
    {
      title: 'Understanding Music Theory',
      description:
        'Dive deep into the fundamentals of music theory and enhance your musical skills.',
      slug: 'understanding-music-theory',
      isFeatured: true,
    },
    {
      title: 'The Art of Songwriting',
      description:
        'Learn the craft of songwriting from experienced musicians and songwriters.',
      slug: 'the-art-of-songwriting',
      isFeatured: true,
    },
    {
      title: 'Mastering Your Instrument',
      description:
        'Advanced techniques to master your musical instrument of choice.',
      slug: 'mastering-your-instrument',
      isFeatured: true,
    },
    {
      title: 'Music Production Essentials',
      description:
        'Get started with music production with this comprehensive overview.',
      slug: 'music-production-essentials',
      isFeatured: true,
    },
    {
      title: 'Live Performance Techniques',
      description:
        'Enhance your live performance skills with expert tips and strategies.',
      slug: 'live-performance-techniques',
      isFeatured: true,
    },
    {
      title: 'Digital Music Marketing',
      description:
        'Learn how to promote your music effectively in the digital age.',
      slug: 'digital-music-marketing',
      isFeatured: true,
    }
  ];

const UpcomingWebinars = () => {
  return (
    <div className='py-16 bg-gradient-to-b from-black via-zinc-900 to-black'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className='text-center'>
            <h2 className='text-teal-500 font-semibold tracking-widest uppercase text-sm'>
                    Featured Webinars
            </h2>
            <p className='mt-3 text-4xl font-bold text-white'>
                    Enhance Your Musical Journey
            </p>
        </div>
        <div className='mt-10'>
            <HoverEffect items={featuredWebinars.map((webinar) => (
                {
                    title:webinar.title,
                    description: webinar.description,
                    link: "/"
                }
            ))}/>
        </div>
        <div className='mt-10 text-center'>
            <Link href={"/"} className="inline-block bg-white text-black font-semibold px-6 py-3 rounded-full hover:bg-teal-500 hover:text-white transition">View All Webinars</Link>
        </div>
      </div>
    </div>
  )
}

export default UpcomingWebinars
