/**
 * Photography registry for the Moving to Thailand pillar page.
 */

import { getEditorialAsset } from "@/lib/media/editorial-asset-library"
import { editorialPhotography, visaGalleryPhotography } from "@/lib/media/photography"
import { whyThailandCollageImages } from "@/lib/content/why-thailand"

export type MovingPhoto = {
  src: string
  alt: string
  objectPosition?: string
}

const collageById = Object.fromEntries(
  whyThailandCollageImages.map((image) => [image.id, image]),
) as Record<string, (typeof whyThailandCollageImages)[number]>

function fromCollage(id: string): MovingPhoto {
  const image = collageById[id]
  if (!image) {
    throw new Error(`Missing moving collage image: ${id}`)
  }

  return {
    src: image.src,
    alt: image.alt,
    objectPosition: image.objectPosition,
  }
}

function fromVisaGallery(key: keyof typeof visaGalleryPhotography): MovingPhoto {
  const image = visaGalleryPhotography[key]
  return {
    src: image.src,
    alt: image.alt,
    objectPosition: image.objectPosition,
  }
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
    bangkok: fromCollage("skyline"),
    "chiang-mai": getEditorialAsset("thailand-longtail-boats"),
    phuket: getEditorialAsset("pattaya-coastline-hero"),
    "hua-hin": getEditorialAsset("blog-thailand-coast-golden-hour"),
    pattaya: getEditorialAsset("blog-dtv-retirement-comparison"),
    krabi: getEditorialAsset("krabi-coastline"),
    "koh-samui": getEditorialAsset("blog-dtv-retirement-comparison"),
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
