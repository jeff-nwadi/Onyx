"use client"

import React from 'react'

export default function StoreHeader() {
  return (
    <div className='pt-16 md:pt-24 pb-12 flex flex-col md:flex-row justify-between items-end px-6 md:px-28 w-full max-w-[1400px] mx-auto'>
        <div data-gsap="fade-up" className='flex flex-col gap-2'>
            <h1 className='text-4xl md:text-[56px] font-bold text-[#0B1220] tracking-tight'>Store.</h1>
            <p className='text-lg md:text-[20px] font-normal text-[#6B7280]'>Equip your companion.</p>
        </div>
        <div data-gsap="fade-up" className='hidden md:block'>
            <span className='text-[24px] font-medium text-[#0B1220]'>$299</span>
        </div>
    </div>
  )
}
