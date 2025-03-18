"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { CalendarIcon, Loader2, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import PaymentGateway from "./payment-gateway"

// Add treatment prices
const treatmentPrices = {
  traditional: 1500,
  cupping: 1200,
  moxibustion: 1300,
  auricular: 1000,
  electro: 1800,
  acupressure: 1000,
  consultation: 800,
}

export default function AppointmentForm() {
  const [date, setDate] = useState<Date>()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [showPayment, setShowPayment] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    time: "",
    message: "",
  })
  const [paymentId, setPaymentId] = useState<string | null>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // If we don't have a service selected, we can't proceed
    if (!formData.service) {
      alert("Please select a treatment type")
      return
    }

    // If we don't have a date selected, we can't proceed
    if (!date) {
      alert("Please select a preferred date")
      return
    }

    // If we don't have a time selected, we can't proceed
    if (!formData.time) {
      alert("Please select a preferred time")
      return
    }

    // Show payment gateway
    setShowPayment(true)
  }

  const handlePaymentComplete = (paymentId: string) => {
    setPaymentId(paymentId)
    setIsSubmitting(true)

    // Simulate form submission after payment
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
      setShowPayment(false)

      // Reset form after success message
      setTimeout(() => {
        setIsSuccess(false)
        setFormData({
          name: "",
          phone: "",
          email: "",
          service: "",
          time: "",
          message: "",
        })
        setDate(undefined)
        setPaymentId(null)
      }, 5000)
    }, 1500)
  }

  const handleCancelPayment = () => {
    setShowPayment(false)
  }

  // Calculate the price based on the selected service
  const selectedPrice = formData.service ? treatmentPrices[formData.service as keyof typeof treatmentPrices] : 0
  const serviceName = formData.service
    ? (Object.entries(treatmentPrices)
        .find(([key]) => key === formData.service)?.[0] ?? "")
        .charAt(0)
        .toUpperCase() +
      (Object.entries(treatmentPrices)
        .find(([key]) => key === formData.service)?.[0] ?? "")
        .slice(1) +
      " Acupuncture"
    : ""

  if (showPayment) {
    return (
      <PaymentGateway
        amount={selectedPrice}
        serviceName={serviceName}
        onPaymentComplete={handlePaymentComplete}
        onCancel={handleCancelPayment}
      />
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h3 className="text-xl font-semibold text-gray-900">Request an Appointment</h3>
      <p className="text-sm text-gray-600">
        Fill out the form below and complete the payment to confirm your appointment.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block mb-1 text-sm font-medium text-gray-700">
            Full Name
          </label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Your full name"
            required
            className="w-full"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block mb-1 text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <Input
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            type="tel"
            placeholder="+91 XXXXX XXXXX"
            required
            className="w-full"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-700">
          Email Address
        </label>
        <Input
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          type="email"
          placeholder="your.email@example.com"
          required
          className="w-full"
        />
      </div>

      <div>
        <label htmlFor="service" className="block mb-1 text-sm font-medium text-gray-700">
          Treatment Type
        </label>
        <Select name="service" value={formData.service} onValueChange={(value) => handleSelectChange("service", value)}>
          <SelectTrigger>
            <SelectValue placeholder="Select a treatment" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="traditional">Traditional Acupuncture (₹1,500)</SelectItem>
            <SelectItem value="cupping">Cupping Therapy (₹1,200)</SelectItem>
            <SelectItem value="moxibustion">Moxibustion (₹1,300)</SelectItem>
            <SelectItem value="auricular">Auricular Acupuncture (₹1,000)</SelectItem>
            <SelectItem value="electro">Electroacupuncture (₹1,800)</SelectItem>
            <SelectItem value="acupressure">Acupressure Massage (₹1,000)</SelectItem>
            <SelectItem value="consultation">Initial Consultation (₹800)</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">Preferred Date</label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}
              >
                <CalendarIcon className="w-4 h-4 mr-2" />
                {date ? format(date, "PPP") : "Select a date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
                disabled={(date) => {
                  // Disable past dates and Sundays
                  const today = new Date()
                  today.setHours(0, 0, 0, 0)
                  return date < today || date.getDay() === 0
                }}
              />
            </PopoverContent>
          </Popover>
        </div>

        <div>
          <label htmlFor="time" className="block mb-1 text-sm font-medium text-gray-700">
            Preferred Time
          </label>
          <Select name="time" value={formData.time} onValueChange={(value) => handleSelectChange("time", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select a time" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="9:00">9:00 AM</SelectItem>
              <SelectItem value="10:00">10:00 AM</SelectItem>
              <SelectItem value="11:00">11:00 AM</SelectItem>
              <SelectItem value="12:00">12:00 PM</SelectItem>
              <SelectItem value="14:00">2:00 PM</SelectItem>
              <SelectItem value="15:00">3:00 PM</SelectItem>
              <SelectItem value="16:00">4:00 PM</SelectItem>
              <SelectItem value="17:00">5:00 PM</SelectItem>
              <SelectItem value="18:00">6:00 PM</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block mb-1 text-sm font-medium text-gray-700">
          Health Concerns / Message
        </label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          placeholder="Please briefly describe your health concerns or any questions you have"
          rows={4}
          className="w-full"
        />
      </div>

      {formData.service && (
        <div className="p-4 bg-gray-50 rounded-lg">
          <h4 className="font-medium text-gray-900 mb-2">Appointment Summary</h4>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Treatment:</span>
              <span>{serviceName}</span>
            </div>
            {date && (
              <div className="flex justify-between">
                <span>Date:</span>
                <span>{format(date, "PPP")}</span>
              </div>
            )}
            {formData.time && (
              <div className="flex justify-between">
                <span>Time:</span>
                <span>
                  {formData.time.includes(":") ? formData.time : `${formData.time}:00`}{" "}
                  {Number.parseInt(formData.time) < 12 ? "AM" : "PM"}
                </span>
              </div>
            )}
            <div className="flex justify-between font-medium pt-2 border-t border-gray-200">
              <span>Total Amount:</span>
              <span>₹{selectedPrice.toFixed(2)}</span>
            </div>
          </div>
        </div>
      )}

      <Button type="submit" className="w-full bg-primary hover:bg-primary/90" disabled={isSubmitting || isSuccess}>
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 mr-2 animate-spin" /> Processing...
          </>
        ) : isSuccess ? (
          "Appointment Confirmed!"
        ) : (
          <>
            Proceed to Payment <ArrowRight className="ml-2 w-4 h-4" />
          </>
        )}
      </Button>

      {isSuccess && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-center text-green-600 font-medium">Thank you! Your appointment has been confirmed.</p>
          <p className="text-sm text-center text-green-600 mt-1">Payment ID: {paymentId}</p>
          <p className="text-sm text-center text-gray-600 mt-2">
            A confirmation email has been sent to your email address with all the details.
          </p>
        </div>
      )}

      <p className="text-xs text-center text-gray-500">
        By submitting this form, you agree to our privacy policy and terms of service.
      </p>
    </form>
  )
}

