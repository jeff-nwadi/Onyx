"use client"

import React from 'react'
import SpecsHero from '@/components/sections/SpecsHero'
import SpecSection from '@/components/sections/SpecSection'
import PreOrderSection from '@/components/sections/PreOrderSection'

const specsData = [
  {
    title: "Dimensions & Weight",
    items: [
      { label: "Size", value: "55mm x 20mm x 10mm (2.1\" x 0.8\" x 0.4\")" },
      { label: "Weight", value: "28g (Tracker only)" },
      { label: "Collar Compatibility", value: "Fits standard collars from 1/2\" to 1.5\" wide. Attachment bands included." }
    ]
  },
  {
    title: "Sensors",
    items: [
      { label: "Heart Rate", value: "Clinical-grade optical sensor with continuous monitoring." },
      { label: "Temperature", value: "High-precision thermal array accurate to +/- 0.1°C." },
      { label: "Motion", value: "9-axis IMU (accelerometer, gyroscope, and magnetometer) for activity and gait quality." },
      { label: "Environment", value: "Ambient light sensor with measurement for optimal visibility levels." }
    ]
  },
  {
    title: "Connectivity & Location",
    items: [
      { label: "Cellular", value: "Global LTE-M / NB-IoT network coverage in 170+ countries. Built-in eSIM." },
      { label: "Location Tracking", value: "Multi-band GNSS (GPS, GLONASS, Galileo, QZSS) for elite-level accuracy." },
      { label: "Local Wireless", value: "Bluetooth 5.3 and Wi-Fi 802.11b/g/n for sync at home." },
      { label: "Proximity Tracking", value: "Ultra-wideband (UWB) chips for sub-inch indoor spatial awareness." }
    ]
  },
  {
    title: "Power & Battery",
    items: [
      { label: "Battery Type", value: "Custom high-density solid-state lithium ceramic cell." },
      { label: "Battery Life", value: ["Up to 40 days on standard monitoring mode.", "Up to 14 days on continuous real-time GPS tracking."] },
      { label: "Charging", value: "Magnetic fast-charging cable. 0% to 100% in 45 minutes." }
    ]
  },
  {
    title: "Durability & Materials",
    items: [
      { label: "Water Resistance", value: "IP68 certified. Submersible up to 10 meters for 60 minutes." },
      { label: "Enclosure Materials", value: "Aerospace-grade titanium casing. Ceramic (Black) back plate. Medical-grade biocompatible silicone bands." },
      { label: "Operating Temperature", value: "-20°C to 45°C (-4°F to 113°F). Built for extreme environments." }
    ]
  },
  {
    title: "In the Box",
    items: [
      { label: "Box Contents", value: ["Lumina Smart Tracker", "Magnetic Fast Charging Cable (USB-C)", "2x Secure Attachment Bands (Small/Medium, Large)", "Quick Start Guide & Warranty Documentation"] }
    ]
  }
];

export default function TechnicalSpecsPage() {
  return (
    <main className="min-h-screen bg-[#F7FBFF]">
      <SpecsHero />
      <div className="flex flex-col items-center">
        {specsData.map((section, index) => (
          <SpecSection 
            key={index} 
            title={section.title} 
            items={section.items} 
          />
        ))}
      </div>
      <PreOrderSection />
    </main>
  )
}
