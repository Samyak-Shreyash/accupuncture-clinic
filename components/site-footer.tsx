import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail, Clock } from "lucide-react"
import { 
  CLINIC_NAME as clinicName,
  CLINIC_EMAIL as clinicEmail,
  CLINIC_PHONE as clinicPhone,
  CLINIC_ADDRESS_LINE_1 as clinicAddress_line_1, 
  CLINIC_ADDRESS_CITY as clinicAddress_city,
  CLINIC_ADDRESS_STATE as clinicAddress_state,
  CLINIC_ADDRESS_ZIP as clinicAddress_zip,
  CLINIC_FACEBOOK as clinicFacebook,
  CLINIC_INSTAGRAM as clinicInstagram,
  CLINIC_TWITTER as clinicTwitter,
  CLINIC_YOUTUBE as clinicYoutube
} from "@/lib/constants"

export default function SiteFooter() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-primary">{clinicName?.split(' ')[0]}</span>
              <span className="ml-1 text-2xl font-light">{clinicName?.split(' ')[0]}</span>
            </Link>
            <p className="mt-4 text-gray-400">
              Bringing balance and wellness through traditional acupuncture and holistic healing practices in Raipur,
              Chhattisgarh.
            </p>
            <div className="flex mt-6 space-x-4">
              <Link href={clinicFacebook} className="text-gray-400 hover:text-primary">
                <Facebook className="w-5 h-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href={clinicInstagram} className="text-gray-400 hover:text-primary">
                <Instagram className="w-5 h-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href={clinicTwitter} className="text-gray-400 hover:text-primary">
                <Twitter className="w-5 h-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href={clinicYoutube} className="text-gray-400 hover:text-primary">
                <Youtube className="w-5 h-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-primary">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/practitioners" className="text-gray-400 hover:text-primary">
                  Our Practitioners
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-gray-400 hover:text-primary">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-primary">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services#traditional" className="text-gray-400 hover:text-primary">
                  Traditional Acupuncture
                </Link>
              </li>
              <li>
                <Link href="/services#cupping" className="text-gray-400 hover:text-primary">
                  Cupping Therapy
                </Link>
              </li>
              <li>
                <Link href="/services#moxibustion" className="text-gray-400 hover:text-primary">
                  Moxibustion
                </Link>
              </li>
              <li>
                <Link href="/services#auricular" className="text-gray-400 hover:text-primary">
                  Auricular Acupuncture
                </Link>
              </li>
              <li>
                <Link href="/services#electro" className="text-gray-400 hover:text-primary">
                  Electroacupuncture
                </Link>
              </li>
              <li>
                <Link href="/services#acupressure" className="text-gray-400 hover:text-primary">
                  Acupressure Massage
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="w-5 h-5 mr-3 text-primary shrink-0" />
                <span className="text-gray-400">
                  {clinicAddress_line_1}
                  <br />
                  {clinicAddress_city}, {clinicAddress_state} {clinicAddress_zip}
                </span>
              </li>
              <li className="flex">
                <Phone className="w-5 h-5 mr-3 text-primary shrink-0" />
                <span className="text-gray-400">{clinicPhone}</span>
              </li>
              <li className="flex">
                <Mail className="w-5 h-5 mr-3 text-primary shrink-0" />
                <span className="text-gray-400">{clinicEmail}</span>
              </li>
              <li className="flex">
                <Clock className="w-5 h-5 mr-3 text-primary shrink-0" />
                <span className="text-gray-400">
                  Monday - Saturday: 9:00 AM - 7:00 PM
                  <br />
                  Sunday: Closed
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 mt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} {clinicName}. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy-policy" className="text-sm text-gray-400 hover:text-primary">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-sm text-gray-400 hover:text-primary">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-sm text-gray-400 hover:text-primary">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

