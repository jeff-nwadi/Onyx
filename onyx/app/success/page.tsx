"use client"

import React, { useEffect } from 'react'
import Link from 'next/link'
import { CheckCircle2 } from 'lucide-react'
import { useCartStore } from '@/store/useCartStore'

export default function SuccessPage() {
  const clearCart = useCartStore((state) => state.clearCart)

  useEffect(() => {
    // Clear the cart on successful checkout
    clearCart()
  }, [clearCart])

  return (
    <main className="min-h-screen bg-[#F7FBFF] flex flex-col items-center justify-center pt-20 pb-32 px-6 text-center">
      <div data-gsap="fade-up" className="flex flex-col items-center max-w-lg bg-white p-10 md:p-14 rounded-[32px] shadow-2xl shadow-black/5">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-8">
          <CheckCircle2 className="w-10 h-10 text-green-600" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-[#0B1220] tracking-tight mb-4">Order Confirmed.</h1>
        <p className="text-[16px] text-[#6B7280] leading-relaxed mb-10">
          Thank you for your purchase. We've sent a confirmation email with your order details and tracking information.
        </p>
        
        <div className="flex flex-col gap-4 w-full">
          <Link 
            href="/store"
            className="w-full bg-[#0B1220] text-white py-4 rounded-[14px] font-bold text-[16px] hover:bg-[#1a2840] hover:scale-[1.02] transition-all duration-200"
          >
            Continue Shopping
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
