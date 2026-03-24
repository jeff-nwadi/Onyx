"use client"

import React from 'react'
import hero from '@/public/images/hero.svg'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Play } from 'lucide-react'

export default function Hero() {
  return (
    <div className='py-10 md:py-20 overflow-hidden'>
        <div className='flex flex-col items-center justify-center px-6'>
            <div className='flex flex-col items-center justify-center gap-4 md:gap-5 text-center'>
                <h1 data-gsap="hero-title" className='text-4xl sm:text-6xl md:text-[80px] font-bold text-[#0B1220] flex flex-col items-center justify-center leading-[110%] md:leading-[100%]'>
                    <span className='inline-block'>The future of</span> 
                    <span className='inline-block'>pet care.</span>
                </h1>
                <p data-gsap="hero-reveal" className='text-lg md:text-[20px] font-normal text-[#6B7280] max-w-md md:max-w-none'>Silicon Valley engineering meets veterinary science.</p>
            </div>
            <div data-gsap="hero-reveal" className='flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-5 py-10 w-full sm:w-auto'>
                <Link href="/store">
                    <Button className='bg-[#0B1220] text-white px-8 py-7 rounded-[12px] font-medium text-[14px] w-full sm:w-auto'>Pre-order Onyx</Button>
                </Link>
                <Button className='bg-white text-[#0B1220] border border-[#d9dfeb] flex items-center justify-center gap-2 px-8 py-7 rounded-[12px] font-medium text-[14px] hover:bg-gray-50 w-full sm:w-auto'> <Play className='w-5 h-5' /> Watch the film</Button>
            </div>
            <div data-gsap="hero-reveal" className='flex items-center justify-center py-10 w-full'>
                <Image src={hero} alt='hero' width={1000} height={1000} className='rounded-2xl md:rounded-3xl w-full h-auto' priority />
            </div>
        </div>
    </div>
  )
}
