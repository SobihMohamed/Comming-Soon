"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Navbar from "@/components/navbar"
import ScrollAnimation from "@/components/scroll-animation"
import { Phone, Mail, Clock, Send } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const emailSubject = `Contact Form: ${formData.subject}`
    const emailBody = `Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}

Message:
${formData.message}`

    const emailUrl = `mailto:sobihmohamedsobih@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`
    window.open(emailUrl, "_blank")
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="pt-20">
        {/* Contact Hero */}
        <ScrollAnimation>
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h1 className="text-5xl font-bold text-foreground mb-6">Get in Touch</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Have questions about our products or need assistance? We're here to help!
              </p>
            </div>
          </section>
        </ScrollAnimation>

        {/* Contact Content */}
        <ScrollAnimation>
          <section className="py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Information */}
                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl font-bold text-foreground mb-6">Contact Information</h2>
                    <p className="text-muted-foreground mb-8">
                      Reach out to us through any of the following channels. We're always happy to help!
                    </p>
                  </div>

                  <div className="space-y-6">
                    <Card className="bg-card border-border">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="bg-primary/10 p-3 rounded-lg">
                            <Phone className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-foreground mb-2">Phone & WhatsApp</h3>
                            <p className="text-muted-foreground">+20 122 583 1022</p>
                            <p className="text-sm text-muted-foreground mt-1">Available 24/7 for WhatsApp</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-card border-border">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="bg-secondary/10 p-3 rounded-lg">
                            <Mail className="h-6 w-6 text-secondary" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-foreground mb-2">Email</h3>
                            <p className="text-muted-foreground">sobihmohamedsobih@gmail.com</p>
                            <p className="text-sm text-muted-foreground mt-1">We'll respond within 24 hours</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-card border-border">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="bg-accent/10 p-3 rounded-lg">
                            <Clock className="h-6 w-6 text-accent" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-foreground mb-2">Business Hours</h3>
                            <p className="text-muted-foreground">Monday - Sunday</p>
                            <p className="text-muted-foreground">9:00 AM - 10:00 PM (EET)</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Contact Form */}
                <Card className="bg-card border-border">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-foreground">Send us a Message</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Name *</Label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            placeholder="Your full name"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="email">Email *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject *</Label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                          placeholder="What's this about?"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          placeholder="Tell us how we can help you..."
                          rows={6}
                        />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                      >
                        <Send className="h-5 w-5 mr-2" />
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        </ScrollAnimation>
      </div>
    </div>
  )
}
