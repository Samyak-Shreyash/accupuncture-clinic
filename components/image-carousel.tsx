"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const clinicTitle = process.env.CLINIC_NAME
const images = [
  {
    src: "/hero_image_1.jpg?height=600&width=1920",
    alt: "Acupuncture treatment"
  },
  {
    src: "/hero_image_2.jpg?height=600&width=1920",
    alt: "Acupuncture needles"
  },
  {
    src: "/hero_image_3.jpg?height=600&width=1920",
    alt: "Acupuncture session"
  },
]

export default function ImageCarousel() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const next = () => {
    setCurrent((current + 1) % images.length)
  }

  const prev = () => {
    setCurrent((current - 1 + images.length) % images.length)
  }

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      next()
    }, 5000)

    return () => clearInterval(interval)
  }, [current, autoplay])

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="relative w-[1920px] h-[600px]">
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover brightness-[0.7]"
                priority
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-6 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors ${index === current ? "bg-primary" : "bg-gray-300"}`}
            onClick={() => {
              setCurrent(index)
              setAutoplay(false)
            }}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>

      <Button
        variant="outline"
        size="icon"
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white shadow-lg rounded-full hidden md:flex"
        onClick={() => {
          prev()
          setAutoplay(false)
        }}
        aria-label="Previous image"
      >
        <ChevronLeft className="w-5 h-5" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white shadow-lg rounded-full hidden md:flex"
        onClick={() => {
          next()
          setAutoplay(false)
        }}
        aria-label="Next image"
      >
        <ChevronRight className="w-5 h-5" />
      </Button>
    </div>
  )
}