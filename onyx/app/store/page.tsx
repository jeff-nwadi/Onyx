import React from 'react'
import StoreHeader from '@/components/sections/StoreHeader'
import ProductCard from '@/components/sections/ProductCard'
import { products } from '@/store/products'

export default function StorePage() {
  return (
    <main className="min-h-screen bg-[#F7FBFF] pb-20">
      <StoreHeader />
      <div className='px-6 md:px-28 w-full max-w-[1400px] mx-auto'>
        <div data-gsap="stagger" className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-16'>
            {products.map((product) => (
                <ProductCard 
                    key={product.slug}
                    slug={product.slug}
                    name={product.name}
                    description={product.description}
                    price={product.price}
                    image={product.images[0]}
                />
            ))}
        </div>
      </div>
    </main>
  )
}