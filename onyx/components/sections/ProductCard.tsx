"use client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface ProductCardProps {
    slug: string;
    name: string;
    description: string;
    price: number;
    image: any;
}

export default function ProductCard({ slug, name, description, price, image }: ProductCardProps) {
  return (
    <div className='flex flex-col gap-6 group'>
        <Link href={`/store/${slug}`} className='aspect-square bg-[#E9F2FF] rounded-[24px] overflow-hidden flex items-center justify-center relative p-12 transition-all duration-500 group-hover:scale-[1.01]'>
            <Image src={image} alt={name} className='w-full h-full object-contain' />
        </Link>
        <div className='flex flex-col gap-2'>
            <h3 className='text-[20px] md:text-[22px] font-bold text-[#0B1220]'>{name}</h3>
            <p className='text-[14px] md:text-[15px] font-normal text-[#6B7280] leading-relaxed min-h-[44px]'>{description}</p>
            <div className='flex flex-col gap-4 mt-2'>
                <span className='text-[18px] md:text-[20px] font-bold text-[#0B1220]'>${price}</span>
                <button className='bg-[#E9F2FF] text-[#0B1220] py-4 rounded-[12px] font-medium text-[14px] hover:bg-[#D9E8FF] transition-colors w-full'>Add</button>
            </div>
        </div>
    </div>
  )
}
