import { StaticImageData } from 'next/image'

// Images
import neoCollar from '@/public/images/neo-collar.png'
import chargingDock from '@/public/images/charging-dock.png'
import luminaCollar from '@/public/images/lumina-collar.png'
import luminaSvg from '@/public/images/Lumina.svg'
import neuralCoreSvg from '@/public/images/A1 Neural Core.svg'
import acousticEngineSvg from '@/public/images/Acoustic Engine.svg'
import gpsTrackingSvg from '@/public/images/GPS Tracking.svg'
import healthTrackingSvg from '@/public/images/Health Tracking.svg'

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
    slug: "lumina-smart-collar",
    name: "Lumina Smart Collar",
    description: "The ultimate safety collar for nighttime visibility. Features a seamless illuminated LED band with Onyx's core location tracking.",
    price: 349,
    images: [luminaCollar, luminaCollar, luminaSvg],
    sizes: [
      { id: 'small', name: 'Small', description: '10" - 14"' },
      { id: 'medium', name: 'Medium', description: '14" - 20"' },
      { id: 'large', name: 'Large', description: '20" - 26"' },
    ],
    finishes: [
      { id: 'neon-blue', name: 'Neon Blue' },
      { id: 'crimson-red', name: 'Crimson Red' },
    ],
    plans: [
      { id: 'annual', name: 'Annual Plan', description: 'Billed $96 yearly ($8/mo)', price: 96 },
      { id: 'monthly', name: 'Monthly Plan', description: 'Billed monthly', price: 10 },
    ],
  },
  {
    slug: "magnetic-charging-dock",
    name: "Magnetic Charging Dock",
    description: "Fast-charge your Collar in under 2 hours. Sleek, circular design with magnetic alignment.",
    price: 49,
    images: [chargingDock, chargingDock],
    finishes: [
      { id: 'matte-black', name: 'Matte Black' },
      { id: 'ceramic-white', name: 'Ceramic White' },
    ],
  },
  {
    slug: "active-sport-band",
    name: "Active Sport Band",
    description: "Breathable nylon weave for high-energy days. Durable, lightweight, and vibrant.",
    price: 39,
    images: [neoCollar], // Re-using collar base as band representation for now
    sizes: [
      { id: 'small', name: 'Small', description: '10" - 14"' },
      { id: 'medium', name: 'Medium', description: '14" - 20"' },
      { id: 'large', name: 'Large', description: '20" - 26"' },
    ],
    finishes: [
      { id: 'blaze-orange', name: 'Blaze Orange' },
      { id: 'midnight-blue', name: 'Midnight Blue' },
      { id: 'forest-green', name: 'Forest Green' },
    ],
  },
  {
    slug: "premium-leather-band",
    name: "Premium Leather Band",
    description: "Hand-crafted Italian leather for formal occasions. Fine stitching and luxurious texture.",
    price: 69,
    images: [neoCollar],
    sizes: [
      { id: 'small', name: 'Small', description: '10" - 14"' },
      { id: 'medium', name: 'Medium', description: '14" - 20"' },
      { id: 'large', name: 'Large', description: '20" - 26"' },
    ],
    finishes: [
      { id: 'saddle-brown', name: 'Saddle Brown' },
      { id: 'obsidian-black', name: 'Obsidian Black' },
    ],
  },
  {
    slug: "a1-neural-core",
    name: "A1 Neural Core Module",
    description: "Upgrade your collar with advanced machine-learning capabilities for behavioral predictions.",
    price: 129,
    images: [neuralCoreSvg],
  },
  {
    slug: "acoustic-engine-tag",
    name: "Acoustic Engine Tag",
    description: "Enhance training and recall with a high-fidelity ultrasonic and audible cue module.",
    price: 79,
    images: [acousticEngineSvg],
  },
  {
    slug: "precision-gps-beacon",
    name: "Precision GPS Beacon",
    description: "An ultra-compact secondary tracking unit for extended range off-grid adventures.",
    price: 149,
    images: [gpsTrackingSvg],
  },
  {
    slug: "vital-health-tracker",
    name: "Vital Health Sensor",
    description: "A clip-on expansion module for deep biometric monitoring, including HRV and sleep cycles.",
    price: 99,
    images: [healthTrackingSvg],
  },
]
