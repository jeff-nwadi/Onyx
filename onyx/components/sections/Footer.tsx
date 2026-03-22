"use client"

import React from 'react'
import logo from '@/public/images/ONYX..svg'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <div className='py-24 overflow-hidden'>
        <div className='h-px bg-[#0B1220]/10 mx-0' />
        <div data-gsap="stagger" className='flex items-center justify-between py-10 px-28'>
            <div>
                <Image src={logo} alt='logo' width={80} height={80} />
            </div>
            <div>
                <ul className='flex items-center gap-10'>
                    <Link href="#" className='text-[#6B7280] font-medium text-[14px] hover:text-[#0B1220] transition-colors'>Policy</Link>
                    <Link href="#" className='text-[#6B7280] font-medium text-[14px] hover:text-[#0B1220] transition-colors'>Terms of services</Link>
                    <Link href="#" className='text-[#6B7280] font-medium text-[14px] hover:text-[#0B1220] transition-colors'>Contact Support</Link>
                </ul>
            </div>
            <div>
                <p className='text-[14px] font-normal text-[#6B7280]'>© 2026 Onyx. All rights reserved.</p>
            </div>
        </div>
    </div>
  )
}