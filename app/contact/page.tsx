import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { PhoneCall, Mail, MapPin, Clock, Facebook, Instagram, Twitter, Youtube } from "lucide-react"
import AppointmentForm from "@/components/appointment-form"
import { 
  CLINIC_NAME as clinicName, 
  CLINIC_PHONE as clinicPhone,
  CLINIC_EMAIL as clinicEmail,
  CLINIC_ADDRESS as clinicAddress,
  CLINIC_GOOGLE_MAPS as googleMapsUrl,
  CLINIC_ADDRESS_LINE_1 as clinicAddress_line_1,
  CLINIC_ADDRESS_CITY as clinicAddress_city,
  CLINIC_ADDRESS_STATE as clinicAddress_state,
  CLINIC_ADDRESS_ZIP as clinicAddress_zip
} from "@/lib/constants"
import LocationMap from "@/components/Location-map"

export const metadata = {
  title: "Contact Us | " + clinicName,
  description:
    "Get in touch with " +
    clinicName +
    " in Raipur, Chhattisgarh. Book an appointment or ask us any questions about our services.",
}

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[400px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/contact_us.jpg?height=400&width=1920"
            alt="Acupuncture clinic reception"
            fill
            className="object-cover brightness-[0.7]"
            priority
          />
        </div>
        <div className="container relative z-1 px-4 mx-auto text-center text-white">
          {/* <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Contact Us</h1> */}
          <p className="max-w-3xl font-bold mx-auto mt-36 text-xl align-text-bottom">
            We're here to answer your questions and help you schedule your appointment
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="text-3xl font-bold text-gray-900">Get In Touch</h2>
            <div className="w-20 h-1 mx-auto mt-4 bg-primary"></div>
            <p className="mt-6 text-lg text-gray-700">
              We look forward to hearing from you and helping you on your journey to better health
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10">
                  <PhoneCall className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Phone</h3>
                <p className="text-lg font-medium text-primary mt-2">{clinicPhone}</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10">
                  <Mail className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
                <p className="text-lg font-medium text-primary mt-2">{clinicEmail}</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Location</h3>
                <p className="text-lg font-medium text-primary mt-2">{clinicAddress}</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Hours</h3>
                <p className="text-lg font-medium text-primary mt-2">Mon-Sat: 9:00 AM - 7:00 PM</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map and Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Location</h2>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg mb-6">
              <LocationMap
                address={clinicAddress || "Lig 25, Sector 1, Shanker Nagar, Raipur, Chhattisgarh, 492004, India"}
                googleMapsUrl={googleMapsUrl || "https://maps.app.goo.gl/Zge6GyRTLfPpeqMp9"}
              />
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Detailed Address</h3>
                <p className="text-gray-700 mb-4">
                  {clinicName}
                  <br />
                  {clinicAddress_line_1}
                  <br />
                  {clinicAddress_city}, {clinicAddress_state} {clinicAddress_zip}
                  <br />
                  India
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-4 mt-6">Directions</h3>
                <p className="text-gray-700 mb-2">
                  <span className="font-medium">From Railway Station:</span> 10 minutes by car (3 km)
                </p>
                <p className="text-gray-700 mb-2">
                  <span className="font-medium">From Bus Terminal:</span> 15 minutes by car (4 km)
                </p>
                <p className="text-gray-700">
                  <span className="font-medium">From Swami Vivekananda Airport:</span> 25 minutes by car (15 km)
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-4 mt-6">Parking</h3>
                <p className="text-gray-700">Free parking is available for patients in our dedicated parking area.</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Book an Appointment</h2>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <AppointmentForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
            <div className="w-20 h-1 mx-auto mt-4 bg-primary"></div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
            {[
              {
                question: "What should I wear to my acupuncture appointment?",
                answer:
                  "Wear loose, comfortable clothing that can be easily rolled up to expose areas like elbows and knees. For some treatments, you may need to change into a provided gown.",
              },
              {
                question: "Is acupuncture painful?",
                answer:
                  "Most patients experience minimal to no pain. Acupuncture needles are extremely thin, and while you may feel a slight sensation when they're inserted, it's usually not painful.",
              },
              {
                question: "How many sessions will I need?",
                answer:
                  "This varies depending on your condition. Acute issues might resolve in 2-4 sessions, while chronic conditions may require ongoing treatment. We'll discuss a recommended treatment plan during your consultation.",
              },
              {
                question: "Is acupuncture safe?",
                answer:
                  "Yes, when performed by a licensed practitioner, acupuncture is very safe. We use sterile, single-use needles and follow strict hygiene protocols.",
              },
              {
                question: "Can I receive acupuncture if I'm pregnant?",
                answer:
                  "Yes, acupuncture can be safely performed during pregnancy and can help with many pregnancy-related discomforts. Always inform your practitioner if you are pregnant.",
              },
              {
                question: "Do you accept insurance?",
                answer:
                  "Some insurance plans cover acupuncture. We recommend checking with your provider before your appointment. We can provide you with the necessary documentation for reimbursement claims.",
              },
            ].map((faq, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Options Section */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="text-3xl font-bold text-gray-900">Payment Options</h2>
            <div className="w-20 h-1 mx-auto mt-4 bg-primary"></div>
            <p className="mt-6 text-lg text-gray-700">
              We offer multiple convenient payment methods for your acupuncture treatments
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10">
                  <img src="/payment-icons/visa.svg" alt="Credit Card" className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">Credit/Debit Cards</h3>
                <p className="text-gray-700 text-center">
                  We accept all major credit and debit cards including Visa, Mastercard, and RuPay.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10">
                  <img src="/payment-icons/upi.svg" alt="UPI" className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">UPI Payments</h3>
                <p className="text-gray-700 text-center">
                  Make instant payments using UPI apps like Google Pay, PhonePe, Paytm, and more.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10">
                  <img src="/payment-icons/rupay.svg" alt="Net Banking" className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">Net Banking</h3>
                <p className="text-gray-700 text-center">
                  Transfer funds directly from your bank account through secure net banking.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 p-6 bg-white rounded-lg shadow-md max-w-3xl mx-auto">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Secure Payment Processing</h3>
            <p className="text-gray-700 mb-4">
              All online payments are processed through secure payment gateways that use industry-standard encryption to
              protect your financial information. We never store your complete credit card details on our servers.
            </p>
            <p className="text-gray-700">
              For those who prefer, we also accept cash payments at our clinic. However, we encourage online payments
              for a contactless experience and to secure your appointment slot in advance.
            </p>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900">Connect With Us</h2>
          <div className="w-20 h-1 mx-auto mt-4 bg-primary"></div>
          <p className="max-w-2xl mx-auto mt-6 text-lg text-gray-700">
            Follow us on social media for health tips, clinic updates, and special offers
          </p>

          <div className="flex justify-center mt-8 space-x-6">
            <Link
              href="#"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white hover:bg-primary/90 transition-colors"
            >
              <Facebook className="w-6 h-6" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link
              href="#"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white hover:bg-primary/90 transition-colors"
            >
              <Instagram className="w-6 h-6" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link
              href="#"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white hover:bg-primary/90 transition-colors"
            >
              <Twitter className="w-6 h-6" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link
              href="#"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white hover:bg-primary/90 transition-colors"
            >
              <Youtube className="w-6 h-6" />
              <span className="sr-only">YouTube</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

