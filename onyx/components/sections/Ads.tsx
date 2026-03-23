"use client"

import React from 'react'
import Container from '@/public/images/Container.svg'
import Image from 'next/image'

export default function Ads() {
  return (
    <div className='flex flex-col justify-center items-center py-16 md:py-25 overflow-hidden px-6'>
        <div data-gsap="stagger" className='flex flex-col items-center justify-center text-center'>
            <h1 className='text-3xl md:text-[50px] font-bold py-3 text-[#0B1220] flex flex-col items-center justify-center leading-[110%] md:leading-[100%]'>Inside the revolution.</h1>
            <p className='text-base md:text-[18px] font-normal text-[#6B7280] w-full md:w-[60%] text-center'>Every millimeter engineered for performance, safety, and unprecedented longevity.</p>
        </div>
        <div data-gsap="fade-up" className='py-10 w-full flex justify-center'>
            <Image src={Container} alt='ads' width={1000} height={1000} className='w-full h-auto max-w-5xl' />
        </div>
    </div>
  )
}
