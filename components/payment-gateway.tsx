"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { CreditCard, CheckCircle2, Lock, AlertCircle } from "lucide-react"

interface PaymentGatewayProps {
  amount: number
  serviceName: string
  onPaymentComplete: (paymentId: string) => void
  onCancel: () => void
}

export default function PaymentGateway({ amount, serviceName, onPaymentComplete, onCancel }: PaymentGatewayProps) {
  const [paymentMethod, setPaymentMethod] = useState<string>("card")
  const [isProcessing, setIsProcessing] = useState<boolean>(false)
  const [isComplete, setIsComplete] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setIsProcessing(true)

    // Simulate payment processing
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Generate a fake payment ID
      const paymentId = `PAY-${Math.random().toString(36).substring(2, 10).toUpperCase()}`

      setIsComplete(true)
      setIsProcessing(false)
      onPaymentComplete(paymentId)
    } catch (err) {
      setError("Payment processing failed. Please try again.")
      setIsProcessing(false)
    }
  }

  if (isComplete) {
    return (
      <Card className="w-full">
        <CardHeader className="bg-green-50 border-b">
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle2 className="h-8 w-8 text-green-600" />
            </div>
          </div>
          <CardTitle className="text-center text-green-700">Payment Successful</CardTitle>
          <CardDescription className="text-center">Your appointment has been confirmed</CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-gray-600">Service:</span>
              <span className="font-medium">{serviceName}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Amount Paid:</span>
              <span className="font-medium">₹{amount.toFixed(2)}</span>
            </div>
            <Separator />
            <p className="text-center text-sm text-gray-500">
              A confirmation email has been sent to your email address with all the details.
            </p>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Payment Details</CardTitle>
        <CardDescription>Complete your payment to confirm your appointment</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-6">
          <div className="flex justify-between mb-2">
            <span className="text-gray-600">Service:</span>
            <span className="font-medium">{serviceName}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Amount:</span>
            <span className="font-medium text-lg">₹{amount.toFixed(2)}</span>
          </div>
        </div>

        <Tabs defaultValue="card" onValueChange={setPaymentMethod}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="card">Credit Card</TabsTrigger>
            <TabsTrigger value="upi">UPI</TabsTrigger>
            <TabsTrigger value="netbanking">Net Banking</TabsTrigger>
          </TabsList>

          <TabsContent value="card">
            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
              <div className="space-y-2">
                <Label htmlFor="cardName">Name on Card</Label>
                <Input id="cardName" placeholder="John Doe" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="cardNumber">Card Number</Label>
                <div className="relative">
                  <Input
                    id="cardNumber"
                    placeholder="1234 5678 9012 3456"
                    required
                    pattern="[0-9\s]{13,19}"
                    maxLength={19}
                  />
                  <CreditCard className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="expiry">Expiry Date</Label>
                  <Input id="expiry" placeholder="MM/YY" required pattern="(0[1-9]|1[0-2])\/[0-9]{2}" maxLength={5} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cvv">CVV</Label>
                  <Input id="cvv" placeholder="123" required pattern="[0-9]{3,4}" maxLength={4} type="password" />
                </div>
              </div>

              {error && (
                <div className="bg-red-50 p-3 rounded-md flex items-start">
                  <AlertCircle className="text-red-500 mr-2 mt-0.5 shrink-0" size={16} />
                  <p className="text-red-600 text-sm">{error}</p>
                </div>
              )}

              <div className="flex items-center text-sm text-gray-500 mt-4">
                <Lock className="h-4 w-4 mr-1" />
                <span>Your payment information is secure and encrypted</span>
              </div>

              <div className="flex justify-end gap-4 pt-2">
                <Button type="button" variant="outline" onClick={onCancel}>
                  Cancel
                </Button>
                <Button type="submit" disabled={isProcessing}>
                  {isProcessing ? "Processing..." : `Pay ₹${amount.toFixed(2)}`}
                </Button>
              </div>
            </form>
          </TabsContent>

          <TabsContent value="upi">
            <div className="space-y-4 mt-4">
              <div className="space-y-2">
                <Label htmlFor="upiId">UPI ID</Label>
                <Input id="upiId" placeholder="yourname@upi" required />
              </div>

              <p className="text-sm text-gray-500">
                Enter your UPI ID and click on Pay. You will receive a payment request on your UPI app.
              </p>

              {error && (
                <div className="bg-red-50 p-3 rounded-md flex items-start">
                  <AlertCircle className="text-red-500 mr-2 mt-0.5 shrink-0" size={16} />
                  <p className="text-red-600 text-sm">{error}</p>
                </div>
              )}

              <div className="flex justify-end gap-4 pt-2">
                <Button type="button" variant="outline" onClick={onCancel}>
                  Cancel
                </Button>
                <Button onClick={handleSubmit} disabled={isProcessing}>
                  {isProcessing ? "Processing..." : `Pay ₹${amount.toFixed(2)}`}
                </Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="netbanking">
            <div className="space-y-4 mt-4">
              <div className="space-y-2">
                <Label>Select Bank</Label>
                <RadioGroup defaultValue="hdfc">
                  {[
                    { value: "hdfc", label: "HDFC Bank" },
                    { value: "sbi", label: "State Bank of India" },
                    { value: "icici", label: "ICICI Bank" },
                    { value: "axis", label: "Axis Bank" },
                    { value: "other", label: "Other Banks" },
                  ].map((bank) => (
                    <div key={bank.value} className="flex items-center space-x-2">
                      <RadioGroupItem value={bank.value} id={bank.value} />
                      <Label htmlFor={bank.value}>{bank.label}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              {error && (
                <div className="bg-red-50 p-3 rounded-md flex items-start">
                  <AlertCircle className="text-red-500 mr-2 mt-0.5 shrink-0" size={16} />
                  <p className="text-red-600 text-sm">{error}</p>
                </div>
              )}

              <p className="text-sm text-gray-500">
                You will be redirected to your bank's website to complete the payment.
              </p>

              <div className="flex justify-end gap-4 pt-2">
                <Button type="button" variant="outline" onClick={onCancel}>
                  Cancel
                </Button>
                <Button onClick={handleSubmit} disabled={isProcessing}>
                  {isProcessing ? "Processing..." : `Pay ₹${amount.toFixed(2)}`}
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter className="flex-col">
        <div className="flex justify-center gap-4 mt-4">
          <img src="/payment-icons/visa.svg" alt="Visa" className="h-8" />
          <img src="/payment-icons/mastercard.svg" alt="Mastercard" className="h-8" />
          <img src="/payment-icons/rupay.svg" alt="RuPay" className="h-8" />
          <img src="/payment-icons/upi.svg" alt="UPI" className="h-8" />
        </div>
      </CardFooter>
    </Card>
  )
}

