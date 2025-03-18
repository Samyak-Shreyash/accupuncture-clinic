"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { MapPin, Navigation, Phone } from "lucide-react"

interface LocationMapProps {
  address: string
  googleMapsUrl: string
}

export default function LocationMap({ address, googleMapsUrl }: LocationMapProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <div className="w-full h-full rounded-lg overflow-hidden shadow-lg bg-white">
      <div className="relative w-full h-[300px] bg-gray-100">
        <iframe
          src={`https://maps.google.com/maps?q=${encodeURIComponent(address)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
          className={`w-full h-full border-0 ${isLoaded ? "opacity-100" : "opacity-0"}`}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          onLoad={() => setIsLoaded(true)}
          title="Clinic Location Map"
        />
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="animate-pulse flex flex-col items-center">
              <MapPin className="w-8 h-8 text-primary mb-2" />
              <p className="text-gray-500">Loading map...</p>
            </div>
          </div>
        )}
      </div>

      <div className="p-6">
        <div className="flex flex-col sm:flex-row gap-3">
          <Button asChild className="flex-1">
            <Link href="/contact">
              <Phone className="w-4 h-4 mr-2" />
              Book Appointment
            </Link>
          </Button>

          <Button asChild variant="outline" className="flex-1">
            <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
              <Navigation className="w-4 h-4 mr-2" />
              Get Directions
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}

