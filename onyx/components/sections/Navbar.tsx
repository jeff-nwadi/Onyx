"use client"

import React from 'react'
import logo from '@/public/images/ONYX..svg'
import Image from 'next/image'
import Link from 'next/link'
import { useStore } from '@/store/useStore'
import { useCartStore } from '@/store/useCartStore'
import { Menu, X, ShoppingBag } from 'lucide-react'

import { usePathname } from 'next/navigation'

export default function Navbar() {
  const isScrolled = useStore((state) => state.isScrolled)
  const toggleCart = useCartStore((state) => state.toggleCart)
  const cartItemsCount = useCartStore((state) => state.items.reduce((acc, item) => acc + item.quantity, 0))
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const pathname = usePathname()

  const navLinks = [
    { name: 'Overview', href: '/overview' },
    { name: 'Design', href: '/design' },
    { name: 'Intelligence', href: '/intelligence' },
    { name: 'Technical Specs', href: '/technical-specs' },
    { name: 'Store', href: '/store' },
  ]

  const getLinkClass = (href: string, isMobile = false) => {
    const isActive = pathname === href
    const baseClass = isMobile ? 'font-medium text-[16px]' : 'font-medium text-[14px] transition-colors'
    
    if (isActive) {
      return `${baseClass} text-[#0B1220]`
    }
    return `${baseClass} text-[#6B7280] hover:text-[#0B1220]`
  }

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
                {navLinks.map((link) => (
                    <Link 
                      key={link.href} 
                      href={link.href} 
                      className={getLinkClass(link.href)}
                    >
                      {link.name}
                    </Link>
                ))}
            </ul>
        </div>
        <div className='hidden md:flex items-center gap-6'>
            <button onClick={toggleCart} className='relative p-2 text-[#0B1220] hover:opacity-70 transition-opacity'>
              <ShoppingBag className='w-5 h-5' />
              {cartItemsCount > 0 && (
                <span className='absolute top-0 right-0 w-4 h-4 bg-blue-600 text-white text-[10px] font-bold flex items-center justify-center rounded-full'>
                  {cartItemsCount}
                </span>
              )}
            </button>
            <Link href="/store" className='bg-[#0B1220] text-white px-6 py-3 rounded-[12px] font-medium text-[14px] hover:scale-105 transition-all duration-300 inline-block'>Pre-order</Link>
        </div>

        <div className='md:hidden flex items-center gap-4'>
            <button onClick={toggleCart} className='relative p-2 text-[#0B1220]'>
              <ShoppingBag className='w-6 h-6' />
              {cartItemsCount > 0 && (
                <span className='absolute top-0 right-0 w-4 h-4 bg-blue-600 text-white text-[10px] font-bold flex items-center justify-center rounded-full'>
                  {cartItemsCount}
                </span>
              )}
            </button>
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
                {navLinks.map((link) => (
                    <Link 
                      key={link.href} 
                      href={link.href} 
                      onClick={() => setIsMenuOpen(false)} 
                      className={getLinkClass(link.href, true)}
                    >
                      {link.name}
                    </Link>
                ))}
            </div>
        )}
    </nav>
  )
}
