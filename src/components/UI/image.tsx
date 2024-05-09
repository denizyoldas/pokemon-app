'use client'
import NextImage from 'next/image'

export function Image({ image, alt }: { image: string; alt: string }) {
  return (
    <NextImage
      src={image}
      alt={alt}
      priority
      fill
      sizes="(max-width: 640px) 100vw, 640px"
      style={{ objectFit: 'contain' }}
      // className="transition-opacity opacity-0 duration-[2s]"
    />
  )
}
