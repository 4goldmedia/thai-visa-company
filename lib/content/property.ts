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
  /**
   * Lifestyle immersion gallery  -  editorial Unsplash selects (real photography).
   * Not property listings; aspirational living in Thailand.
   */
  gallery: {
    ariaLabel: "Lifestyle homes in Thailand",
    slides: [
      {
        id: "bangkok-condominium",
        title: "Bangkok Condominiums",
        description: "Modern city living in Thailand's capital.",
        imageSrc:
          "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85",
        imageAlt:
          "Bright designer condominium with floor-to-ceiling windows, oak finishes and warm morning sunlight",
      },
      {
        id: "beautiful-interior",
        title: "Beautiful Interiors",
        description: "Spaces you'll love coming home to.",
        imageSrc:
          "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1600&q=85",
        imageAlt:
          "Warm living room with linen sofa, books, plants and soft sunlight on wood finishes",
      },
      {
        id: "modern-townhouse",
        title: "Modern Townhouses",
        description: "Perfect for families and long-term living.",
        imageSrc:
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85",
        imageAlt:
          "Modern townhouse exterior with clean architecture, landscaping and golden afternoon light",
      },
      {
        id: "luxury-villa",
        title: "Private Villas",
        description: "Enjoy tropical living with extra space.",
        imageSrc:
          "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1600&q=85",
        imageAlt:
          "Luxury villa with infinity pool, glass doors and tropical garden in warm evening light",
      },
      {
        id: "balcony-view",
        title: "Wake Up to Thailand",
        description: "A home you'll love every day.",
        imageSrc:
          "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1600&q=85",
        imageAlt:
          "Bright apartment with lounge seating and large windows suggesting a calm morning at home",
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
