import React from 'react'
import courseData from '../data/music_courses.json'
import Link from 'next/link'
import { BackgroundGradient } from './ui/background-gradient'

interface Course{
    id: number,
    title: string,
    slug: string,
    description: string,
    price: number,
    instructor: string,
    isFeatured: boolean
}
const FeaturedCourses = () => {
    const featuredCourses = courseData.courses.filter((course:Course) => course.isFeatured)
  return (
    <div className='py-16 bg-gradient-to-b from-black via-zinc-900 to-black'>
        <div>
            <div className="text-center">
                <h2 className='text-teal-500 font-semibold tracking-widest uppercase text-sm'>
                    Featured Courses
                </h2>
                <p className='mt-3 text-4xl font-bold text-white'>
                    Learn Music From Industry Experts
                </p>
            </div>
        </div>
        <div className='mt-10 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto'>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
  {featuredCourses.map((course: Course) => (
    <div
      key={course.id}
      className="flex justify-center group transition-transform duration-300 hover:-translate-y-2"
    >
      <BackgroundGradient
        className="flex flex-col rounded-3xl bg-white/90 dark:bg-zinc-900/80 backdrop-blur-lg overflow-hidden h-full max-w-sm shadow-lg hover:shadow-2xl transition duration-300"
      >

        <div className="p-6 flex flex-col h-full">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 leading-tight">
            {course.title}
          </h3>

          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 flex-grow leading-relaxed">
            {course.description}
          </p>

          <div className="flex items-center justify-between mb-4">
            <span className="text-teal-500 font-bold text-lg">
              ₹{course.price}
            </span>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              {course.instructor}
            </span>
          </div>

          <Link
            href={`/courses/${course.slug}`}
            className="mt-auto text-center bg-gradient-to-r from-teal-500 to-indigo-500 text-white py-2.5 rounded-xl font-medium shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
          >
            Learn More
          </Link>
        </div>
      </BackgroundGradient>
    </div>
  ))}
</div>

        </div>
        <div className='text-center mt-20'>
            <Link href={"/courses"} className="inline-block bg-white text-black font-semibold px-6 py-3 rounded-full hover:bg-teal-500 hover:text-white transition">View All Courses</Link>
        </div>
    </div>
  )
}

export default FeaturedCourses