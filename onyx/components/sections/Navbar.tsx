"use client"

import React from 'react'
import logo from '@/public/images/ONYX..svg'
import Image from 'next/image'
import Link from 'next/link'
import { useStore } from '@/store/useStore'

export default function Navbar() {
  const isScrolled = useStore((state) => state.isScrolled)

  return (
    <nav 
      className={`flex items-center justify-between px-28 sticky top-0 z-50 transition-all duration-300 backdrop-blur-md ${
        isScrolled 
          ? 'py-5 bg-[#F7FBFF]/80 shadow-sm' 
          : 'py-10 bg-transparent'
      }`}
    >
        <div>
            <Link href="/">
                <Image src={logo} alt='logo' width={80} height={80} className='hover:opacity-80 transition-opacity cursor-pointer' />
            </Link>
        </div>
        <div>
            <ul className='flex items-center gap-10'>
                <Link href="/overview" className='text-[#6B7280] font-medium text-[14px] hover:text-[#0B1220] transition-colors'>Overview</Link>
                <Link href="/design" className='text-[#6B7280] font-medium text-[14px] hover:text-[#0B1220] transition-colors'>Design</Link>
                <Link href="/intelligence" className='text-[#6B7280] font-medium text-[14px] hover:text-[#0B1220] transition-colors'>Intelligence</Link>
                <Link href="/technical-specs" className='text-[#6B7280] font-medium text-[14px] hover:text-[#0B1220] transition-colors'>Technical Specs</Link>
                <Link href="/store" className='text-[#6B7280] font-medium text-[14px] hover:text-[#0B1220] transition-colors'>Store</Link>
            </ul>
        </div>
        <div>
            <button className='bg-[#0B1220] text-white px-6 py-3 rounded-[12px] font-medium text-[14px] hover:scale-105 transition-all duration-300'>Pre-order</button>
        </div>
    </nav>
  )
}
