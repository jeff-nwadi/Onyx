"use client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useCartStore } from '@/store/useCartStore'

interface ProductCardProps {
    slug: string;
    name: string;
    description: string;
    price: number;
    image: any;
}

export default function ProductCard({ slug, name, description, price, image }: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem)

  return (
    <div className='flex flex-col bg-[#E9F2FF] rounded-[16px] p-5 group'>
        <Link 
          href={`/store/${slug}`} 
          className='aspect-square w-full flex items-center justify-center relative p-2 mb-4 transition-transform duration-500 group-hover:scale-[1.02]'
        >
            <Image src={image} alt={name} className='w-full h-full object-contain' />
        </Link>
        <div className='flex flex-col flex-1 pb-2'>
            <Link href={`/store/${slug}`}>
              <h3 className='text-[18px] md:text-[20px] font-bold text-[#0B1220] text-center hover:opacity-80 transition-opacity'>{name}</h3>
            </Link>
            <p className='text-[13px] font-normal text-[#6B7280] text-center mt-3 leading-relaxed min-h-[44px] px-2'>
                {description}
            </p>
            <div className='mt-auto flex flex-col items-center gap-5 pt-6'>
                <span className='text-[16px] font-bold text-[#0B1220]'>${price}</span>
                <button 
                  onClick={(e) => {
                    e.preventDefault()
                    addItem({
                      productId: slug,
                      slug: slug,
                      name: name,
                      price: price,
                      image: image,
                      quantity: 1
                    })
                  }}
                  className='w-full border border-[#D1D5DB] bg-transparent hover:bg-white text-[#0B1220] py-3 rounded-[12px] font-semibold text-[14px] transition-all z-10 relative'
                >
                  Add
                </button>
            </div>
        </div>
    </div>
  )
}
