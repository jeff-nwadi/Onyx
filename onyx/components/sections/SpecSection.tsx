"use client"

import React from 'react'

interface SpecItem {
    label: string;
    value: string | string[];
}

interface SpecSectionProps {
    title: string;
    items: SpecItem[];
}

export default function SpecSection({ title, items }: SpecSectionProps) {
  return (
    <div className='py-12 md:py-16 border-t border-[#0B1220]/5 px-6 md:px-28 w-full max-w-[1400px] mx-auto'>
        <div className='flex flex-col md:flex-row gap-10 md:gap-20'>
            {/* Label Column */}
            <div data-gsap="fade-up" className='w-full md:w-1/3'>
                <h2 className='text-xl md:text-[24px] font-bold text-[#0B1220]'>{title}</h2>
            </div>

            {/* Content Column */}
            <div data-gsap="fade-up" className='w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10'>
                {items.map((item, index) => (
                    <div key={index} className='flex flex-col gap-2 md:gap-3'>
                        <h3 className='text-[13px] md:text-[14px] font-bold text-[#0B1220] tracking-wide'>{item.label}</h3>
                        <div className='text-sm md:text-[16px] font-normal text-[#6B7280] leading-relaxed'>
                            {Array.isArray(item.value) ? (
                                <ul className='list-disc pl-5 space-y-2'>
                                    {item.value.map((val, idx) => (
                                        <li key={idx}>{val}</li>
                                    ))}
                                </ul>
                            ) : (
                                <p>{item.value}</p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}
