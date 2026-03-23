"use client"

import React from 'react'
import { Cpu, MapPin } from 'lucide-react'

const data = [
    {
        title: "Intelligence",
        description: "Powered by the custom A1 Pet Silicon. Capable of 1.2 trillion operations per second to analyze behavioral patterns and health markers directly on-device.",
        icon: Cpu
    },
    {
        title: "Biometrics",
        description: "Clinical-grade optical sensors provide continuous, non-invasive monitoring of vital signs, deep sleep cycles, and daily caloric burn. ",
        icon: MapPin
    },
    {
        title: "Connectivity",
        description: "Never lose track. Multi-band GPS and global cellular coverage ensure you always know where they are, backed by an unprecedented power unit. ",
        icon: MapPin
    }
]

const data2 = [
    { title: "Machine Learning", description: "16-Core Neural Engine" },
    { title: "Heart & Vitals", description: "2nd Gen Optical Sensor" },
    { title: "Location", description: "L1+L5 GNSS & 5G Cellular" },
    { title: "Memory", description: "8GB Unified Architecture" },
    { title: "Temperature", description: "High-precision Thermal Array" },
    { title: "Battery Life", description: "Up to 40 Days (Solid-State)" }
]

export default function TechnicalPage() {
  return (
    <div className='bg-[#E9F2FF] py-16 md:py-20 overflow-hidden px-6'>
        <div className='flex flex-col justify-center items-center text-center'>
            <h1 data-gsap="fade-up" className='text-3xl md:text-[50px] font-bold py-3 text-[#0B1220] flex flex-col items-center justify-center leading-[110%] md:leading-[100%]'>Technical Specifications.</h1>
        </div>
        <div>
            <div data-gsap="stagger" className='grid grid-cols-1 md:grid-cols-3 py-10 md:py-18 gap-10 md:gap-15 px-0 md:px-28'>
                {data.map((item, index) => (
                    <div key={index} className='flex flex-col gap-4 md:gap-5 text-center md:text-left items-center md:items-start'>
                        <item.icon className='w-8 h-8 md:w-10 md:h-10 text-[#0B1220]' />
                        <h2 className='text-xl md:text-[24px] font-bold text-[#0B1220]'>{item.title}</h2>
                        <p className='text-sm md:text-[16px] font-normal text-[#6B7280]'>{item.description}</p>
                    </div>
                ))}
            </div>
            <div className='h-px bg-[#0B1220]/10 mx-0 md:mx-28' />
            <div data-gsap="stagger" className='grid grid-cols-2 md:grid-cols-3 py-10 md:py-18 gap-8 md:gap-15 px-0 md:px-28'>
                {data2.map((item, index) => (
                    <div key={index} className='flex flex-col gap-2 md:gap-3 text-center md:text-left'>
                        <h2 className='text-[11px] md:text-[13px] font-bold text-[#6B7280] uppercase'>{item.title}</h2>
                        <p className='text-base md:text-[18px] font-normal text-[#0B1220]'>{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}
