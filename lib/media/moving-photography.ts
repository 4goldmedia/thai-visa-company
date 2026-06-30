/**
 * Photography registry for the Moving to Thailand pillar page.
 */

import { getEditorialAsset } from "@/lib/media/editorial-asset-library"
import { editorialPhotography, visaGalleryPhotography } from "@/lib/media/photography"

export type MovingPhoto = {
  src: string
  alt: string
  objectPosition?: string
}

function fromVisaGallery(key: keyof typeof visaGalleryPhotography): MovingPhoto {
  const image = visaGalleryPhotography[key]
  return {
    src: image.src,
    alt: image.alt,
    objectPosition: image.objectPosition,
  }
}

function cityPhoto(src: string, alt: string, objectPosition?: string): MovingPhoto {
  return { src, alt, objectPosition }
}

export const movingPhotography = {
  hero: {
    src: "/images/editorial/moving-to-thailand-bangkok-apartment-hero.jpg",
    alt: "Bangkok apartment at golden hour with luggage by the door and the skyline beyond the balcony",
    objectPosition: "38% center",
  },
  moments: {
    "morning-coffee": getEditorialAsset("blog-premium-long-stay-interior"),
    shopping: getEditorialAsset("retirement-o-vs-oa-market-hero"),
    working: getEditorialAsset("dtv-lifestyle-editorial"),
    healthcare: getEditorialAsset("can-foreigners-live-permanently-hero"),
    "weekend-trips": editorialPhotography.movingSimple,
  },
  cities: {
    bangkok: cityPhoto(
      "/images/moving-to-thailand/cities/Bangkok.webp",
      "Bangkok skyline at sunset with the Chao Phraya River and temples",
    ),
    "chiang-mai": cityPhoto(
      "/images/moving-to-thailand/cities/Chiang Mai.webp",
      "Chiang Mai temple on a forested hillside at golden hour",
    ),
    phuket: cityPhoto(
      "/images/moving-to-thailand/cities/Phuket.webp",
      "Phuket coastline with turquoise water and hillside villas at sunset",
    ),
    "hua-hin": cityPhoto(
      "/images/moving-to-thailand/cities/Hua Hin.webp",
      "Hua Hin beach with white sand, palm trees, and coastal resorts",
    ),
    pattaya: cityPhoto(
      "/images/moving-to-thailand/cities/Pattaya.webp",
      "Pattaya city sign above the harbour with skyline beyond",
    ),
    krabi: getEditorialAsset("krabi-coastline"),
    "koh-samui": cityPhoto(
      "/images/moving-to-thailand/cities/Koh Samui.webp",
      "Koh Samui coastal road with palm trees and turquoise bay",
    ),
  },
  bands: {
    working: fromVisaGallery("business"),
    retirement: fromVisaGallery("retirement"),
  },
} as const satisfies Record<string, unknown>

export function resolveMovingPhoto(key: string): MovingPhoto {
  if (key === "hero") {
    return movingPhotography.hero
  }

  const [group, id] = key.split(".") as [string, string]

  if (group === "moments" && id in movingPhotography.moments) {
    const asset = movingPhotography.moments[id as keyof typeof movingPhotography.moments]
    return {
      src: asset.src,
      alt: asset.alt,
      objectPosition: asset.objectPosition,
    }
  }

  if (group === "cities" && id in movingPhotography.cities) {
    return movingPhotography.cities[id as keyof typeof movingPhotography.cities]
  }

  if (group === "bands" && id in movingPhotography.bands) {
    return movingPhotography.bands[id as keyof typeof movingPhotography.bands]
  }

  return movingPhotography.hero
}
