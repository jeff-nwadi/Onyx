"use client"

import React from 'react'
import logo from '@/public/images/ONYX..svg'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <div className='py-24 overflow-hidden'>
        <div className='h-px bg-[#0B1220]/10 mx-0' />
        <div className='flex flex-col md:flex-row items-center justify-between py-10 px-6 md:px-28 gap-8 md:gap-0'>
            <div className='flex justify-center md:justify-start'>
                <Image src={logo} alt='logo' width={80} height={80} />
            </div>
            <div className='flex justify-center'>
                <ul className='flex flex-wrap items-center justify-center gap-6 md:gap-10'>
                    <Link href="#" className='text-[#6B7280] font-medium text-[14px] hover:text-[#0B1220] transition-colors'>Policy</Link>
                    <Link href="#" className='text-[#6B7280] font-medium text-[14px] hover:text-[#0B1220] transition-colors'>Terms of services</Link>
                    <Link href="#" className='text-[#6B7280] font-medium text-[14px] hover:text-[#0B1220] transition-colors'>Contact Support</Link>
                </ul>
            </div>
            <div className='text-center md:text-right'>
                <p className='text-[12px] md:text-[14px] font-normal text-[#6B7280]'>© 2026 Onyx. All rights reserved.</p>
            </div>
        </div>
    </div>
  )
}