import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle } from "lucide-react"

const clinicTitle = process.env.CLINIC_NAME
const clinicServiceDescription = process.env.CLINIC_SERVICE_DESCRIPTION
export const metadata = {
  title: "Our Services | " + clinicTitle,
  description:
    "Explore our comprehensive range of acupuncture treatments and therapies offered at " + clinicTitle + " in Raipur.",
}

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[400px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=400&width=1920"
            alt="Acupuncture treatment"
            fill
            className="object-cover brightness-[0.7]"
            priority
          />
        </div>
        <div className="container relative z-10 px-4 mx-auto text-center text-white">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Our Services</h1>
          <p className="max-w-2xl mx-auto mt-6 text-xl">
            Comprehensive acupuncture treatments tailored to your individual needs
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="text-3xl font-bold text-gray-900">Comprehensive Acupuncture Therapies</h2>
            <div className="w-20 h-1 mx-auto mt-4 bg-primary"></div>
            <p className="mt-6 text-lg text-gray-700">
              At {clinicTitle}, {clinicServiceDescription}.
            </p>
          </div>

          <Tabs defaultValue="traditional" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
              <TabsTrigger value="traditional">Traditional</TabsTrigger>
              <TabsTrigger value="cupping">Cupping</TabsTrigger>
              <TabsTrigger value="moxibustion">Moxibustion</TabsTrigger>
              <TabsTrigger value="auricular">Auricular</TabsTrigger>
              <TabsTrigger value="electro">Electro</TabsTrigger>
              <TabsTrigger value="acupressure">Acupressure</TabsTrigger>
            </TabsList>

            <TabsContent value="traditional" className="mt-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Traditional Acupuncture"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-lg"
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900">Traditional Acupuncture</h3>
                  <p className="text-lg text-gray-700">
                    Traditional acupuncture is based on ancient Chinese medicine principles that have been refined over
                    thousands of years. This therapy involves the insertion of ultra-thin, sterile needles at specific
                    points along the body's meridians to restore the flow of Qi (vital energy) and promote natural
                    healing.
                  </p>
                  <h4 className="text-xl font-semibold text-gray-900 mt-6">Benefits:</h4>
                  <ul className="space-y-2">
                    {[
                      "Pain relief for various conditions",
                      "Improved energy and vitality",
                      "Enhanced immune function",
                      "Stress reduction and relaxation",
                      "Better sleep quality",
                      "Hormonal balance",
                    ].map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="mr-3 text-primary shrink-0 mt-1" size={18} />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4">
                    <Button asChild>
                      <Link href="/contact">Book This Treatment</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="cupping" className="mt-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Cupping Therapy"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-lg"
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900">Cupping Therapy</h3>
                  <p className="text-lg text-gray-700">
                    Cupping therapy is an ancient form of alternative medicine where special cups are placed on the skin
                    to create suction. This practice helps mobilize blood flow, promote healing, and relieve muscle
                    tension. We offer both traditional fire cupping and modern vacuum cupping techniques.
                  </p>
                  <h4 className="text-xl font-semibold text-gray-900 mt-6">Benefits:</h4>
                  <ul className="space-y-2">
                    {[
                      "Relief from muscle tension and pain",
                      "Improved blood circulation",
                      "Reduced inflammation",
                      "Detoxification",
                      "Relaxation and stress relief",
                      "Complementary treatment for respiratory conditions",
                    ].map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="mr-3 text-primary shrink-0 mt-1" size={18} />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4">
                    <Button asChild>
                      <Link href="/contact">Book This Treatment</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="moxibustion" className="mt-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Moxibustion Therapy"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-lg"
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900">Moxibustion</h3>
                  <p className="text-lg text-gray-700">
                    Moxibustion is a traditional Chinese medicine technique that involves burning dried mugwort (moxa)
                    on or near the skin at specific acupuncture points. This gentle heat therapy stimulates circulation,
                    warms the meridians, and helps to restore the flow of Qi throughout the body.
                  </p>
                  <h4 className="text-xl font-semibold text-gray-900 mt-6">Benefits:</h4>
                  <ul className="space-y-2">
                    {[
                      "Warming effect for cold conditions",
                      "Pain relief for arthritis and joint problems",
                      "Improved circulation",
                      "Support for digestive disorders",
                      "Immune system enhancement",
                      "Energy restoration",
                    ].map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="mr-3 text-primary shrink-0 mt-1" size={18} />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4">
                    <Button asChild>
                      <Link href="/contact">Book This Treatment</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="auricular" className="mt-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Auricular Acupuncture"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-lg"
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900">Auricular Acupuncture</h3>
                  <p className="text-lg text-gray-700">
                    Auricular acupuncture focuses on specific points on the ear that correspond to different organs and
                    body systems. This specialized form of acupuncture is particularly effective for addressing
                    addictions, anxiety, and pain management. We use both needle and seed techniques.
                  </p>
                  <h4 className="text-xl font-semibold text-gray-900 mt-6">Benefits:</h4>
                  <ul className="space-y-2">
                    {[
                      "Support for addiction recovery",
                      "Anxiety and stress reduction",
                      "Pain management",
                      "Weight management support",
                      "Improved sleep quality",
                      "Enhanced overall wellbeing",
                    ].map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="mr-3 text-primary shrink-0 mt-1" size={18} />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4">
                    <Button asChild>
                      <Link href="/contact">Book This Treatment</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="electro" className="mt-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Electroacupuncture"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-lg"
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900">Electroacupuncture</h3>
                  <p className="text-lg text-gray-700">
                    Electroacupuncture combines traditional acupuncture with modern technology by applying small
                    electrical currents to pairs of acupuncture needles. This enhances the stimulation of acupuncture
                    points and can be particularly effective for pain management and neurological conditions.
                  </p>
                  <h4 className="text-xl font-semibold text-gray-900 mt-6">Benefits:</h4>
                  <ul className="space-y-2">
                    {[
                      "Enhanced pain relief",
                      "Accelerated healing for injuries",
                      "Improved nerve function",
                      "Reduced inflammation",
                      "Support for neurological conditions",
                      "Muscle relaxation",
                    ].map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="mr-3 text-primary shrink-0 mt-1" size={18} />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4">
                    <Button asChild>
                      <Link href="/contact">Book This Treatment</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="acupressure" className="mt-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Acupressure Massage"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-lg"
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900">Acupressure Massage</h3>
                  <p className="text-lg text-gray-700">
                    Acupressure massage applies firm pressure to the same points targeted in acupuncture, but without
                    needles. This gentle yet effective therapy uses fingers, palms, and elbows to stimulate these
                    points, promoting relaxation and healing throughout the body.
                  </p>
                  <h4 className="text-xl font-semibold text-gray-900 mt-6">Benefits:</h4>
                  <ul className="space-y-2">
                    {[
                      "Deep relaxation and stress relief",
                      "Tension release in muscles",
                      "Improved circulation",
                      "Pain reduction",
                      "Enhanced energy flow",
                      "Ideal for those who prefer non-needle treatments",
                    ].map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="mr-3 text-primary shrink-0 mt-1" size={18} />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4">
                    <Button asChild>
                      <Link href="/contact">Book This Treatment</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Conditions We Treat */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="text-3xl font-bold text-gray-900">Conditions We Treat</h2>
            <div className="w-20 h-1 mx-auto mt-4 bg-primary"></div>
            <p className="mt-6 text-lg text-gray-700">
              Our acupuncture treatments can help with a wide range of health concerns
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                category: "Pain Management",
                conditions: ["Back Pain", "Neck Pain", "Joint Pain", "Arthritis", "Headaches & Migraines", "Sciatica"],
              },
              {
                category: "Neurological",
                conditions: ["Stress & Anxiety", "Depression", "Insomnia", "Fatigue", "Bell's Palsy", "Neuropathy"],
              },
              {
                category: "Digestive",
                conditions: ["IBS", "Acid Reflux", "Constipation", "Bloating", "Nausea", "Food Sensitivities"],
              },
              {
                category: "Women's Health",
                conditions: [
                  "Menstrual Issues",
                  "Fertility Support",
                  "Pregnancy Discomfort",
                  "Menopause Symptoms",
                  "PCOS",
                  "Endometriosis",
                ],
              },
              {
                category: "Respiratory",
                conditions: ["Allergies", "Asthma", "Sinusitis", "Common Cold", "Bronchitis", "Breathing Difficulties"],
              },
              {
                category: "Other Conditions",
                conditions: [
                  "Immune Support",
                  "Weight Management",
                  "Addiction Recovery",
                  "High Blood Pressure",
                  "Skin Conditions",
                  "Post-Surgery Recovery",
                ],
              },
            ].map((group, index) => (
              <Card key={index} className="h-full">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{group.category}</h3>
                  <ul className="space-y-2">
                    {group.conditions.map((condition, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="mr-3 text-primary shrink-0 mt-1" size={16} />
                        <span className="text-gray-700">{condition}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Process */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="text-3xl font-bold text-gray-900">Our Treatment Process</h2>
            <div className="w-20 h-1 mx-auto mt-4 bg-primary"></div>
            <p className="mt-6 text-lg text-gray-700">What to expect during your acupuncture journey with us</p>
          </div>

          <div className="grid gap-8 md:grid-cols-4">
            {[
              {
                step: "1",
                title: "Initial Consultation",
                description:
                  "We begin with a comprehensive assessment of your health history, concerns, and goals to develop a personalized treatment plan.",
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                step: "2",
                title: "Treatment Session",
                description:
                  "Experience gentle acupuncture therapy in a relaxing environment, with each session tailored to your specific needs.",
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                step: "3",
                title: "Follow-Up Care",
                description:
                  "We monitor your progress and adjust treatments as needed to ensure optimal results and continued improvement.",
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                step: "4",
                title: "Maintenance & Prevention",
                description:
                  "Once your primary concerns are addressed, we offer maintenance sessions to support your ongoing health and prevent recurrence.",
                image: "/placeholder.svg?height=200&width=300",
              },
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="relative h-48 mb-6">
                  <div className="absolute top-0 left-0 w-12 h-12 flex items-center justify-center bg-primary text-white text-xl font-bold rounded-full z-10">
                    {step.step}
                  </div>
                  <Image
                    src={step.image || "/placeholder.svg"}
                    alt={step.title}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-700">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="text-3xl font-bold text-gray-900">Our Pricing</h2>
            <div className="w-20 h-1 mx-auto mt-4 bg-primary"></div>
            <p className="mt-6 text-lg text-gray-700">Transparent pricing for all our acupuncture services</p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Initial Consultation",
                price: "₹1,500",
                duration: "90 minutes",
                description:
                  "Comprehensive assessment, health history review, diagnosis, and initial treatment session. Includes personalized treatment plan.",
              },
              {
                title: "Follow-Up Sessions",
                price: "₹1,000",
                duration: "60 minutes",
                description:
                  "Focused treatment sessions based on your established treatment plan, with adjustments as needed for optimal results.",
              },
              {
                title: "Package of 5 Sessions",
                price: "₹4,500",
                duration: "60 minutes each",
                description:
                  "Save 10% when you purchase a package of five follow-up sessions. Recommended for most conditions for best results.",
              },
            ].map((plan, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="p-6 bg-white">
                  <h3 className="text-xl font-semibold text-gray-900">{plan.title}</h3>
                  <div className="mt-4 flex items-baseline">
                    <span className="text-3xl font-bold text-primary">{plan.price}</span>
                    <span className="ml-2 text-gray-500">/ {plan.duration}</span>
                  </div>
                  <p className="mt-4 text-gray-700">{plan.description}</p>
                  <Button asChild className="w-full mt-6">
                    <Link href="/contact">Book Now</Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12 p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Additional Information</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="mr-3 text-primary shrink-0 mt-1" size={18} />
                <span className="text-gray-700">
                  We accept cash, all major credit cards, UPI payments, and net banking.
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-3 text-primary shrink-0 mt-1" size={18} />
                <span className="text-gray-700">
                  Secure your appointment by paying online during booking. Our payment gateway is fully secure and
                  encrypted.
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-3 text-primary shrink-0 mt-1" size={18} />
                <span className="text-gray-700">
                  Insurance coverage may be available for certain conditions. Please inquire for details.
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-3 text-primary shrink-0 mt-1" size={18} />
                <span className="text-gray-700">24-hour cancellation policy applies to all appointments.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-3 text-primary shrink-0 mt-1" size={18} />
                <span className="text-gray-700">
                  Special discounts available for seniors and students with valid ID.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl font-bold">Ready to Begin Your Healing Journey?</h2>
          <p className="max-w-2xl mx-auto mt-4 text-lg">
            Contact us today to schedule your consultation and take the first step towards improved health and wellness
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

