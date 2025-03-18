import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Star, Quote, Play, MessageSquare } from "lucide-react"
import TestimonialCarousel from "@/components/testimonial-carousel"
import {CLINIC_NAME as clinicName } from "@/lib/constants"

export const metadata = {
  title: "Testimonials | " + clinicName,
  description:
    "Read what our patients have to say about their experiences and results with our acupuncture treatments.",
}

export default function TestimonialsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[400px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=400&width=1920"
            alt="Happy patients"
            fill
            className="object-cover brightness-[0.7]"
            priority
          />
        </div>
        <div className="container relative z-10 px-4 mx-auto text-center text-white">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Patient Testimonials</h1>
          <p className="max-w-2xl mx-auto mt-6 text-xl">
            Discover how acupuncture has transformed the lives of our patients
          </p>
        </div>
      </section>

      {/* Rating Overview */}
      <section className="py-12 bg-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between p-8 bg-gray-50 rounded-lg shadow-sm">
              <div className="text-center md:text-left mb-6 md:mb-0">
                <h2 className="text-3xl font-bold text-gray-900">Our Patient Satisfaction</h2>
                <p className="mt-2 text-lg text-gray-700">Based on {350}+ verified patient reviews</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex items-center mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-8 h-8 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-3xl font-bold text-gray-900">4.9/5</p>
                <p className="text-sm text-gray-500">Average Rating</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Testimonials */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="text-3xl font-bold text-gray-900">Featured Patient Stories</h2>
            <div className="w-20 h-1 mx-auto mt-4 bg-primary"></div>
            <p className="mt-6 text-lg text-gray-700">
              Read about the experiences of those who have found relief and healing through our treatments
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Rajesh Kumar",
                age: 45,
                condition: "Chronic Back Pain",
                image: "/placeholder.svg?height=150&width=150",
                quote:
                  "After 10 years of chronic back pain and trying countless treatments, acupuncture at Kapil Acupuncture has been life-changing. I can now play with my children without pain.",
                duration: "6 months of treatment",
              },
              {
                name: "Priya Sharma",
                age: 38,
                condition: "Migraine Headaches",
                image: "/placeholder.svg?height=150&width=150",
                quote:
                  "I suffered from debilitating migraines for years. Since starting acupuncture, the frequency has decreased by 80% and the intensity is much lower. I finally have my life back.",
                duration: "3 months of treatment",
              },
              {
                name: "Amit Patel",
                age: 52,
                condition: "Insomnia",
                image: "/placeholder.svg?height=150&width=150",
                quote:
                  "After struggling with insomnia for decades, I was skeptical about acupuncture. Now I sleep 7 hours most nights, and my energy levels have improved dramatically.",
                duration: "2 months of treatment",
              },
              {
                name: "Sunita Verma",
                age: 35,
                condition: "Fertility Support",
                image: "/placeholder.svg?height=150&width=150",
                quote:
                  "After two years of trying to conceive, I started acupuncture as a last resort. Three months later, I was pregnant! I'm convinced the treatments helped balance my hormones.",
                duration: "3 months of treatment",
              },
              {
                name: "Vikram Singh",
                age: 29,
                condition: "Sports Injury",
                image: "/placeholder.svg?height=150&width=150",
                quote:
                  "As a professional athlete, recovery time is crucial. Acupuncture helped heal my shoulder injury twice as fast as expected. I now include it in my regular training regimen.",
                duration: "6 weeks of treatment",
              },
              {
                name: "Ananya Gupta",
                age: 42,
                condition: "Anxiety & Stress",
                image: "/placeholder.svg?height=150&width=150",
                quote:
                  "My anxiety was affecting every aspect of my life. Acupuncture has helped me manage stress in a way medication never could, with no side effects. I feel calm and centered.",
                duration: "4 months of treatment",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="overflow-hidden h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-center mb-4">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{testimonial.name}</h3>
                      <p className="text-sm text-gray-500">
                        {testimonial.age} years, {testimonial.condition}
                      </p>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="relative">
                      <Quote className="absolute -top-2 -left-2 w-8 h-8 text-primary/20" />
                      <p className="pt-4 pl-4 text-gray-700 italic">{testimonial.quote}</p>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <p className="text-sm text-gray-500">{testimonial.duration}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="text-3xl font-bold text-gray-900">Video Testimonials</h2>
            <div className="w-20 h-1 mx-auto mt-4 bg-primary"></div>
            <p className="mt-6 text-lg text-gray-700">
              Watch our patients share their acupuncture experiences in their own words
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Deepak Mehta",
                condition: "Arthritis Relief",
                thumbnail: "/placeholder.svg?height=200&width=350",
                duration: "3:45",
              },
              {
                name: "Meera Kapoor",
                condition: "Stress Management",
                thumbnail: "/placeholder.svg?height=200&width=350",
                duration: "4:12",
              },
              {
                name: "Arjun Reddy",
                condition: "Back Pain Recovery",
                thumbnail: "/placeholder.svg?height=200&width=350",
                duration: "2:58",
              },
            ].map((video, index) => (
              <div key={index} className="group relative rounded-lg overflow-hidden shadow-md">
                <div className="relative aspect-video">
                  <Image
                    src={video.thumbnail || "/placeholder.svg"}
                    alt={`${video.name} video testimonial`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="w-8 h-8 text-primary fill-primary ml-1" />
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-white">
                  <h3 className="text-lg font-semibold text-gray-900">{video.name}</h3>
                  <div className="flex justify-between items-center mt-1">
                    <p className="text-sm text-gray-500">{video.condition}</p>
                    <p className="text-xs text-gray-400">{video.duration}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button variant="outline">View More Videos</Button>
          </div>
        </div>
      </section>

      {/* Testimonials by Treatment */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="text-3xl font-bold text-gray-900">Testimonials by Treatment</h2>
            <div className="w-20 h-1 mx-auto mt-4 bg-primary"></div>
            <p className="mt-6 text-lg text-gray-700">
              Explore patient experiences with specific acupuncture treatments
            </p>
          </div>

          <Tabs defaultValue="pain" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mb-8">
              <TabsTrigger value="pain">Pain Relief</TabsTrigger>
              <TabsTrigger value="stress">Stress & Anxiety</TabsTrigger>
              <TabsTrigger value="sleep">Sleep Issues</TabsTrigger>
              <TabsTrigger value="fertility">Fertility</TabsTrigger>
              <TabsTrigger value="digestive">Digestive Health</TabsTrigger>
              <TabsTrigger value="other">Other Conditions</TabsTrigger>
            </TabsList>

            <TabsContent value="pain" className="mt-4">
              <div className="grid gap-6 md:grid-cols-2">
                {[
                  {
                    quote:
                      "I had severe knee pain that was affecting my ability to walk. After just 5 acupuncture sessions, I experienced a 70% reduction in pain and improved mobility. I can now take my daily walks again without discomfort.",
                    name: "Ramesh Joshi",
                    age: 62,
                    treatment: "Traditional Acupuncture",
                  },
                  {
                    quote:
                      "As someone with chronic neck pain from long hours at the computer, I was desperate for relief. Acupuncture has been the only treatment that provides lasting results. I now go for monthly maintenance sessions.",
                    name: "Neha Singh",
                    age: 34,
                    treatment: "Electroacupuncture",
                  },
                  {
                    quote:
                      "My sciatica pain was unbearable. I couldn't sit for more than 10 minutes. After 8 weeks of acupuncture treatment, I'm nearly pain-free and have returned to my normal activities.",
                    name: "Suresh Kumar",
                    age: 45,
                    treatment: "Traditional Acupuncture & Cupping",
                  },
                  {
                    quote:
                      "I suffered from migraines 3-4 times a month. Since starting acupuncture six months ago, I've only had two mild headaches. It's been life-changing for me and my family.",
                    name: "Pooja Sharma",
                    age: 39,
                    treatment: "Auricular Acupuncture",
                  },
                ].map((testimonial, index) => (
                  <Card key={index} className="h-full">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="flex-1">
                        <p className="italic text-gray-700">"{testimonial.quote}"</p>
                      </div>
                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <p className="font-semibold text-gray-900">
                          {testimonial.name}, {testimonial.age}
                        </p>
                        <p className="text-sm text-gray-500">{testimonial.treatment}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="stress" className="mt-4">
              <div className="grid gap-6 md:grid-cols-2">
                {[
                  {
                    quote:
                      "My anxiety was so severe I could barely leave the house. Acupuncture has helped me manage my symptoms better than any medication. I feel calmer and more in control of my life now.",
                    name: "Anjali Mehta",
                    age: 28,
                    treatment: "Traditional Acupuncture",
                  },
                  {
                    quote:
                      "As a business executive, stress was affecting my health and relationships. Regular acupuncture sessions have improved my sleep, lowered my blood pressure, and helped me manage work pressure more effectively.",
                    name: "Vivek Malhotra",
                    age: 42,
                    treatment: "Acupressure & Auricular Acupuncture",
                  },
                  {
                    quote:
                      "I was skeptical about acupuncture for stress, but after my first few sessions, I noticed a significant difference in my mood and energy levels. I'm now much more resilient to daily stressors.",
                    name: "Ritu Patel",
                    age: 36,
                    treatment: "Electroacupuncture",
                  },
                  {
                    quote:
                      "PTSD symptoms were controlling my life. Acupuncture has been a key part of my recovery journey, helping reduce flashbacks and anxiety. I'm grateful for this natural approach to healing.",
                    name: "Ajay Verma",
                    age: 44,
                    treatment: "Traditional Acupuncture & Moxibustion",
                  },
                ].map((testimonial, index) => (
                  <Card key={index} className="h-full">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="flex-1">
                        <p className="italic text-gray-700">"{testimonial.quote}"</p>
                      </div>
                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <p className="font-semibold text-gray-900">
                          {testimonial.name}, {testimonial.age}
                        </p>
                        <p className="text-sm text-gray-500">{testimonial.treatment}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="sleep" className="mt-4">
              <div className="grid gap-6 md:grid-cols-2">
                {[
                  {
                    quote:
                      "I struggled with insomnia for over a decade. After just one month of acupuncture treatment, I was falling asleep within 15 minutes instead of the usual 2-3 hours. My quality of life has improved tremendously.",
                    name: "Sanjay Gupta",
                    age: 47,
                    treatment: "Traditional Acupuncture",
                  },
                  {
                    quote:
                      "Night shifts disrupted my sleep cycle completely. Acupuncture helped reset my body clock and improved my sleep quality even with my irregular schedule. I wake up feeling refreshed now.",
                    name: "Kavita Sharma",
                    age: 32,
                    treatment: "Auricular Acupuncture",
                  },
                  {
                    quote:
                      "Sleep apnea was affecting my health and marriage. While I still use my CPAP, acupuncture has reduced the severity of my condition and improved my overall sleep quality.",
                    name: "Prakash Rao",
                    age: 56,
                    treatment: "Traditional Acupuncture & Moxibustion",
                  },
                  {
                    quote:
                      "Menopause-related night sweats were ruining my sleep. Acupuncture has reduced their frequency by about 80%, and I'm finally getting restful sleep again after years of disruption.",
                    name: "Lakshmi Iyer",
                    age: 53,
                    treatment: "Electroacupuncture",
                  },
                ].map((testimonial, index) => (
                  <Card key={index} className="h-full">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="flex-1">
                        <p className="italic text-gray-700">"{testimonial.quote}"</p>
                      </div>
                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <p className="font-semibold text-gray-900">
                          {testimonial.name}, {testimonial.age}
                        </p>
                        <p className="text-sm text-gray-500">{testimonial.treatment}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="fertility" className="mt-4">
              <div className="grid gap-6 md:grid-cols-2">
                {[
                  {
                    quote:
                      "After three years of trying to conceive and one failed IVF attempt, I started acupuncture. Within four months, I conceived naturally! I believe acupuncture helped balance my hormones and reduce stress.",
                    name: "Meena Agarwal",
                    age: 34,
                    treatment: "Traditional Acupuncture",
                  },
                  {
                    quote:
                      "My husband and I both received acupuncture for fertility support. After six months of treatment alongside conventional care, we were thrilled to discover I was pregnant with twins!",
                    name: "Priyanka Desai",
                    age: 36,
                    treatment: "Traditional Acupuncture & Moxibustion",
                  },
                  {
                    quote:
                      "PCOS made conceiving difficult. Acupuncture helped regulate my cycles from 45-60 days down to 32 days. Three months later, we conceived our beautiful daughter.",
                    name: "Divya Reddy",
                    age: 29,
                    treatment: "Electroacupuncture",
                  },
                  {
                    quote:
                      "As a man with low sperm motility, I was skeptical about acupuncture. After four months of treatment, my numbers improved significantly, and we're now expecting our first child.",
                    name: "Rahul Kapoor",
                    age: 38,
                    treatment: "Traditional Acupuncture",
                  },
                ].map((testimonial, index) => (
                  <Card key={index} className="h-full">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="flex-1">
                        <p className="italic text-gray-700">"{testimonial.quote}"</p>
                      </div>
                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <p className="font-semibold text-gray-900">
                          {testimonial.name}, {testimonial.age}
                        </p>
                        <p className="text-sm text-gray-500">{testimonial.treatment}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="digestive" className="mt-4">
              <div className="grid gap-6 md:grid-cols-2">
                {[
                  {
                    quote:
                      "IBS controlled my life for over 15 years. After two months of acupuncture, my symptoms have reduced by about 70%. I can now eat out and travel without constant worry.",
                    name: "Alok Sharma",
                    age: 41,
                    treatment: "Traditional Acupuncture",
                  },
                  {
                    quote:
                      "Chronic acid reflux was affecting my sleep and diet. Medication helped but caused other issues. Acupuncture has reduced my symptoms naturally, and I've been able to reduce my medication.",
                    name: "Nandini Roy",
                    age: 37,
                    treatment: "Traditional Acupuncture & Moxibustion",
                  },
                  {
                    quote:
                      "Chronic constipation was a daily struggle. Acupuncture has regulated my digestive system better than any medication or supplement I've tried. I feel like I have a normal life again.",
                    name: "Vijay Malhotra",
                    age: 52,
                    treatment: "Electroacupuncture",
                  },
                  {
                    quote:
                      "Food sensitivities caused bloating and discomfort after almost every meal. Acupuncture has strengthened my digestive system, and I can now enjoy a wider variety of foods without issues.",
                    name: "Sarita Patel",
                    age: 44,
                    treatment: "Traditional Acupuncture & Acupressure",
                  },
                ].map((testimonial, index) => (
                  <Card key={index} className="h-full">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="flex-1">
                        <p className="italic text-gray-700">"{testimonial.quote}"</p>
                      </div>
                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <p className="font-semibold text-gray-900">
                          {testimonial.name}, {testimonial.age}
                        </p>
                        <p className="text-sm text-gray-500">{testimonial.treatment}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="other" className="mt-4">
              <div className="grid gap-6 md:grid-cols-2">
                {[
                  {
                    quote:
                      "Seasonal allergies made spring and fall miserable for me. Acupuncture treatments before allergy season have reduced my symptoms by about 80%. I can finally enjoy outdoor activities year-round.",
                    name: "Kiran Joshi",
                    age: 33,
                    treatment: "Traditional Acupuncture",
                  },
                  {
                    quote:
                      "After a stroke, I had limited mobility on my left side. Acupuncture, alongside physical therapy, has accelerated my recovery. My neurologist is amazed at my progress.",
                    name: "Mohan Lal",
                    age: 68,
                    treatment: "Electroacupuncture",
                  },
                  {
                    quote:
                      "Menopausal hot flashes were disrupting my work and sleep. Acupuncture reduced their frequency and intensity within weeks. I feel like myself again.",
                    name: "Sudha Rani",
                    age: 54,
                    treatment: "Traditional Acupuncture & Moxibustion",
                  },
                  {
                    quote:
                      "Facial acupuncture has improved my skin's elasticity and reduced fine lines better than expensive creams. People keep asking what my secret is!",
                    name: "Aarti Singhania",
                    age: 49,
                    treatment: "Facial Acupuncture",
                  },
                ].map((testimonial, index) => (
                  <Card key={index} className="h-full">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="flex-1">
                        <p className="italic text-gray-700">"{testimonial.quote}"</p>
                      </div>
                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <p className="font-semibold text-gray-900">
                          {testimonial.name}, {testimonial.age}
                        </p>
                        <p className="text-sm text-gray-500">{testimonial.treatment}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Testimonial Carousel */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="text-3xl font-bold text-gray-900">More Patient Experiences</h2>
            <div className="w-20 h-1 mx-auto mt-4 bg-primary"></div>
            <p className="mt-6 text-lg text-gray-700">
              Swipe through additional testimonials from our satisfied patients
            </p>
          </div>

          <TestimonialCarousel />
        </div>
      </section>

      {/* Submit Your Story */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto bg-gray-50 rounded-lg shadow-sm overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-8 flex flex-col justify-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Share Your Story</h2>
                <p className="text-gray-700 mb-6">
                  Has acupuncture made a difference in your life? We'd love to hear about your experience and share it
                  with others who might benefit from our treatments.
                </p>
                <div className="flex items-center">
                  <MessageSquare className="w-5 h-5 text-primary mr-2" />
                  <Link href="/contact" className="text-primary font-medium hover:underline">
                    Submit Your Testimonial
                  </Link>
                </div>
              </div>
              <div className="relative h-64 md:h-auto">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Share your story"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl font-bold">Ready to Experience the Benefits of Acupuncture?</h2>
          <p className="max-w-2xl mx-auto mt-4 text-lg">
            Join our community of satisfied patients and start your journey to better health today
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
