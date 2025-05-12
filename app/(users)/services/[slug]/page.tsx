import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import ScrollAnimation from "@/components/scroll-animation"
import {servicesData} from '@/components/textualData.js'

export default async function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const { slug } = await  params
  const service = servicesData[slug as keyof typeof servicesData]

  if (!service) {
    return (
      <div className="container mx-auto flex min-h-[60vh] flex-col items-center justify-center px-4 py-16">
        <h1 className="mb-4 text-2xl font-bold">Service Not Found</h1>
        <p className="mb-8 text-muted-foreground">The service you're looking for doesn't exist or has been removed.</p>
        <Button asChild>
          <Link href="/">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>
      </div>
    )
  }

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative bg-navy-blue text-white">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1600')] bg-cover bg-center opacity-20" />
        <div className="container relative mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <Link
              href="/#services"
              className="mb-6 inline-flex items-center text-sm font-medium text-white/80 hover:text-white"
            >
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back to Services
            </Link>
            <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">{service.title}</h1>
            <p className="text-lg text-white/80 sm:text-xl">{service.description}</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <ScrollAnimation animation="fade-in-left">
              <div>
                <h2 className="mb-6 text-3xl font-bold text-navy-blue">Key Features</h2>
                <div className="space-y-4">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-gold" />
                      <p className="text-muted-foreground">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animation="fade-in-right">
              <div className="relative aspect-video overflow-hidden rounded-xl">
                <Image
                  src={service.gallery[0].image || "/placeholder.svg"}
                  alt={service.gallery[0].caption}
                  fill
                  
                  priority={false}
                  className="object-cover"
                />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>      

      {/* Gallery Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation animation="fade-in-up">
            <h2 className="mb-12 text-center text-3xl font-bold text-navy-blue">Our Work</h2>
          </ScrollAnimation>
          <div className="grid gap-6 sm:grid-cols-3">
            {service.gallery.map((item, index) => (
              <ScrollAnimation
                key={index}
                animation="fade-in-up"
                delay={`delay-${((index % 4) + 1) * 100}` as "delay-100" | "delay-200" | "delay-300" | "delay-400"}
              >
                <div className="group overflow-hidden rounded-xl">
                  <div className="relative aspect-[5/3] overflow-hidden">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.caption}
                      fill
                      
                      priority={false}
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="absolute inset-0 flex items-end p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <p className="text-white">{item.caption}</p>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-navy-blue py-16 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Ready to Get Started?</h2>
            <p className="text-white/80">
              Contact our team today to discuss your {service.title.toLowerCase()} requirements and how we can help you
              achieve your goals.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
