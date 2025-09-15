"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { X, ShoppingCart, Phone, CheckCircle } from "lucide-react"

interface OrderFormProps {
  product: {
    name: string
    price: number
    size: string
    image: string
  }
  onClose: () => void
}

export default function OrderForm({ product, onClose }: OrderFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    anotherMobile: "",
    address: "",
    quantity: 1,
    notes: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const orderDetails = {
      ...formData,
      product: product.name,
      size: product.size,
      price: product.price,
      total: product.price * formData.quantity,
    }

    const whatsappMessage = `🛍️ *New EOS Order*

👤 *Customer Info:*
• Name: ${orderDetails.name}
• Email: ${orderDetails.email}
• Mobile: ${orderDetails.mobile}
${orderDetails.anotherMobile ? `• Alt Mobile: ${orderDetails.anotherMobile}` : ""}

📦 *Product Details:*
• Item: ${orderDetails.product}
• Size: ${orderDetails.size}
• Quantity: ${orderDetails.quantity} pcs
• Unit Price: ${orderDetails.price} EGP
• *Total: ${orderDetails.total} EGP*

📍 *Delivery Address:*
${orderDetails.address}

${orderDetails.notes ? `📝 *Special Notes:*\n${orderDetails.notes}` : ""}

✨ *Order via EOS Website*`

    try {
      // Simulate processing delay for better UX
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Open WhatsApp with formatted message
      const whatsappUrl = `https://wa.me/201225831022?text=${encodeURIComponent(whatsappMessage)}`
      window.open(whatsappUrl, "_blank")

      setIsSuccess(true)

      // Auto close after success
      setTimeout(() => {
        onClose()
      }, 3000)
    } catch (error) {
      alert("Error submitting order. Please try again or contact us directly.")
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: name === "quantity" ? Number.parseInt(value) || 1 : value,
    }))
  }

  if (isSuccess) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50 animate-in fade-in duration-300">
        <Card className="w-full max-w-md bg-background border-border animate-in zoom-in duration-500">
          <CardContent className="p-8 text-center space-y-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto animate-in zoom-in duration-700 delay-200">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">Order Submitted!</h3>
            <p className="text-muted-foreground">
              Your order has been sent via WhatsApp. We'll contact you shortly to confirm your order.
            </p>
            <div className="text-sm text-muted-foreground">Closing automatically in 3 seconds...</div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50 animate-in fade-in duration-300">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-background border-border animate-in slide-in-from-bottom duration-500">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4 border-b border-border">
          <CardTitle className="text-2xl font-bold text-foreground">Complete Your Order</CardTitle>
          <Button variant="ghost" size="sm" onClick={onClose} className="hover:bg-destructive/10">
            <X className="h-4 w-4" />
          </Button>
        </CardHeader>

        <CardContent className="space-y-6 p-6">
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-6 rounded-xl border border-border">
            <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
              <ShoppingCart className="h-5 w-5" />
              Order Summary
            </h3>
            <div className="flex justify-between items-center">
              <div className="space-y-1">
                <span className="font-medium text-foreground">{product.name}</span>
                <div className="text-sm text-muted-foreground">Size: {product.size}</div>
              </div>
              <span className="text-2xl font-bold text-primary">{product.price} EGP</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Customer Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground border-b border-border pb-2">
                Customer Information
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground font-medium">
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your full name"
                    className="border-border focus:border-primary transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground font-medium">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="your@email.com"
                    className="border-border focus:border-primary transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="mobile" className="text-foreground font-medium">
                    Primary Mobile *
                  </Label>
                  <Input
                    id="mobile"
                    name="mobile"
                    type="tel"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    required
                    placeholder="+20 123 456 7890"
                    className="border-border focus:border-primary transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="anotherMobile" className="text-foreground font-medium">
                    Alternative Mobile
                  </Label>
                  <Input
                    id="anotherMobile"
                    name="anotherMobile"
                    type="tel"
                    value={formData.anotherMobile}
                    onChange={handleInputChange}
                    placeholder="+20 123 456 7890"
                    className="border-border focus:border-primary transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="address" className="text-foreground font-medium">
                  Delivery Address *
                </Label>
                <Textarea
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your complete delivery address including city, area, and landmarks"
                  rows={3}
                  className="border-border focus:border-primary transition-colors resize-none"
                />
              </div>
            </div>

            {/* Order Details */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground border-b border-border pb-2">Order Details</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="quantity" className="text-foreground font-medium">
                    Quantity
                  </Label>
                  <Input
                    id="quantity"
                    name="quantity"
                    type="number"
                    min="1"
                    max="10"
                    value={formData.quantity}
                    onChange={handleInputChange}
                    required
                    className="border-border focus:border-primary transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-foreground font-medium">Total Amount</Label>
                  <div className="p-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg border border-primary/20">
                    <span className="text-3xl font-bold text-primary">{product.price * formData.quantity} EGP</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="notes" className="text-foreground font-medium">
                  Additional Notes
                </Label>
                <Textarea
                  id="notes"
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  placeholder="Any special instructions, preferred delivery time, or additional requests"
                  rows={2}
                  className="border-border focus:border-primary transition-colors resize-none"
                />
              </div>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              size="lg"
              className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground font-semibold py-4 transition-all duration-300 transform hover:scale-[1.02]"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Processing Order...
                </div>
              ) : (
                <>
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Place Order - {product.price * formData.quantity} EGP
                </>
              )}
            </Button>

            {/* Contact Info */}
            <div className="flex justify-center pt-4 border-t border-border">
              <div className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Phone className="h-4 w-4" />
                <span>WhatsApp: +20 122 583 1022</span>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
