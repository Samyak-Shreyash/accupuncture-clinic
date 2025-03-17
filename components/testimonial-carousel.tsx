"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import Image from "next/image"

const clinicTitle = process.env.CLINIC_NAME
const testimonials = [
  {
    name: "Priya Sharma",
    role: "Chronic Pain Patient",
    image: "/placeholder.svg?height=80&width=80",
    content:
      "After years of struggling with back pain and trying various treatments, acupuncture at "+clinicTitle+" has been life-changing. The staff is professional, and the results speak for themselves. I'm now able to enjoy activities I had given up on.",
  },
  {
    name: "Rajesh Kumar",
    role: "Stress Management",
    image: "/placeholder.svg?height=80&width=80",
    content:
      "The acupuncture sessions have significantly reduced my stress levels and improved my sleep quality. The peaceful environment and expert care make each visit therapeutic. I recommend this clinic to anyone dealing with stress or anxiety.",
  },
  {
    name: "Ananya Patel",
    role: "Migraine Sufferer",
    image: "/placeholder.svg?height=80&width=80",
    content:
      "I've been dealing with debilitating migraines for over a decade. After just a few sessions at "+clinicTitle+", the frequency and intensity of my migraines have decreased dramatically. The practitioners truly understand how to target the root causes.",
  },
  {
    name: "Vikram Singh",
    role: "Sports Injury Recovery",
    image: "/placeholder.svg?height=80&width=80",
    content:
      "As an athlete, injuries are part of life, but recovery doesn't have to be slow. The acupuncture treatments have accelerated my healing process and helped me get back to training faster. The team's knowledge of sports injuries is impressive.",
  },
]

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const next = () => {
    setCurrent((current + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length)
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
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full flex-shrink-0 px-4">
              <Card className="border-none shadow-lg">
                <CardContent className="p-8">
                  <div className="flex flex-col items-center text-center">
                    <div className="relative mb-6">
                      <div className="absolute -top-2 -left-2">
                        <Quote className="w-8 h-8 text-primary/20" />
                      </div>
                      <div className="relative w-20 h-20 overflow-hidden rounded-full border-4 border-primary/10">
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <p className="mb-6 text-lg text-gray-700">{testimonial.content}</p>
                    <h4 className="text-xl font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors ${index === current ? "bg-primary" : "bg-gray-300"}`}
            onClick={() => {
              setCurrent(index)
              setAutoplay(false)
            }}
            aria-label={`Go to testimonial ${index + 1}`}
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
        aria-label="Previous testimonial"
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
        aria-label="Next testimonial"
      >
        <ChevronRight className="w-5 h-5" />
      </Button>
    </div>
  )
}

