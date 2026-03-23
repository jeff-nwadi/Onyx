"use client"

import React from 'react'
import { Button } from '../ui/button'

export default function PreOrderSection() {
  return (
    <div className='py-20 md:py-24 overflow-hidden px-6'>
        <div data-gsap="stagger" className='flex flex-col items-center justify-center text-center'>
            <h1 className='text-3xl md:text-[50px] font-bold py-3 text-[#0B1220] flex flex-col items-center justify-center leading-[110%] md:leading-[100%]'>Ready for the future?</h1>
            <p className='text-base md:text-[18px] font-normal text-[#6B7280] w-full md:w-[60%] text-center'>Pre-order today and secure your spot in line.</p>
            <div className='flex items-center justify-center py-8 w-full md:w-auto'>
                <Button className='bg-[#0B1220] text-white px-8 py-7 rounded-[12px] font-medium text-[14px] hover:scale-105 transition-transform duration-300 w-full md:w-auto'>Pre-order Onyx Now</Button>
            </div>
        </div>
    </div>
  )
}
