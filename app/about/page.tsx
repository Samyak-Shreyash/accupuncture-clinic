import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

const clinicTitle = process.env.CLINIC_NAME
const foundingYear = process.env.CLINIC_FOUNDING_YEAR
const clinicFounder = process.env.CLINIC_FOUNDER
const clinicDescription = process.env.CLINIC_DESCRIPTION
export const metadata = {
  title: "About Us | " + clinicTitle,
  description:
   {clinicDescription},
}

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[400px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=400&width=1920"
            alt="Acupuncture clinic interior"
            fill
            className="object-cover brightness-[0.7]"
            priority
          />
        </div>
        <div className="container relative z-10 px-4 mx-auto text-center text-white">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">About Our Clinic</h1>
          <p className="max-w-2xl mx-auto mt-6 text-xl">
            Dedicated to holistic healing and wellness through traditional acupuncture
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="text-3xl font-bold text-gray-900">Our Story</h2>
            <div className="w-20 h-1 mx-auto mt-4 bg-primary"></div>
          </div>

          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div>
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Clinic founder"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <p className="text-lg text-gray-700">
                {clinicTitle} was founded in {foundingYear} by {clinicFounder}, a certified acupuncturist with over
                20 years of experience in traditional Accupuncture treatment. After practicing in major cities across India, Dr. Sharma returned to his hometown of Raipur with a vision to
                bring authentic acupuncture therapy to Chhattisgarh.
              </p>
              <p className="text-lg text-gray-700">
                What began as a small practice has grown into a respected wellness center, helping thousands of patients
                find relief from pain, manage chronic conditions, and improve their overall quality of life through
                natural healing methods.
              </p>
              <p className="text-lg text-gray-700">
                Today, our clinic continues to uphold the principles of traditional acupuncture while incorporating
                modern techniques and research-backed approaches to provide the highest standard of care to our
                patients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="text-3xl font-bold text-gray-900">Our Mission & Values</h2>
            <div className="w-20 h-1 mx-auto mt-4 bg-primary"></div>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-lg text-gray-700">
                At {clinicTitle}, our mission is to improve the health and wellbeing of our community by providing
                exceptional acupuncture care in a compassionate and supportive environment. We are committed to helping
                our patients achieve optimal health through natural healing methods and personalized treatment plans.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
              <ul className="space-y-4">
                {[
                  "Patient-centered care that respects individual needs",
                  "Commitment to the highest standards of practice",
                  "Continuous learning and professional development",
                  "Integrity and transparency in all interactions",
                  "Holistic approach to health and wellness",
                  "Community engagement and education",
                ].map((value, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="mr-3 text-primary shrink-0 mt-1" size={18} />
                    <span className="text-gray-700">{value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="text-3xl font-bold text-gray-900">Our Approach to Healing</h2>
            <div className="w-20 h-1 mx-auto mt-4 bg-primary"></div>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Holistic Assessment",
                description:
                  "We begin with a comprehensive evaluation of your health history, lifestyle, and specific concerns to understand the root causes of your condition.",
                image: "/placeholder.svg?height=250&width=400",
              },
              {
                title: "Personalized Treatment",
                description:
                  "Based on your individual needs, we develop a customized treatment plan that may combine various acupuncture techniques and complementary therapies.",
                image: "/placeholder.svg?height=250&width=400",
              },
              {
                title: "Ongoing Support",
                description:
                  "We provide continuous guidance on lifestyle modifications, dietary recommendations, and self-care practices to enhance the benefits of your treatments.",
                image: "/placeholder.svg?height=250&width=400",
              },
            ].map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
                <div className="relative h-48">
                  <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="text-3xl font-bold text-gray-900">Our Certifications</h2>
            <div className="w-20 h-1 mx-auto mt-4 bg-primary"></div>
            <p className="mt-6 text-lg text-gray-700">
              We maintain the highest standards of practice through professional certifications and affiliations
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center">
                <Image
                  src="/placeholder-logo.svg"
                  width={150}
                  height={100}
                  alt={`Certification ${item}`}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl font-bold">Ready to Experience the Benefits of Acupuncture?</h2>
          <p className="max-w-2xl mx-auto mt-4 text-lg">
            Schedule your consultation today and take the first step towards improved health and wellness
          </p>
          <div className="mt-8">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
              <Link href="/contact">Book Your Appointment</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

