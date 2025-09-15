"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { CheckCircle, Mail, Calendar, Users, Sparkles } from "lucide-react"

export default function ComingSoonPage() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsLoading(true)

    const message = `🔥 NEW EMAIL SIGNUP - EOS COMING SOON PAGE 🔥

📧 Email: ${email}
📅 Date: ${new Date().toLocaleDateString()}
⏰ Time: ${new Date().toLocaleTimeString()}
🌐 Source: Coming Soon Page

This person is excited for the EOS launch! 🚀`

    const whatsappUrl = `https://wa.me/201225831022?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")

    setIsSubmitted(true)
    setIsLoading(false)

    // Reset form after 4 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setEmail("")
    }, 4000)
  }

  if (!mounted) return null

  return (
    <div className="min-h-screen relative overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        <video autoPlay muted loop playsInline className="w-full h-full object-cover blur-sm scale-110">
          <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/video2-I0LQb0n6SLcKZ0HQmoOzlBRXw4h53w.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="text-center max-w-4xl mx-auto fade-in-scale">
          <div className="mb-8 float-animation">
            <img
              src="/images/eos-logo.jpeg"
              alt="EOS Logo"
              className="w-36 h-36 mx-auto rounded-full border-4 border-primary/50 shadow-2xl glow-effect"
            />
          </div>

          <div className="mb-6">
            <h1 className="text-6xl md:text-8xl font-black text-white mb-4 tracking-tight">
              <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-white font-black">
                EOS
              </span>
            </h1>
            <div className="text-2xl md:text-4xl font-bold text-white/90 typewriter-enhanced">Goddess of Dawn</div>
          </div>

          <div className="mb-8">
            <p className="text-xl md:text-2xl text-white/80 mb-4 leading-relaxed">
              <Sparkles className="inline w-6 h-6 text-accent mr-2 sparkle-effect" />
              Unveil Your Dark Side
              <Sparkles className="inline w-6 h-6 text-accent ml-2 sparkle-effect" />
            </p>
            <p className="text-lg md:text-xl text-accent font-semibold">Premium Streetwear Collection</p>
          </div>

          <Card className="bg-black/50 backdrop-blur-lg border-primary/40 p-8 mb-8 max-w-md mx-auto shadow-2xl">
            <div className="flex items-center justify-center mb-4">
              <Calendar className="w-8 h-8 text-accent mr-3 float-animation" />
              <span className="text-2xl font-bold text-white">Coming Soon</span>
            </div>

            <p className="text-white/80 mb-6 leading-relaxed">
              Be the first to experience the mystical world of EOS. Join our exclusive launch list and get early access.
            </p>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 w-5 h-5" />
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-12 bg-white/10 border-white/30 text-white placeholder:text-white/60 focus:border-accent focus:ring-accent/50 transition-all duration-300"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-bold py-3 text-lg transition-all duration-300 transform hover:scale-105 shine-effect"
                >
                  {isLoading ? (
                    <div className="flex items-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Joining...
                    </div>
                  ) : (
                    "Notify Me First"
                  )}
                </Button>
              </form>
            ) : (
              <div className="text-center fade-in-scale">
                <CheckCircle className="w-16 h-16 text-accent mx-auto mb-4 float-animation" />
                <p className="text-white font-bold text-lg mb-2">Welcome to the EOS Family!</p>
                <p className="text-white/70">You'll be the first to know when we launch.</p>
              </div>
            )}
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="text-center p-6 bg-black/30 backdrop-blur-sm rounded-lg border border-white/20 hover:border-accent/50 transition-all duration-300 hover:transform hover:scale-105">
              <Users className="w-10 h-10 text-accent mx-auto mb-3 float-animation" />
              <h3 className="text-white font-bold mb-2 text-lg">Exclusive Access</h3>
              <p className="text-white/70 text-sm">Limited edition pieces for the chosen few</p>
            </div>
            <div className="text-center p-6 bg-black/30 backdrop-blur-sm rounded-lg border border-white/20 hover:border-accent/50 transition-all duration-300 hover:transform hover:scale-105">
              <CheckCircle
                className="w-10 h-10 text-accent mx-auto mb-3 float-animation"
                style={{ animationDelay: "0.5s" }}
              />
              <h3 className="text-white font-bold mb-2 text-lg">Premium Quality</h3>
              <p className="text-white/70 text-sm">Crafted with the finest materials</p>
            </div>
            <div className="text-center p-6 bg-black/30 backdrop-blur-sm rounded-lg border border-white/20 hover:border-accent/50 transition-all duration-300 hover:transform hover:scale-105">
              <Calendar
                className="w-10 h-10 text-accent mx-auto mb-3 float-animation"
                style={{ animationDelay: "1s" }}
              />
              <h3 className="text-white font-bold mb-2 text-lg">Launch Week</h3>
              <p className="text-white/70 text-sm">Coming next week - be ready</p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-white/60 text-lg mb-2">Join the movement. Embrace the darkness. Become EOS.</p>
            <p className="text-accent font-semibold text-sm">⚡ Launching Next Week ⚡</p>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 z-5 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-accent/40 rounded-full sparkle-effect"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>
    </div>
  )
}
