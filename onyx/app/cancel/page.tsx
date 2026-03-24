"use client"

import React from 'react'
import Link from 'next/link'
import { XCircle } from 'lucide-react'

export default function CancelPage() {
  return (
    <main className="min-h-screen bg-[#F7FBFF] flex flex-col items-center justify-center pt-20 pb-32 px-6 text-center">
      <div data-gsap="fade-up" className="flex flex-col items-center max-w-lg bg-white p-10 md:p-14 rounded-[32px] shadow-2xl shadow-black/5">
        <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mb-8">
          <XCircle className="w-10 h-10 text-red-500" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-[#0B1220] tracking-tight mb-4">Checkout Cancelled.</h1>
        <p className="text-[16px] text-[#6B7280] leading-relaxed mb-10">
          Your payment was not processed and you have not been charged. The items are still saved in your bag.
        </p>
        
        <div className="flex flex-col gap-4 w-full">
          <Link 
            href="/store"
            className="w-full bg-[#0B1220] text-white py-4 rounded-[14px] font-bold text-[16px] hover:bg-[#1a2840] hover:scale-[1.02] transition-all duration-200"
          >
            Return to Store
          </Link>
          <Link 
            href="/"
            className="w-full bg-[#F0F4FA] text-[#0B1220] py-4 rounded-[14px] font-bold text-[16px] hover:bg-[#E0E8F4] transition-all duration-200"
          >
            Return Home
          </Link>
        </div>
      </div>
    </main>
  )
}
