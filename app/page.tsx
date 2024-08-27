import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, MapPin, Phone, Mail } from "lucide-react"
import Banner from "../public/images/banner.png" 

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="relative w-full h-[60vh]">
        <Image
          src={Banner}
          alt="Cleaning service banner"
          layout="fill"
          objectFit="cover"
          className="brightness-50"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">SparkleClean Services</h1>
          <p className="text-xl md:text-2xl mb-8">Professional Cleaning for Your Home and Office</p>
          <Button size="lg" className="text-lg">
            Book Now
          </Button>
        </div>
      </header>

      <main className="flex-grow">
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Our Trusted Partners</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[1, 2, 3, 4].map((partner) => (
                <div key={partner} className="flex items-center justify-center">
                  <Image
                    src={`/placeholder.svg?height=100&width=200&text=Partner+${partner}`}
                    alt={`Partner ${partner}`}
                    width={200}
                    height={100}
                    className="max-w-full h-auto"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">What Our Customers Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Alice Johnson",
                  comment: "SparkleClean transformed my home! Their attention to detail is impressive.",
                },
                {
                  name: "Bob Smith",
                  comment: "Reliable and professional. I've been using their services for years.",
                },
                {
                  name: "Carol Davis",
                  comment: "The team is always punctual and thorough. Highly recommended!",
                },
              ].map((testimonial, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="mb-4">"{testimonial.comment}"</p>
                    <p className="font-semibold">{testimonial.name}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <MapPin className="w-12 h-12 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Address</h3>
                <p className="text-center">123 Clean Street, Sparkle City, SC 12345</p>
              </div>
              <div className="flex flex-col items-center">
                <Phone className="w-12 h-12 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Phone</h3>
                <p>(123) 456-7890</p>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="w-12 h-12 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p>info@sparkleclean.com</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 SparkleClean Services. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}