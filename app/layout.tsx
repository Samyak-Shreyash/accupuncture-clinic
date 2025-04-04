import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import { CLINIC_NAME as clinicName } from "@/lib/constants"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title:  clinicName,
  description:
    "Experience the transformative power of traditional acupuncture therapy at "+clinicName+" in Raipur, Chhattisgarh. Book your appointment today.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <div className="flex flex-col min-h-screen">
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'



import './globals.css'