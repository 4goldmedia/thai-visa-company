import {
  FileText,
  Home,
  KeyRound,
  MapPin,
  type LucideIcon,
} from "lucide-react"

import { propertyPath } from "@/lib/navigation"

export { propertyPath }

export type PropertyFeature = {
  icon: LucideIcon
  title: string
  description: string
}

export type PropertyGallerySlide = {
  id: string
  title: string
  description: string
  imageSrc: string
  imageAlt: string
}

export const propertyPageContent = {
  hero: {
    eyebrow: "Property",
    title: "Find your perfect home in Thailand.",
    lead: [
      "Next to our visa services, we help you find the right home for your new life in Thailand.",
      "Whether you're looking for a condominium in Bangkok, a villa in Phuket, or a family home in Chiang Mai, we'll guide you through every step so you can settle in with confidence.",
    ],
    ctaLabel: "Let Nongmai help you find your home",
    imageSrc: "/images/moving-to-thailand/cities/Phuket.webp",
    imageAlt:
      "Modern villa with a swimming pool surrounded by tropical greenery in warm afternoon light",
  },
  about: {
    eyebrow: "Why choose us",
    heading: "More than finding a property.",
    paragraphs: [
      "Finding a home in another country can feel overwhelming.",
      "We simplify the process by helping you discover neighbourhoods, arrange viewings, communicate with landlords, review contracts, and support you every step of the way.",
      "Our goal is to help you start your new life in Thailand with confidence, not stress.",
    ],
  },
  features: [
    {
      icon: Home,
      title: "Curated Homes",
      description:
        "We carefully match properties to your lifestyle, location preferences, and budget.",
    },
    {
      icon: MapPin,
      title: "Local Expertise",
      description:
        "Benefit from neighbourhood knowledge and recommendations you won't find online.",
    },
    {
      icon: FileText,
      title: "End-to-End Support",
      description:
        "We assist with communication, property viewings, paperwork, negotiations, and contracts.",
    },
    {
      icon: KeyRound,
      title: "Move-in Assistance",
      description:
        "From utilities to local advice, we're here even after you've received the keys.",
    },
  ] as const satisfies ReadonlyArray<PropertyFeature>,
  services: {
    eyebrow: "Property services",
    headingLine1: "Whether you're renting or buying,",
    headingLine2: "we're here to help.",
    paragraphs: [
      "Finding the right home is one of the biggest parts of starting your life in Thailand.",
      "Whether you're looking for a long-term rental or planning to purchase your dream property, we provide trusted local guidance from your first search to the day you receive your keys.",
    ],
    cards: [
      {
        icon: KeyRound,
        title: "Renting",
        description:
          "We'll help you shortlist properties, arrange viewings, communicate with landlords, review rental agreements, and guide you through the rental process from start to finish.",
      },
      {
        icon: Home,
        title: "Buying",
        description:
          "Whether you're purchasing a condominium, villa, or investment property, we'll help you understand the process, connect you with trusted professionals, and make informed decisions.",
      },
    ] as const satisfies ReadonlyArray<PropertyFeature>,
  },
  /**
   * Lifestyle immersion gallery  -  premium property photography.
   * Not property listings; aspirational living in Thailand.
   */
  gallery: {
    ariaLabel: "Lifestyle homes in Thailand",
    slides: [
      {
        id: "bangkok-condominium",
        title: "Bangkok Condominiums",
        description: "Modern city living in Thailand's capital.",
        imageSrc: "/images/property/bangkok-condominiums.webp",
        imageAlt:
          "Aerial view of Bangkok condominiums along the Chao Phraya River at golden hour",
      },
      {
        id: "beautiful-interior",
        title: "Beautiful Interiors",
        description: "Spaces you'll love coming home to.",
        imageSrc: "/images/property/beautiful-interiors.webp",
        imageAlt:
          "Bright double-height living room with grey sofa, glass staircase and floor-to-ceiling windows",
      },
      {
        id: "modern-townhouse",
        title: "Modern Townhouses",
        description: "Perfect for families and long-term living.",
        imageSrc: "/images/property/modern-townhouses.webp",
        imageAlt:
          "Modern multi-story townhouse glowing with warm light at dusk among tropical landscaping",
      },
      {
        id: "luxury-villa",
        title: "Private Villas",
        description: "Luxury tropical living with complete privacy.",
        imageSrc: "/images/property/private-villas-thailand.webp",
        imageAlt:
          "Luxury hillside villa with infinity pool, terraces and tropical gardens in bright sunlight",
      },
      {
        id: "balcony-view",
        title: "Wake Up to Thailand",
        description: "Imagine calling this home every day.",
        imageSrc: "/images/property/wake-up-to-thailand.webp",
        imageAlt:
          "Bangkok skyline at sunset with elevated train line and modern high-rise condominiums",
      },
    ] as const satisfies ReadonlyArray<PropertyGallerySlide>,
  },
  specialist: {
    heading: "Why clients choose Nongmai",
    bio: [
      "Finding the right home isn't only about the building.",
      "It's about choosing the right neighbourhood, commute, schools, lifestyle, safety, and long-term comfort.",
      "Nongmai personally helps every client make these decisions using local experience and honest advice.",
      "You'll receive clear guidance from someone who genuinely understands relocation, not simply real estate.",
    ],
    name: "Nongmai",
    role: "Property & Relocation Specialist",
    quote:
      "I'll help you find not just a property, but the right place to call home.",
    imageSrc: "/images/team/nongmai.png",
    imageAlt:
      "Nongmai, Property and Relocation Specialist at Thai Visa Company",
  },
  cta: {
    title: "Ready to find your new home?",
    description:
      "Whether you're relocating for work, retirement, or a fresh start, we'll help you find a place that truly feels like home.",
    buttonLabel: "Request a Consultation",
  },
} as const
