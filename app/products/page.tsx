"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Navbar from "@/components/navbar"
import ScrollAnimation from "@/components/scroll-animation"
import OrderForm from "@/components/order-form"
import { Star, ShoppingCart, Zap, Shield, Truck } from "lucide-react"

export default function ProductsPage() {
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedSize, setSelectedSize] = useState("")
  const [showOrderForm, setShowOrderForm] = useState(false)

  const productImages = [
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-09-07%20at%2005.02.25_feb1a599.jpg-DOv79ucZ5FryjazohWuicKq5AstGiX.jpeg", // Science museum photo
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-09-07%20at%2005.02.26_05857608.jpg-OPfXDQobxJoMMzfEhP7DCJ2JMJT4Sk.jpeg", // Close-up pants detail
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0333.jpg-teAbf54huGsOIUaSJDPkghLaKV0I7f.jpeg", // Bookshelf display
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0334.jpg-NJ2s9muRkjC9uz0U76OAeZwG1OwxOQ.jpeg", // Another bookshelf angle
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-09-07%20at%2005.02.25_ec26de4a.jpg-LU6RlMzYh9Jsd7COKsUoPmPg4bF5jA.jpeg", // Arcade photo
  ]

  const sizes = ["S", "M", "L", "XL", "XXL"]
  const price = 299

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="pt-20">
        {/* Product Hero Section */}
        <ScrollAnimation>
          <section className="py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Product Images Gallery */}
                <div className="space-y-4">
                  {/* Main Image */}
                  <div className="aspect-square overflow-hidden rounded-2xl bg-card border border-border group animate-slide-down">
                    <Image
                      src={productImages[selectedImage] || "/placeholder.svg"}
                      alt="EOS Premium Pants"
                      width={600}
                      height={600}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Thumbnail Images */}
                  <div className="grid grid-cols-5 gap-2">
                    {productImages.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImage(index)}
                        className={`aspect-square rounded-lg overflow-hidden border-2 transition-all duration-300 animate-slide-right ${
                          selectedImage === index
                            ? "border-primary shadow-lg scale-105"
                            : "border-border hover:border-primary/50"
                        }`}
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <Image
                          src={image || "/placeholder.svg"}
                          alt={`Product view ${index + 1}`}
                          width={120}
                          height={120}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Product Details */}
                <div className="space-y-8">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="bg-primary/10 text-primary">
                        Premium Collection
                      </Badge>
                    </div>

                    <h1 className="text-4xl font-bold text-foreground">EOS Premium Streetwear Pants</h1>

                    <p className="text-3xl font-bold text-primary">${price} EGP</p>
                  </div>

                  {/* Product Description */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-foreground">Description</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Experience ultimate comfort and style with our signature EOS pants. Crafted from premium materials
                      with a modern fit that adapts to your lifestyle. Perfect for streetwear enthusiasts who demand
                      both quality and style.
                    </p>
                  </div>

                  {/* Size Selection */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-foreground">Size</h3>
                    <div className="grid grid-cols-5 gap-2">
                      {sizes.map((size) => (
                        <button
                          key={size}
                          onClick={() => setSelectedSize(size)}
                          className={`py-3 px-4 rounded-lg border-2 font-semibold transition-all duration-300 ${
                            selectedSize === size
                              ? "border-primary bg-primary text-primary-foreground shadow-lg"
                              : "border-border hover:border-primary/50 text-foreground"
                          }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border">
                      <Zap className="h-5 w-5 text-primary" />
                      <span className="text-sm font-medium">Quick Dry</span>
                    </div>
                    <div className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border">
                      <Shield className="h-5 w-5 text-secondary" />
                      <span className="text-sm font-medium">Durable</span>
                    </div>
                    <div className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border">
                      <Truck className="h-5 w-5 text-accent" />
                      <span className="text-sm font-medium">Free Ship</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-4">
                    <Button
                      size="lg"
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                      onClick={() => setShowOrderForm(true)}
                      disabled={!selectedSize}
                    >
                      <ShoppingCart className="h-5 w-5 mr-2" />
                      Order Now - ${price} EGP
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </ScrollAnimation>

        {/* Product Features Section */}
        <ScrollAnimation>
          <section className="py-20 bg-card/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-foreground mb-4">Why Choose EOS?</h2>
                <p className="text-xl text-muted-foreground">Premium quality meets modern design</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="bg-card border-border hover:border-primary transition-all duration-300 group">
                  <CardContent className="p-8 text-center">
                    <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                      <Star className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Premium Materials</h3>
                    <p className="text-muted-foreground">High-quality fabrics that last longer and feel better</p>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border hover:border-primary transition-all duration-300 group">
                  <CardContent className="p-8 text-center">
                    <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary/20 transition-colors">
                      <Shield className="h-8 w-8 text-secondary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Quality Guarantee</h3>
                    <p className="text-muted-foreground">30-day return policy with full satisfaction guarantee</p>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border hover:border-primary transition-all duration-300 group">
                  <CardContent className="p-8 text-center">
                    <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                      <Truck className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Fast Delivery</h3>
                    <p className="text-muted-foreground">Free shipping with express delivery options</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        </ScrollAnimation>
      </div>

      {/* Order Form Modal */}
      {showOrderForm && (
        <OrderForm
          product={{
            name: "EOS Premium Streetwear Pants",
            price: price,
            size: selectedSize,
            image: productImages[selectedImage],
          }}
          onClose={() => setShowOrderForm(false)}
        />
      )}
    </div>
  )
}
