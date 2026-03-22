"use client"

import React from 'react'
import Container from '@/public/images/Container.svg'
import Image from 'next/image'

export default function Ads() {
  return (
    <div className='flex flex-col justify-center items-center py-25 overflow-hidden'>
        <div data-gsap="stagger" className='flex flex-col items-center justify-center'>
            <h1 className='text-[50px] font-bold py-3 text-[#0B1220] flex flex-col items-center justify-center leading-[100%]'>Inside the revolution.</h1>
            <p className='text-[18px] font-normal text-[#6B7280] w-[60%] text-center'>Every millimeter engineered for performance, safety, and unprecedented longevity.</p>
        </div>
        <div data-gsap="fade-up" className='py-10'>
            <Image src={Container} alt='ads' width={1000} height={1000} />
        </div>
    </div>
  )
}
