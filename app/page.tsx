import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { PhoneCall, Mail, MapPin, Clock, ArrowRight, CheckCircle } from "lucide-react"
import TestimonialCarousel from "@/components/testimonial-carousel"
import AppointmentForm from "@/components/appointment-form"

const clinicTitle = process.env.CLINIC_NAME
const clinicEmail = process.env.CLINIC_EMAIL
const clinicPhone = process.env.CLINIC_PHONE
const clinicAddress = process.env.CLINIC_ADDRESS

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[600px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero_image_1.jpg?height=600&width=1920"
            alt="Acupuncture treatment"
            fill
            className="object-cover brightness-[0.7]"
            priority
          />
        </div>
        <div className="container relative z-10 px-4 mx-auto text-center text-white">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Holistic Healing Through Ancient Wisdom
          </h1>
          <p className="max-w-2xl mx-auto mt-6 text-xl">
            Experience the transformative power of traditional acupuncture therapy in Raipur
          </p>
          <div className="flex flex-col items-center justify-center gap-4 mt-10 sm:flex-row">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
              Book Appointment
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white hover:bg-white/20">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col items-center md:flex-row md:gap-12">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Acupuncture clinic"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900">Welcome to {clinicTitle} Clinic</h2>
              <div className="w-20 h-1 mt-4 bg-primary"></div>
              <p className="mt-6 text-lg text-gray-700">
                At {clinicTitle}, we blend ancient healing traditions with modern therapeutic approaches to
                restore balance and promote wellness. Our clinic in Raipur offers personalized acupuncture treatments
                designed to address your specific health concerns.
              </p>
              <p className="mt-4 text-lg text-gray-700">
                With over 28 years of experience, our certified practitioners are dedicated to providing compassionate
                care and effective treatments for a wide range of conditions.
              </p>
              <div className="mt-8">
                <Link href="/about">
                  <Button className="group">
                    About Our Clinic
                    <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={16} />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="text-3xl font-bold text-gray-900">Our Specialized Treatments</h2>
            <div className="w-20 h-1 mx-auto mt-4 bg-primary"></div>
            <p className="mt-6 text-lg text-gray-700">
              We offer a comprehensive range of acupuncture therapies tailored to your individual needs
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Traditional Acupuncture",
                description:
                  "Classic needle therapy based on ancient Chinese medicine principles to restore energy flow and balance.",
                image: "/placeholder.svg?height=250&width=400",
              },
              {
                title: "Cupping Therapy",
                description:
                  "A form of alternative medicine where cups are placed on the skin to create suction and promote healing.",
                image: "/placeholder.svg?height=250&width=400",
              },
              {
                title: "Moxibustion",
                description:
                  "Therapeutic technique involving burning dried mugwort near specific points on the body to stimulate circulation.",
                image: "/placeholder.svg?height=250&width=400",
              },
              {
                title: "Auricular Acupuncture",
                description:
                  "Specialized treatment focusing on acupuncture points in the ear to address various health conditions.",
                image: "/placeholder.svg?height=250&width=400",
              },
              {
                title: "Electroacupuncture",
                description:
                  "Modern adaptation of traditional acupuncture using small electrical currents for enhanced therapeutic effects.",
                image: "/placeholder.svg?height=250&width=400",
              },
              {
                title: "Acupressure Massage",
                description:
                  "Gentle pressure applied to specific points to relieve tension, improve circulation and promote relaxation.",
                image: "/placeholder.svg?height=250&width=400",
              },
            ].map((service, index) => (
              <Card key={index} className="overflow-hidden transition-all hover:shadow-lg">
                <div className="relative h-48">
                  <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                  <p className="mt-3 text-gray-700">{service.description}</p>
                  <Link href="/services" className="inline-flex items-center mt-4 text-primary hover:underline">
                    Learn more <ArrowRight className="ml-1" size={16} />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/services">
              <Button size="lg" variant="outline">
                View All Treatments
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="text-3xl font-bold text-gray-900">Benefits of Acupuncture</h2>
            <div className="w-20 h-1 mx-auto mt-4 bg-primary"></div>
            <p className="mt-6 text-lg text-gray-700">
              Discover how acupuncture can improve your overall health and well-being
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Pain Relief & Management",
              "Stress Reduction",
              "Improved Sleep Quality",
              "Enhanced Immune Function",
              "Increased Energy Levels",
              "Better Digestive Health",
              "Reduced Inflammation",
              "Hormonal Balance",
              "Improved Mental Clarity",
            ].map((benefit, index) => (
              <div key={index} className="flex items-start p-4 rounded-lg bg-gray-50">
                <CheckCircle className="mr-3 text-primary shrink-0" />
                <span className="text-lg font-medium text-gray-800">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="text-3xl font-bold text-gray-900">What Our Patients Say</h2>
            <div className="w-20 h-1 mx-auto mt-4 bg-primary"></div>
            <p className="mt-6 text-lg text-gray-700">
              Read about the experiences of those who have benefited from our treatments
            </p>
          </div>

          <TestimonialCarousel />
        </div>
      </section>

      {/* Appointment Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container px-4 mx-auto">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold">Book Your Appointment</h2>
              <div className="w-20 h-1 mt-4 bg-white"></div>
              <p className="mt-6 text-lg">
                Take the first step towards better health and wellness. Schedule a consultation with our experienced
                acupuncturists.
              </p>

              <div className="grid gap-6 mt-8">
                <div className="flex items-center">
                  <div className="flex items-center justify-center w-12 h-12 mr-4 rounded-full bg-white/20">
                    <PhoneCall className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white/70">Call Us</p>
                    <p className="text-lg font-semibold">{clinicPhone}</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="flex items-center justify-center w-12 h-12 mr-4 rounded-full bg-white/20">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white/70">Email</p>
                    <p className="text-lg font-semibold">{clinicEmail}</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="flex items-center justify-center w-12 h-12 mr-4 rounded-full bg-white/20">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white/70">Location</p>
                    <p className="text-lg font-semibold">{clinicAddress}</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="flex items-center justify-center w-12 h-12 mr-4 rounded-full bg-white/20">
                    <Clock className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white/70">Working Hours</p>
                    <p className="text-lg font-semibold">Mon-Sat: 9:00 AM - 7:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-lg">
              <AppointmentForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

