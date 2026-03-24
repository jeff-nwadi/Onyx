"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation' 
import { products } from '@/store/products'
import { useCartStore } from '@/store/useCartStore'
import ProductCard from '@/components/sections/ProductCard'

export default function ProductDetailPage() {
  const { slug } = useParams()
  const product = products.find((p) => p.slug === slug)
  const accessories = products.filter((p) => p.slug !== slug)
  const addItem = useCartStore((state) => state.addItem)

  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedSize, setSelectedSize] = useState(product?.sizes?.[1]?.id || '')
  const [selectedFinish, setSelectedFinish] = useState(product?.finishes?.[0]?.id || '')
  const [selectedPlan, setSelectedPlan] = useState(product?.plans?.[0]?.id || '')

  if (!product) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold text-[#0B1220]">Product not found</h1>
        <Link href="/store" className="text-blue-600 hover:underline">← Back to Store</Link>
      </main>
    )
  }

  const selectedPlanData = product.plans?.find(p => p.id === selectedPlan)
  const planPrice = selectedPlanData?.price ?? 0
  const totalDue = product.price + planPrice

  const sizeLabel = (id: string) => {
    const size = product.sizes?.find(s => s.id === id)
    return size?.name ?? ''
  }

  const finishLabel = (id: string) => {
    const finish = product.finishes?.find(f => f.id === id)
    return finish?.name ?? ''
  }

  const handleAddToCart = () => {
    addItem({
      productId: product.slug,
      slug: product.slug,
      name: product.name,
      price: product.price,
      image: product.images[0],
      quantity: 1,
      size: product.sizes ? { id: selectedSize, name: sizeLabel(selectedSize) } : undefined,
      finish: product.finishes ? { id: selectedFinish, name: finishLabel(selectedFinish) } : undefined,
      plan: selectedPlanData ? { id: selectedPlanData.id, name: selectedPlanData.name, price: selectedPlanData.price } : undefined,
    })
  }

  return (
    <main className="min-h-screen bg-[#F7FBFF]">
      {/* ── Store Header ── */}
      <div data-gsap="fade-up" className='pt-28 md:pt-36 pb-10 flex flex-col md:flex-row justify-between items-start md:items-end px-6 md:px-28 w-full max-w-[1400px] mx-auto gap-2'>
        <div className='flex flex-col gap-1'>
          <h1 className='text-4xl md:text-[52px] font-bold text-[#0B1220] tracking-tight'>Store.</h1>
          <p className='text-lg text-[#6B7280]'>Equip your companion.</p>
        </div>
        <span className='text-[22px] font-semibold text-[#0B1220]'>${product.price}</span>
      </div>

      {/* ── Product Detail ── */}
      <div data-gsap="fade-up" className='px-6 md:px-28 w-full max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 pb-20 md:pb-28'>

        {/* Left – image gallery */}
        <div className='flex flex-col gap-4'>
          {/* Main image */}
          <div className='bg-[#E8EFF9] rounded-[24px] overflow-hidden flex items-center justify-center aspect-square p-10 md:p-16'>
            <Image
              src={product.images[selectedImage]}
              alt={product.name}
              className='w-full h-full object-contain'
              priority
            />
          </div>
          {/* Thumbnails */}
          <div className='grid grid-cols-3 gap-4'>
            {product.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedImage(idx)}
                className={`bg-[#E8EFF9] rounded-[16px] aspect-square flex items-center justify-center p-4 border-2 transition-all ${
                  selectedImage === idx ? 'border-[#0B1220]' : 'border-transparent'
                }`}
              >
                <Image src={img} alt={`${product.name} ${idx + 1}`} className='w-full h-full object-contain' />
              </button>
            ))}
          </div>
        </div>

        {/* Right – configurator */}
        <div className='flex flex-col gap-8'>
          {/* Title */}
          <div className='flex flex-col gap-2'>
            <h2 className='text-2xl md:text-[32px] font-bold text-[#0B1220]'>{product.name}</h2>
            <p className='text-[15px] text-[#6B7280] leading-relaxed'>{product.description}</p>
          </div>

          {/* Size picker */}
          {product.sizes && (
            <div className='flex flex-col gap-4'>
              <div className='flex items-center justify-between'>
                <p className='text-[14px] font-semibold text-[#0B1220]'>1. Choose a size</p>
                <button className='text-[13px] text-blue-600 font-medium hover:underline'>Sizing Guide</button>
              </div>
              <div className='grid grid-cols-3 gap-3'>
                {product.sizes.map((size) => (
                  <button
                    key={size.id}
                    onClick={() => setSelectedSize(size.id)}
                    className={`flex flex-col items-center justify-center py-5 rounded-[14px] border-2 transition-all text-center ${
                      selectedSize === size.id
                        ? 'border-[#0B1220] bg-white shadow-sm'
                        : 'border-[#E0E0E0] bg-white hover:border-[#0B1220]/40'
                    }`}
                  >
                    <span className='text-[15px] font-bold text-[#0B1220]'>{size.name}</span>
                    <span className='text-[12px] text-[#6B7280] mt-0.5'>{size.description}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Finish picker */}
          {product.finishes && (
            <div className='flex flex-col gap-4'>
              <p className='text-[14px] font-semibold text-[#0B1220]'>2. Choose a finish</p>
              <div className='grid grid-cols-2 gap-3'>
                {product.finishes.map((finish) => (
                  <button
                    key={finish.id}
                    onClick={() => setSelectedFinish(finish.id)}
                    className={`flex items-center gap-4 px-5 py-5 rounded-[14px] border-2 transition-all ${
                      selectedFinish === finish.id
                        ? 'border-[#0B1220] bg-white shadow-sm'
                        : 'border-[#E0E0E0] bg-white hover:border-[#0B1220]/40'
                    }`}
                  >
                    <div
                      className='w-5 h-5 rounded-full border border-black/10 shrink-0'
                      style={{ backgroundColor: finish.id === 'titanium-silver' ? '#BDBDBD' : '#1C1C1C' }}
                    />
                    <span className='text-[14px] font-semibold text-[#0B1220]'>{finish.name}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Cellular plan */}
          {product.plans && (
            <div className='flex flex-col gap-4'>
              <div className='flex flex-col gap-1'>
                <p className='text-[14px] font-semibold text-[#0B1220]'>3. Neo Cellular Plan</p>
                <p className='text-[12px] text-[#6B7280]'>Required for GPS tracking and remote health monitoring.</p>
              </div>
              <div className='flex flex-col gap-3'>
                {product.plans.map((plan) => (
                  <button
                    key={plan.id}
                    onClick={() => setSelectedPlan(plan.id)}
                    className={`flex items-center justify-between px-5 py-5 rounded-[14px] border-2 transition-all ${
                      selectedPlan === plan.id
                        ? 'border-[#0B1220] bg-white shadow-sm'
                        : 'border-[#E0E0E0] bg-white hover:border-[#0B1220]/40'
                    }`}
                  >
                    <div className='flex flex-col items-start gap-0.5'>
                      <span className='text-[14px] font-bold text-[#0B1220]'>{plan.name}</span>
                      <span className='text-[12px] text-[#6B7280]'>{plan.description}</span>
                    </div>
                    <div className='flex flex-col items-end gap-0.5'>
                      {plan.id === 'annual' && (
                        <span className='text-[12px] font-bold text-blue-600'>Save 20%</span>
                      )}
                      {plan.id === 'monthly' && (
                        <span className='text-[14px] font-semibold text-[#0B1220]'>${plan.price} / mo</span>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Order Summary Box */}
          <div className='flex flex-col gap-5 bg-[#F0F4FA] rounded-[20px] p-6 md:p-8'>
            {/* Line items */}
            <div className='flex flex-col gap-3 pb-5 border-b border-[#0B1220]/8'>
              <div className='flex justify-between text-[15px] text-[#0B1220]'>
                <span className='font-medium'>{product.name}</span>
                <span className='font-medium'>${product.price}</span>
              </div>
              {selectedPlanData && (
                <div className='flex justify-between text-[14px] text-[#0B1220]'>
                  <span>{selectedPlanData.name}</span>
                  <span>
                    ${selectedPlanData.price}
                    {selectedPlanData.id === 'monthly' ? ' / mo' : ' / yr'}
                  </span>
                </div>
              )}
            </div>
            {/* Total */}
            <div className='flex justify-between items-center'>
              <span className='text-[18px] font-bold text-[#0B1220]'>Total due today</span>
              <span className='text-[24px] font-bold text-[#0B1220]'>${totalDue}</span>
            </div>
            {/* CTA */}
            <button 
              onClick={handleAddToCart}
              className='w-full bg-[#0B1220] text-white py-5 rounded-[14px] font-bold text-[16px] hover:bg-[#1a2840] hover:scale-[1.01] transition-all duration-200'
            >
              Add to Bag
            </button>
            <p className='text-center text-[12px] text-[#6B7280]'>Ships in 2–4 weeks. Free shipping and returns.</p>
          </div>
        </div>
      </div>

      {/* ── Accessories ── */}
      <div className='pb-24 px-6 md:px-28 w-full max-w-[1400px] mx-auto'>
        <h2 data-gsap="fade-up" className='text-3xl md:text-[40px] font-bold text-[#0B1220] text-center mb-12'>Accessories.</h2>
        <div data-gsap="stagger" className='grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10'>
          {accessories.map((item) => (
            <ProductCard 
              key={item.slug}
              slug={item.slug}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.images[0]}
            />
          ))}
        </div>
      </div>
    </main>
  )
}
