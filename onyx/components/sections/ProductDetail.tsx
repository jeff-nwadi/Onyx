"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

interface Variant {
    id: string;
    name: string;
    description?: string;
    price?: number;
}

interface ProductDetailProps {
    name: string;
    description: string;
    basePrice: number;
    images: any[];
    sizes?: Variant[];
    finishes?: Variant[];
    plans?: Variant[];
}

export default function ProductDetail({ 
    name, 
    description, 
    basePrice, 
    images, 
    sizes, 
    finishes, 
    plans 
}: ProductDetailProps) {
    const [selectedSize, setSelectedSize] = useState(sizes?.[0]?.id || '')
    const [selectedFinish, setSelectedFinish] = useState(finishes?.[0]?.id || '')
    const [selectedPlan, setSelectedPlan] = useState(plans?.[0]?.id || '')

    const planPrice = plans?.find(p => p.id === selectedPlan)?.price || 0
    const totalDue = basePrice + planPrice

    return (
        <div className='py-12 md:py-24 px-6 md:px-28 w-full max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24'>
            {/* Left: Image Gallery */}
            <div className='flex flex-col gap-6'>
                <div data-gsap="fade-up" className='aspect-square bg-[#E9F2FF] rounded-[32px] overflow-hidden flex items-center justify-center p-12 md:p-20 relative'>
                    <Image src={images[0]} alt={name} className='w-full h-full object-contain' />
                </div>
                <div data-gsap="stagger" className='grid grid-cols-3 gap-4'>
                    {images.map((img, idx) => (
                        <div key={idx} className='aspect-square bg-[#E9F2FF] rounded-[16px] overflow-hidden flex items-center justify-center p-4 border-2 border-transparent hover:border-[#0B1220]/10 transition-colors cursor-pointer'>
                            <Image src={img} alt={`${name} ${idx + 1}`} className='w-full h-full object-contain' />
                        </div>
                    ))}
                </div>
            </div>

            {/* Right: Product Info & Options */}
            <div data-gsap="fade-up" className='flex flex-col gap-10'>
                <div className='flex flex-col gap-3'>
                    <h1 className='text-3xl md:text-[48px] font-bold text-[#0B1220] tracking-tight'>{name}</h1>
                    <p className='text-lg text-[#6B7280] max-w-[500px] leading-relaxed'>{description}</p>
                </div>

                {/* Sizes Selection */}
                {sizes && (
                    <div className='flex flex-col gap-5'>
                        <div className='flex items-center justify-between'>
                            <h3 className='text-[16px] font-bold text-[#0B1220]'>1. Choose a size</h3>
                            <button className='text-[14px] font-medium text-blue-600 hover:underline'>Sizing Guide</button>
                        </div>
                        <div className='grid grid-cols-3 gap-4'>
                            {sizes.map((size) => (
                                <button
                                    key={size.id}
                                    onClick={() => setSelectedSize(size.id)}
                                    className={`flex flex-col items-center justify-center py-6 rounded-[16px] border-2 transition-all ${
                                        selectedSize === size.id 
                                            ? 'border-[#0B1220] bg-white shadow-sm' 
                                            : 'border-transparent bg-[#F7FBFF] hover:bg-[#E9F2FF]'
                                    }`}
                                >
                                    <span className='font-bold text-[#0B1220]'>{size.name}</span>
                                    <span className='text-[12px] text-[#6B7280]'>{size.description}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {/* Finishes Selection */}
                {finishes && (
                    <div className='flex flex-col gap-5'>
                        <h3 className='text-[16px] font-bold text-[#0B1220]'>2. Choose a finish</h3>
                        <div className='grid grid-cols-2 gap-4'>
                            {finishes.map((finish) => (
                                <button
                                    key={finish.id}
                                    onClick={() => setSelectedFinish(finish.id)}
                                    className={`flex items-center gap-4 px-6 py-5 rounded-[16px] border-2 transition-all ${
                                        selectedFinish === finish.id 
                                            ? 'border-[#0B1220] bg-white shadow-sm' 
                                            : 'border-transparent bg-[#F7FBFF] hover:bg-[#E9F2FF]'
                                    }`}
                                >
                                    <div className='w-6 h-6 rounded-full border border-black/10' style={{ backgroundColor: finish.id === 'titanium-silver' ? '#CACACA' : '#1C1C1C' }} />
                                    <span className='font-bold text-[#0B1220]'>{finish.name}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {/* Cellular Plan Selection */}
                {plans && (
                    <div className='flex flex-col gap-5'>
                        <h3 className='text-[16px] font-bold text-[#0B1220]'>3. Neo Cellular Plan</h3>
                        <div className='flex flex-col gap-3'>
                            {plans.map((plan) => (
                                <button
                                    key={plan.id}
                                    onClick={() => setSelectedPlan(plan.id)}
                                    className={`flex items-center justify-between px-6 py-5 rounded-[16px] border-2 transition-all ${
                                        selectedPlan === plan.id 
                                            ? 'border-[#0B1220] bg-white shadow-sm' 
                                            : 'border-transparent bg-[#F7FBFF] hover:bg-[#E9F2FF]'
                                    }`}
                                >
                                    <div className='flex flex-col items-start'>
                                        <span className='font-bold text-[#0B1220]'>{plan.name}</span>
                                        <span className='text-[12px] text-[#6B7280]'>{plan.description}</span>
                                    </div>
                                    <div className='flex flex-col items-end gap-1'>
                                      {plan.price !== undefined && plan.price > 0 && <span className='font-bold text-[#0B1220]'>${plan.price} / yr</span>}
                                      {plan.id === 'annual' && <span className='text-[12px] font-bold text-blue-600'>Save 20%</span>}
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {/* Summary & Add to Bag */}
                <div className='bg-[#E9F2FF] p-8 md:p-10 rounded-[28px] flex flex-col gap-6 mt-4'>
                    <div className='flex flex-col gap-3 border-b border-[#0B1220]/5 pb-6'>
                        <div className='flex justify-between items-center text-[15px] font-medium text-[#0B1220]'>
                            <span>{name}</span>
                            <span>${basePrice}</span>
                        </div>
                        {selectedPlan && plans?.find(p => p.id === selectedPlan)?.price! > 0 && (
                            <div className='flex justify-between items-center text-[15px] font-medium text-[#0B1220]'>
                                <span>{plans?.find(p => p.id === selectedPlan)?.name}</span>
                                <span>${plans?.find(p => p.id === selectedPlan)?.price} / yr</span>
                            </div>
                        )}
                    </div>
                    <div className='flex justify-between items-center'>
                        <span className='text-[20px] font-bold text-[#0B1220]'>Total due today</span>
                        <span className='text-[24px] font-bold text-[#0B1220]'>${totalDue}</span>
                    </div>
                    <Button className='bg-[#0B1220] text-white py-8 rounded-[16px] text-[18px] font-bold hover:scale-[1.02] transition-transform'>Add to Bag</Button>
                    <p className='text-center text-[13px] text-[#6B7280]'>Ships in 2-4 weeks. Free shipping and returns.</p>
                </div>
            </div>
        </div>
    )
}
