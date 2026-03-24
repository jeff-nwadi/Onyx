"use client"

import React, { useEffect, useState } from 'react'
import { useCartStore } from '@/store/useCartStore'
import { X, Minus, Plus, ShoppingBag, Loader2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function CartSidebar() {
  const [mounted, setMounted] = useState(false)
  const [isCheckingOut, setIsCheckingOut] = useState(false)
  
  const { 
    items, 
    isCartOpen, 
    setIsCartOpen, 
    removeItem, 
    updateQuantity, 
    cartTotal 
  } = useCartStore()

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  const handleCheckout = async () => {
    try {
      setIsCheckingOut(true)
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items }),
      })

      let data
      try {
        data = await response.json()
      } catch (e) {
        throw new Error('Server returned an invalid response (not JSON).')
      }

      if (data.url) {
        window.location.href = data.url
      } else {
        console.error('Checkout error:', data.error)
        alert(data.error || 'Failed to initiate checkout.')
        setIsCheckingOut(false)
      }
    } catch (error: any) {
      console.error('Checkout network error:', error)
      alert(error.message || 'Network error while initiating checkout.')
      setIsCheckingOut(false)
    }
  }

  if (!mounted) return null

  return (
    <>
      {/* Backdrop */}
      {isCartOpen && (
        <div 
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[100] transition-opacity"
          onClick={() => setIsCartOpen(false)}
        />
      )}

      {/* Sidebar Panel */}
      <div 
        className={`fixed top-0 right-0 h-full w-full sm:w-[450px] bg-white z-[101] shadow-2xl transform transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <h2 className="text-[20px] font-bold text-[#0B1220] flex items-center gap-2">
            <ShoppingBag className="w-5 h-5" />
            Your Bag ({items.reduce((acc, item) => acc + item.quantity, 0)})
          </h2>
          <button 
            onClick={() => setIsCartOpen(false)}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-[#0B1220]" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center gap-4 text-[#6B7280]">
              <ShoppingBag className="w-12 h-12 opacity-20" />
              <p className="text-[15px]">Your bag is empty.</p>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="text-[#0B1220] font-semibold underline mt-2"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.cartItemId} className="flex gap-4">
                {/* Image */}
                <div className="w-[100px] h-[100px] bg-[#F7FBFF] rounded-[14px] flex items-center justify-center p-2 shrink-0">
                  <Image src={item.image} alt={item.name} className="w-full h-full object-contain" />
                </div>
                
                {/* Details */}
                <div className="flex flex-col flex-1 justify-between">
                  <div className="flex flex-col gap-0.5">
                    <div className="flex justify-between items-start">
                      <h3 className="font-bold text-[15px] text-[#0B1220]">{item.name}</h3>
                      <span className="font-bold text-[15px] text-[#0B1220]">
                        ${(item.price + (item.plan?.price || 0)) * item.quantity}
                      </span>
                    </div>
                    
                    {/* Variants list summary */}
                    <div className="text-[13px] text-[#6B7280] flex flex-col mt-1 space-y-0.5">
                      {item.size && <span>Size: {item.size.name}</span>}
                      {item.finish && <span>Finish: {item.finish.name}</span>}
                      {item.plan && <span>Plan: {item.plan.name}</span>}
                    </div>
                  </div>
                  
                  {/* Actions (Qty + Remove) */}
                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center bg-[#F4F6F9] rounded-full border border-gray-100">
                      <button 
                        onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)}
                        className="w-8 h-8 flex items-center justify-center text-[#0B1220] hover:bg-gray-200 rounded-l-full transition-colors"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-8 text-center text-[13px] font-semibold text-[#0B1220]">
                        {item.quantity}
                      </span>
                      <button 
                         onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)}
                        className="w-8 h-8 flex items-center justify-center text-[#0B1220] hover:bg-gray-200 rounded-r-full transition-colors"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                    <button 
                      onClick={() => removeItem(item.cartItemId)}
                      className="text-[12px] font-medium text-gray-400 hover:text-red-500 transition-colors underline"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer Checkout Area */}
        {items.length > 0 && (
          <div className="p-6 bg-[#F8FAFC] border-t border-gray-100 flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <span className="text-[15px] text-[#6B7280] font-medium">Subtotal</span>
              <span className="text-[20px] font-bold text-[#0B1220]">${cartTotal()}</span>
            </div>
            <p className="text-[12px] text-[#6B7280]">Shipping and taxes calculated at checkout.</p>
            <button 
              onClick={handleCheckout}
              disabled={isCheckingOut}
              className="w-full bg-[#0B1220] text-white py-4 rounded-[12px] font-bold text-[15px] hover:scale-[1.02] transition-transform duration-200 shadow-xl shadow-black/10 flex items-center justify-center gap-2 disabled:opacity-70 disabled:hover:scale-100"
            >
              {isCheckingOut ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" /> Processing...
                </>
              ) : (
                'Checkout'
              )}
            </button>
          </div>
        )}
      </div>
    </>
  )
}
