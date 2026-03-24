import { StaticImageData } from 'next/image'

// Images
import neoCollar from '@/public/images/neo-collar.png'
import chargingDock from '@/public/images/charging-dock.png'
import placeholderBand from '@/public/images/lumina-collar.png'

export interface ProductSize {
  id: string
  name: string
  description: string
}

export interface ProductFinish {
  id: string
  name: string
}

export interface ProductPlan {
  id: string
  name: string
  description: string
  price: number
}

export interface Product {
  slug: string
  name: string
  description: string
  price: number
  images: StaticImageData[]
  sizes?: ProductSize[]
  finishes?: ProductFinish[]
  plans?: ProductPlan[]
}

export const products: Product[] = [
  {
    slug: "neo-smart-collar",
    name: "Neo Smart Collar",
    description: "The ultimate health and location tracker for your dog. Durable, water-resistant, and high-performance.",
    price: 299,
    images: [neoCollar, neoCollar, neoCollar],
    sizes: [
      { id: 'small', name: 'Small', description: '10" - 14"' },
      { id: 'medium', name: 'Medium', description: '14" - 20"' },
      { id: 'large', name: 'Large', description: '20" - 26"' },
    ],
    finishes: [
      { id: 'titanium-silver', name: 'Titanium Silver' },
      { id: 'space-black', name: 'Space Black' },
    ],
    plans: [
      { id: 'annual', name: 'Annual Plan', description: 'Billed $96 yearly ($8/mo)', price: 96 },
      { id: 'monthly', name: 'Monthly Plan', description: 'Billed monthly', price: 10 },
    ],
  },
  {
    slug: "magnetic-charging-dock",
    name: "Magnetic Charging Dock",
    description: "Fast-charge your Neo in under 2 hours. Sleek, circular design with magnetic alignment.",
    price: 49,
    images: [chargingDock],
  },
  {
    slug: "active-sport-band",
    name: "Active Sport Band",
    description: "Breathable nylon weave for high-energy days. Durable, lightweight, and vibrant orange.",
    price: 39,
    images: [placeholderBand],
  },
  {
    slug: "premium-leather-band",
    name: "Premium Leather Band",
    description: "Hand-crafted Italian leather for formal occasions. Fine stitching and luxurious texture.",
    price: 69,
    images: [placeholderBand],
  },
]
