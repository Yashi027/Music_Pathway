"use client";
import React from 'react'
import { StickyScroll } from "./ui/sticky-scroll-reveal";


const musiccontent=[
    {
        title:"Music for Every Mood",
        description:"From chill late-night vibes to high-energy workout beats, we have tracks that match every emotion and moment of your day. Discover music that feels made just for you."
    },
    {
        title:"Crystal Clear Sound Quality",
        description:"Experience music the way artists intended. Our high-quality audio ensures deep bass, clear vocals, and immersive sound on every device."
    },
    {
        title:"Unlimited Streaming, Anytime",
        description:"No limits, no interruptions. Enjoy your favorite tracks wherever you are — at home, traveling, studying, or working out."
    },
    {
        title:"Seamless Experience Across Devices",
        description:"Start a playlist on your phone during your commute, continue it on your laptop at work, and finish the vibe on your tablet at home — all perfectly synced in real time. Your playlists, favorites, listening history, and recommendations stay updated across every device. No interruptions, no re-searching, no restarting — just smooth, continuous listening wherever life takes you."
    }
]; 

const WhyChooseUs = () => {
  return (
    <div>
        <StickyScroll content={musiccontent}/>
    </div>
  )
}

export default WhyChooseUs