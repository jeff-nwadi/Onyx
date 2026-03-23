"use client"

import React from 'react'
import logo from '@/public/images/ONYX..svg'
import Image from 'next/image'
import Link from 'next/link'
import { useStore } from '@/store/useStore'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const isScrolled = useStore((state) => state.isScrolled)
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  return (
    <nav 
      className={`flex items-center justify-between px-6 md:px-28 sticky top-0 z-50 transition-all duration-300 backdrop-blur-md ${
        isScrolled 
          ? 'py-4 md:py-5 bg-[#F7FBFF]/80 shadow-sm' 
          : 'py-6 md:py-10 bg-transparent'
      }`}
    >
        <div>
            <Link href="/">
                <Image src={logo} alt='logo' width={80} height={80} className='hover:opacity-80 transition-opacity cursor-pointer' />
            </Link>
        </div>
        <div className='hidden md:block'>
            <ul className='flex items-center gap-10'>
                <Link href="/overview" className='text-[#6B7280] font-medium text-[14px] hover:text-[#0B1220] transition-colors'>Overview</Link>
                <Link href="/design" className='text-[#6B7280] font-medium text-[14px] hover:text-[#0B1220] transition-colors'>Design</Link>
                <Link href="/intelligence" className='text-[#6B7280] font-medium text-[14px] hover:text-[#0B1220] transition-colors'>Intelligence</Link>
                <Link href="/technical-specs" className='text-[#6B7280] font-medium text-[14px] hover:text-[#0B1220] transition-colors'>Technical Specs</Link>
                <Link href="/store" className='text-[#6B7280] font-medium text-[14px] hover:text-[#0B1220] transition-colors'>Store</Link>
            </ul>
        </div>
        <div className='hidden md:block'>
            <button className='bg-[#0B1220] text-white px-6 py-3 rounded-[12px] font-medium text-[14px] hover:scale-105 transition-all duration-300'>Pre-order</button>
        </div>

        {/* Mobile Menu Button */}
        <div className='md:hidden flex items-center gap-4'>
            <button className='bg-[#0B1220] text-white px-4 py-2 rounded-[10px] font-medium text-[12px]'>Pre-order</button>
            <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className='text-[#0B1220] p-2'
            >
                {isMenuOpen ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}
            </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
            <div className='absolute top-full left-0 w-full bg-white border-t border-gray-100 flex flex-col p-6 gap-6 md:hidden shadow-lg animate-in fade-in slide-in-from-top-4 duration-300'>
                <Link href="/overview" onClick={() => setIsMenuOpen(false)} className='text-[#6B7280] font-medium text-[16px]'>Overview</Link>
                <Link href="/design" onClick={() => setIsMenuOpen(false)} className='text-[#6B7280] font-medium text-[16px]'>Design</Link>
                <Link href="/intelligence" onClick={() => setIsMenuOpen(false)} className='text-[#6B7280] font-medium text-[16px]'>Intelligence</Link>
                <Link href="/technical-specs" onClick={() => setIsMenuOpen(false)} className='text-[#6B7280] font-medium text-[16px]'>Technical Specs</Link>
                <Link href="/store" onClick={() => setIsMenuOpen(false)} className='text-[#6B7280] font-medium text-[16px]'>Store</Link>
            </div>
        )}
    </nav>
  )
}
