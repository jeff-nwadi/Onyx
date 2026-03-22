"use client"

import React from 'react'
import hero from '@/public/images/hero.svg'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Play } from 'lucide-react'

export default function Hero() {
  return (
    <div className='py-10 overflow-hidden'>
        <div className='flex flex-col items-center justify-center'>
            <div className='flex flex-col items-center justify-center gap-5'>
                <h1 data-gsap="hero-title" className='text-[80px] font-bold text-[#0B1220] flex flex-col items-center justify-center leading-[100%]'>
                    <span className='inline-block'>The future of</span> 
                    <span className='inline-block'>pet care.</span>
                </h1>
                <p data-gsap="hero-reveal" className='text-[20px] font-normal text-[#6B7280]'>Silicon Valley engineering meets veterinary science.</p>
            </div>
            <div data-gsap="hero-reveal" className='flex items-center justify-center gap-5 py-10'>
                <Button className='bg-[#0B1220] text-white px-6 py-7 rounded-[12px] font-medium text-[14px]'>Pre-order Onyx</Button>
                <Button className='bg-white text-[#0B1220] border border-[#d9dfeb] flex items-center gap-2 px-6 py-7 rounded-[12px] font-medium text-[14px] hover:bg-gray-50'> <Play className='w-5 h-5' /> Watch the film</Button>
            </div>
            <div data-gsap="hero-reveal" className='flex items-center justify-center py-10'>
                <Image src={hero} alt='hero' width={1000} height={1000} className='rounded-3xl' />
            </div>
        </div>
    </div>
  )
}
