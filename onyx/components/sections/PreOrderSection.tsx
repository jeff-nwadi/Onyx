"use client"

"use client"

import React from 'react'
import { Button } from '../ui/button'

export default function PreOrderSection() {
  return (
    <div className='py-24 overflow-hidden'>
        <div data-gsap="stagger" className='flex flex-col items-center justify-center'>
            <h1 className='text-[50px] font-bold py-3 text-[#0B1220] flex flex-col items-center justify-center leading-[100%]'>Ready for the future?</h1>
            <p className='text-[18px] font-normal text-[#6B7280] w-[60%] text-center'>Pre-order today and secure your spot in line.</p>
            <div className='flex items-center justify-center py-8'>
                <Button className='bg-[#0B1220] text-white px-6 py-7 rounded-[12px] font-medium text-[14px] hover:scale-105 transition-transform duration-300'>Pre-order Onyx Now</Button>
            </div>
        </div>
    </div>
  )
}
