import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Facebook, Instagram, Linkedin } from "lucide-react"
import { 
  CLINIC_NAME as clinicName,
  CLINIC_FOUNDER as clinicFounder
} from "@/lib/constants"

export const metadata = {
  title: "Our Practitioners | " + clinicName,
  description:
    "Meet our team of experienced acupuncture practitioners at "+clinicName+" in Raipur, Chhattisgarh.",
}

export default function PractitionersPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[400px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=400&width=1920"
            alt="Acupuncture practitioners"
            fill
            className="object-cover brightness-[0.7]"
            priority
          />
        </div>
        <div className="container relative z-10 px-4 mx-auto text-center text-white">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Our Practitioners</h1>
          <p className="max-w-2xl mx-auto mt-6 text-xl">
            Meet our team of certified acupuncturists dedicated to your health and wellness
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="text-3xl font-bold text-gray-900">Expert Acupuncturists</h2>
            <div className="w-20 h-1 mx-auto mt-4 bg-primary"></div>
            <p className="mt-6 text-lg text-gray-700">
              Our practitioners combine traditional wisdom with modern techniques to provide exceptional care
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: clinicFounder+"",
                role: "Founder & Chief Acupuncturist",
                image: "/placeholder.svg?height=400&width=300",
                bio: "Dr. Anand Sharma has over 20 years of experience in traditional Chinese medicine and acupuncture. After completing his education in Beijing, he practiced in major cities across India before founding "+clinicName+" in Raipur.",
                specialties: ["Traditional Acupuncture", "Pain Management", "Neurological Conditions"],
                education: [
                  "Doctor of Traditional Chinese Medicine, Beijing University",
                  "Advanced Certification in Acupuncture, Shanghai",
                ],
                social: {
                  facebook: "#",
                  instagram: "#",
                  linkedin: "#",
                },
              },
              {
                name: "Dr. Priya Verma",
                role: "Senior Acupuncturist",
                image: "/placeholder.svg?height=400&width=300",
                bio: "Dr. Priya Verma specializes in women's health and fertility support through acupuncture. With 15 years of experience, she has helped hundreds of women address reproductive health concerns and navigate pregnancy with acupuncture support.",
                specialties: ["Women's Health", "Fertility Support", "Hormonal Balance"],
                education: [
                  "Master's in Acupuncture, Guangzhou University",
                  "Specialized Training in Women's Health, Mumbai",
                ],
                social: {
                  facebook: "#",
                  instagram: "#",
                  linkedin: "#",
                },
              },
              {
                name: "Dr. Rajesh Kumar",
                role: "Acupuncturist & Pain Specialist",
                image: "/placeholder.svg?height=400&width=300",
                bio: "Dr. Rajesh Kumar focuses on sports injuries and chronic pain management. His background in physical therapy combined with acupuncture expertise offers a unique approach to treating musculoskeletal conditions and promoting faster recovery.",
                specialties: ["Sports Injuries", "Chronic Pain", "Rehabilitation"],
                education: [
                  "Bachelor's in Physical Therapy, Delhi University",
                  "Certification in Sports Acupuncture, Singapore",
                ],
                social: {
                  facebook: "#",
                  instagram: "#",
                  linkedin: "#",
                },
              },
              {
                name: "Dr. Meera Patel",
                role: "Acupuncturist",
                image: "/placeholder.svg?height=400&width=300",
                bio: "Dr. Meera Patel specializes in stress management and mental health support through acupuncture. Her gentle approach and focus on emotional wellbeing have made her a favorite among patients dealing with anxiety, depression, and sleep disorders.",
                specialties: ["Stress Management", "Mental Health", "Sleep Disorders"],
                education: ["Doctorate in Acupuncture, Kerala", "Mindfulness-Based Stress Reduction Certification"],
                social: {
                  facebook: "#",
                  instagram: "#",
                  linkedin: "#",
                },
              },
              {
                name: "Dr. Vikram Singh",
                role: "Acupuncturist & Herbalist",
                image: "/placeholder.svg?height=400&width=300",
                bio: "Dr. Vikram Singh combines acupuncture with herbal medicine for a holistic approach to health. His expertise in digestive disorders and immune support has helped many patients with chronic conditions find relief through integrated treatment plans.",
                specialties: ["Digestive Disorders", "Herbal Medicine", "Immune Support"],
                education: [
                  "Master's in Traditional Chinese Medicine, Nanjing",
                  "Certification in Herbal Medicine, Pune",
                ],
                social: {
                  facebook: "#",
                  instagram: "#",
                  linkedin: "#",
                },
              },
              {
                name: "Dr. Anjali Desai",
                role: "Acupuncturist",
                image: "/placeholder.svg?height=400&width=300",
                bio: "Dr. Anjali Desai is our newest team member, bringing fresh perspectives and specialized training in facial acupuncture and cosmetic applications. Her work combines beauty and wellness, helping patients look and feel their best naturally.",
                specialties: ["Facial Acupuncture", "Cosmetic Applications", "Anti-Aging"],
                education: [
                  "Bachelor's in Acupuncture, Hong Kong",
                  "Specialized Training in Facial Rejuvenation, Seoul",
                ],
                social: {
                  facebook: "#",
                  instagram: "#",
                  linkedin: "#",
                },
              },
            ].map((practitioner, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="relative h-80">
                  <Image
                    src={practitioner.image || "/placeholder.svg"}
                    alt={practitioner.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">{practitioner.name}</h3>
                  <p className="text-primary font-medium">{practitioner.role}</p>
                  <p className="mt-4 text-gray-700">{practitioner.bio}</p>

                  <div className="mt-4">
                    <h4 className="font-semibold text-gray-900">Specialties:</h4>
                    <ul className="mt-1">
                      {practitioner.specialties.map((specialty, idx) => (
                        <li key={idx} className="text-gray-700">
                          {specialty}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-4">
                    <h4 className="font-semibold text-gray-900">Education:</h4>
                    <ul className="mt-1">
                      {practitioner.education.map((edu, idx) => (
                        <li key={idx} className="text-gray-700">
                          {edu}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex mt-6 space-x-4">
                    <Link href={practitioner.social.facebook} className="text-gray-400 hover:text-primary">
                      <Facebook className="w-5 h-5" />
                      <span className="sr-only">Facebook</span>
                    </Link>
                    <Link href={practitioner.social.instagram} className="text-gray-400 hover:text-primary">
                      <Instagram className="w-5 h-5" />
                      <span className="sr-only">Instagram</span>
                    </Link>
                    <Link href={practitioner.social.linkedin} className="text-gray-400 hover:text-primary">
                      <Linkedin className="w-5 h-5" />
                      <span className="sr-only">LinkedIn</span>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="text-3xl font-bold text-gray-900">Our Qualifications</h2>
            <div className="w-20 h-1 mx-auto mt-4 bg-primary"></div>
            <p className="mt-6 text-lg text-gray-700">
              All our practitioners are fully certified and maintain the highest standards of practice
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Professional Certifications</h3>
              <ul className="space-y-3">
                {[
                  "Licensed by the Indian Board of Alternative Medicine",
                  "Certified by the World Federation of Acupuncture-Moxibustion Societies",
                  "Members of the International Acupuncture Association",
                  "Registered with the Chhattisgarh Medical Council",
                  "Continuing Education Certification",
                  "Advanced Training in Specialized Techniques",
                ].map((cert, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-flex items-center justify-center w-6 h-6 mr-3 rounded-full bg-primary text-white text-xs">
                      ✓
                    </span>
                    <span className="text-gray-700">{cert}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Commitment to Excellence</h3>
              <ul className="space-y-3">
                {[
                  "Regular participation in professional development workshops",
                  "Staying current with the latest research and techniques",
                  "Strict adherence to hygiene and safety protocols",
                  "Personalized care tailored to each patient's needs",
                  "Collaborative approach to complex health concerns",
                  "Continuous improvement through patient feedback",
                ].map((commitment, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-flex items-center justify-center w-6 h-6 mr-3 rounded-full bg-primary text-white text-xs">
                      ✓
                    </span>
                    <span className="text-gray-700">{commitment}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="text-3xl font-bold text-gray-900">What Patients Say About Our Team</h2>
            <div className="w-20 h-1 mx-auto mt-4 bg-primary"></div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                quote:
                  "Dr. Sharma's expertise in acupuncture completely transformed my experience with chronic back pain. After years of trying various treatments with limited success, his personalized approach has given me lasting relief.",
                patient: "Rahul M.",
                practitioner: "Dr. Anand Sharma",
              },
              {
                quote:
                  "I was skeptical about acupuncture for fertility support, but Dr. Verma's gentle approach and extensive knowledge made all the difference. Her treatments helped balance my hormones, and I'm now expecting my first child!",
                patient: "Sunita K.",
                practitioner: "Dr. Priya Verma",
              },
              {
                quote:
                  "As an athlete recovering from a serious knee injury, Dr. Kumar's combination of acupuncture and rehabilitation exercises accelerated my healing process. I'm back to training at full capacity much sooner than expected.",
                patient: "Arjun S.",
                practitioner: "Dr. Rajesh Kumar",
              },
              {
                quote:
                  "Dr. Patel's acupuncture sessions for anxiety have been life-changing. Her calm demeanor and skillful treatments have helped me manage stress better than any medication I've tried in the past.",
                patient: "Neha G.",
                practitioner: "Dr. Meera Patel",
              },
              {
                quote:
                  "My digestive issues had been plaguing me for years until I started treatment with Dr. Singh. His integrated approach with acupuncture and herbal recommendations has restored my digestive health.",
                patient: "Vivek P.",
                practitioner: "Dr. Vikram Singh",
              },
              {
                quote:
                  "The facial acupuncture treatments with Dr. Desai have given my skin a natural, healthy glow that no expensive cream ever could. People keep asking what my secret is!",
                patient: "Ananya R.",
                practitioner: "Dr. Anjali Desai",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex-1">
                    <p className="italic text-gray-700">"{testimonial.quote}"</p>
                  </div>
                  <div className="mt-4 pt-4 border-t">
                    <p className="font-semibold text-gray-900">{testimonial.patient}</p>
                    <p className="text-sm text-gray-500">Patient of {testimonial.practitioner}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl font-bold">Schedule a Consultation With Our Experts</h2>
          <p className="max-w-2xl mx-auto mt-4 text-lg">
            Our practitioners are ready to help you on your journey to better health and wellness
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

