import Image from "next/image"
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button"
const ScrollAnimation = dynamic(() => import('@/components/scroll-animation'));
import { values, team } from '@/components/textualData.js'
import company from '@/public/founder/company.webp'

export default function AboutPage() {
  
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative bg-navy-blue text-white">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1600')] bg-cover bg-center opacity-20" />
        <div className="container relative mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">About Our Company</h1>
            <p className="mb-8 text-lg text-white/80 sm:text-xl">
              Your trusted technical service provider in Dubai since 2010, delivering excellence in every project.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <ScrollAnimation animation="fade-in-left">
              <div>
                <h2 className="mb-6 text-3xl font-bold text-navy-blue sm:text-4xl">Our Story</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Founded in 2010, our company has grown from a small civil contracting business to a comprehensive
                    technical service provider in Dubai and across the UAE. What started as a vision to deliver quality
                    services has evolved into a trusted name in the industry.
                  </p>
                  <p>
                    Over the years, we've expanded our expertise to include heavy equipment lifting and transportation,
                    birds and pest control, marble supply, and all kinds of civil and carpentry work. This
                    diversification allows us to be a one-stop solution for all technical service needs.
                  </p>
                  <p>
                    Today, we're proud to have served hundreds of clients across residential, commercial, and industrial
                    sectors, building a reputation for reliability, quality, and customer satisfaction.
                  </p>
                </div>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Button className="bg-gold hover:bg-gold/90 text-navy-blue">Our Services</Button>
                  <Button variant="outline" className="border-navy-blue text-navy-blue hover:bg-navy-blue/10">
                    Contact Us
                  </Button>
                </div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animation="fade-in-right">
              <div className="relative h-[400px] overflow-hidden rounded-xl">
                <Image
                  src={company.src}
                  alt="Company History"
                  fill
                  
                  priority={false}
                  className="object-cover"
                />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <ScrollAnimation animation="fade-in-left">
              <div className="rounded-xl bg-white p-8 shadow-sm">
                <h3 className="mb-4 text-2xl font-bold text-navy-blue">Our Vision</h3>
                <p className="text-muted-foreground">
                  To be the leading technical service provider in the UAE, recognized for excellence, innovation, and
                  customer satisfaction. We aim to set new standards in the industry by delivering comprehensive
                  solutions that exceed client expectations and contribute to the development of Dubai's infrastructure.
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animation="fade-in-right">
              <div className="rounded-xl bg-white p-8 shadow-sm">
                <h3 className="mb-4 text-2xl font-bold text-navy-blue">Our Mission</h3>
                <p className="text-muted-foreground">
                  To deliver high-quality technical services that meet the diverse needs of our clients through
                  professional expertise, innovative solutions, and unwavering commitment to excellence. We strive to
                  build lasting relationships with our clients by providing reliable, safe, and timely services that add
                  value to their projects.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <ScrollAnimation animation="fade-in-up">
              <h2 className="mb-4 text-3xl font-bold text-navy-blue sm:text-4xl">Our Values</h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                The core principles that guide our operations and relationships with clients, partners, and team
                members.
              </p>
            </ScrollAnimation>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value, index) => (
              <ScrollAnimation
                key={index}
                animation="scale-in"
                delay={
                  `delay-${((index % 6) + 1) * 100 > 500 ? 500 : ((index % 6) + 1) * 100}` as
                    | "delay-100"
                    | "delay-200"
                    | "delay-300"
                    | "delay-400"
                    | "delay-500"
                }
              >
                <div className="rounded-xl border border-border p-6">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-gold/10">
                    <img loading="lazy" className="w-7" src={value.icon.src} alt=""/>
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-navy-blue">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-navy-blue sm:text-4xl">Our Leadership</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Meet the experienced professionals who lead our company with vision and expertise.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 ">
            {team.map((member, index) => (
              <div key={index} className="overflow-hidden bg-white shadow-lg">
                <div className="aspect-square h-72 relative">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name}  priority={false} fill className=" object-contain" />
                </div>
                <div className="p-6">
                  <h3 className="mb-1 text-xl font-semibold text-navy-blue">{member.name}</h3>
                  <p className="mb-4 text-gold">{member.position}</p>
                  <p className="text-muted-foreground">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-navy-blue py-16 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Ready to Work With Us?</h2>
            <p className="mb-8 text-white/80">
              Contact our team today to discuss your project requirements and how we can help you achieve your goals.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
