"use client"

import React from 'react'
import Image from 'next/image'
import luminaCollar from '@/public/images/lumina-collar.png'

export default function SpecsHero() {
  return (
    <div className='pt-16 md:pt-24 pb-12 md:pb-16 flex flex-col items-center justify-center text-center px-6'>
        <div data-gsap="fade-up" className='flex flex-col items-center gap-4 md:gap-6'>
            <h1 className='text-4xl md:text-[64px] font-bold text-[#0B1220] tracking-tight leading-[110%] md:leading-[105%]'>Technical Specifications</h1>
            <p className='text-lg md:text-[20px] font-normal text-[#6B7280] max-w-[600px] leading-relaxed'>Everything you need to know about the Lumina Collar.</p>
        </div>
        <div data-gsap="fade-up" className='mt-12 md:mt-20 w-full max-w-[1000px] aspect-16/6 relative flex items-center justify-center bg-[#F7FBFF] rounded-[32px] overflow-hidden'>
            <div className='absolute inset-0 bg-radial-gradient from-white/50 to-transparent pointer-events-none' />
            <Image 
                src={luminaCollar} 
                alt='Lumina Smart Collar' 
                priority
                className='w-[80%] h-auto object-contain'
            />
        </div>
    </div>
  )
}
