import Image from "next/image"
import dynamic from 'next/dynamic';
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
const ServiceCard = dynamic(() => import('@/components/service-card'));
const ProjectGallery = dynamic(() => import('@/components/project-gallery'));
const ScrollAnimation = dynamic(() => import('@/components/scroll-animation'));
import { initialServices as services, initialClients as clients, initialFaqs as faqs } from '@/components/textualData.js'
import reliability from '@/public/icons/reliability.png'
import safety from '@/public/icons/safety.png'
import dollar from '@/public/icons/dollar.png'
import professional from '@/public/icons/professional.png'
import timer from '@/public/icons/timer.png'
import customer from '@/public/icons/customer.png'
import Form from '@/components/ContactForm'
import { values, team } from '@/components/textualData.js'
import company from '@/public/founder/company.webp'
import Link from "next/link"

export default function Home() {

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative text-white h-screen flex items-center">
        <div className="absolute inset-0 bg-cover bg-no-repeat bg-center" style={{
          backgroundImage: "url('/utils/building1.jpg')",
          backgroundColor: "rgba(0, 0, 0, 0.1)",
          backgroundBlendMode: "overlay",
          
        }}/>
        <div className="container relative mx-auto px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <div className="max-w-3xl">
            <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              One-Stop Technical Service Provider in UAE
            </h1>
            <p className="mb-8 text-lg text-white/80 sm:text-xl">
              Delivering excellence in civil contracting, heavy equipment, pest control, marble supply, and carpentry
              services.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href='#services'><Button className="bg-gold hover:bg-gold/90 text-white">Explore Services</Button></Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-16 left-1/2 md:block hidden transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center text-white/80">
            <span className="text-sm mb-2">Scroll Down</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-chevron-down"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <ScrollAnimation animation="fade-in-up">
              <h2 className="mb-4 text-3xl font-bold text-navy-blue sm:text-4xl">Our Services</h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                Comprehensive technical solutions tailored to meet your specific needs with uncompromising quality and
                reliability.
              </p>
            </ScrollAnimation>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <ScrollAnimation
                key={index}
                animation="fade-in-up"
                delay={
                  `delay-${((index % 5) + 1) * 100}` as
                    | "delay-100"
                    | "delay-200"
                    | "delay-300"
                    | "delay-400"
                    | "delay-500"
                }
              >
                <ServiceCard service={service} />
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <ScrollAnimation animation="fade-in-up">
              <h2 className="mb-4 text-3xl font-bold text-navy-blue sm:text-4xl">Why Choose Us</h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                We pride ourselves on delivering exceptional service that exceeds expectations.
              </p>
            </ScrollAnimation>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <ScrollAnimation animation="fade-in-left">
              <div className="rounded-xl border-2 border-blue-500 bg-white p-8 shadow-sm">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <img loading="lazy" className="w-6 mt-1 flex-shrink-0" src={reliability.src} alt="logo" />
                    <div>
                      <h3 className="text-xl font-semibold text-navy-blue">Reliability</h3>
                      <p className="text-muted-foreground">
                        Count on us to deliver consistent, high-quality results on every project, every time.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <img loading="lazy" className="w-6 mt-1 flex-shrink-0" src={safety.src} alt="logo" />
                    <div>
                      <h3 className="text-xl font-semibold text-navy-blue">Safety First</h3>
                      <p className="text-muted-foreground">
                        We maintain the highest safety standards in all our operations to protect our clients and team.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <img loading="lazy" className="w-6 mt-1 flex-shrink-0" src={professional.src} alt="logo" />
                    <div>
                      <h3 className="text-xl font-semibold text-navy-blue">Experienced Team</h3>
                      <p className="text-muted-foreground">
                        Our professionals bring years of industry expertise to deliver superior technical services.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animation="fade-in-right">
              <div className="rounded-xl border-2 border-green-500 bg-white p-8 shadow-sm">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <img loading="lazy" className="w-6 mt-1 flex-shrink-0" src={timer.src} alt="logo" />
                    <div>
                      <h3 className="text-xl font-semibold text-navy-blue">Timely Delivery</h3>
                      <p className="text-muted-foreground">
                        We understand the importance of deadlines and consistently complete projects on schedule.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <img loading="lazy" className="w-6 mt-1 flex-shrink-0" src={dollar.src} alt="logo" />
                    <div>
                      <h3 className="text-xl font-semibold text-navy-blue">Competitive Pricing</h3>
                      <p className="text-muted-foreground">
                        Quality services at fair prices with transparent quotations and no hidden costs.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <img loading="lazy" className="w-6 mt-1 flex-shrink-0" src={customer.src} alt="logo" />
                    <div>
                      <h3 className="text-xl font-semibold text-navy-blue">Customer Satisfaction</h3>
                      <p className="text-muted-foreground">
                        Our client-centered approach ensures we exceed expectations on every project.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="bg-navy-blue py-16 text-white overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">Our Trusted Clients</h2>
            <p className="mx-auto max-w-2xl text-gray-400">
              We're proud to work with leading companies across Dubai and the UAE.
            </p>
          </div>

          <div className="relative mx-[20px] md:mx-[52px]">
            <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-navy-blue to-transparent"></div>
            <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-navy-blue to-transparent"></div>

            <div className="client-marquee overflow-hidden">
              <div className="flex animate-marquee space-x-0 md:space-x-16" style={{ animationDuration: '10s' }}>
                {[...clients, ...clients, ...clients].map((client, index) => (
                  <div key={index} className="flex h-32 w-40 flex-col gap-5 flex-shrink-0 items-center justify-center">
                    <Image
                      src={client.logo || "/placeholder.svg"}
                      alt={client.name}
                      width={160}
                      height={80}
                      priority={false}
                      className={`max-h-16 w-auto object-contain ${client.name=='St. Regis Hotels'?'invert':''}`}
                    />
                    <span className="text-gray-400">{client.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section id="projects" className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <ScrollAnimation animation="fade-in-up">
              <h2 className="mb-4 text-3xl font-bold text-navy-blue sm:text-4xl">Our Projects</h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                Explore our portfolio of successful projects across Dubai and the UAE.
              </p>
            </ScrollAnimation>
          </div>
          <ScrollAnimation animation="fade-in-up">
            <ProjectGallery />
          </ScrollAnimation>
        </div>
      </section>

      <section className="relative bg-navy-blue text-white mt-4">
        <div className="absolute inset-0 bg-[url('/utils/infra.webp')] bg-cover bg-center opacity-20" />
        <div className="container relative mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">Rukn Al Haya</h1>
            <p className="mb-2 text-lg text-white/80 sm:text-xl">
              Your trusted technical service provider in Dubai, delivering excellence in every project.
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
                    Our company has grown from a small civil contracting business to a comprehensive
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
                  <Button className="bg-gold hover:bg-gold/90 text-white">Our Services</Button>
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
      <section className="bg-slate-50 py-8 md:py-12">
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
      <section className="py-10 md:py-16">
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
      <section className="bg-slate-50 py-8 md:py-12">
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

      {/* FAQ Section */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <ScrollAnimation animation="fade-in-up">
              <h2 className="mb-4 text-3xl font-bold text-navy-blue sm:text-4xl">Frequently Asked Questions</h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                Find answers to common questions about our services.
              </p>
            </ScrollAnimation>
          </div>
          <ScrollAnimation animation="fade-in-up">
            <div className="mx-auto max-w-3xl">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left text-lg font-medium text-navy-blue">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24">
        <div className="container mx-auto px-2 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-navy-blue sm:text-4xl">Contact Us</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Get in touch with our team for inquiries, quotations, or to discuss your project needs.
            </p>
          </div>
          <div className="grid gap-8 grid-cols-1 lg:grid-cols-2">
            <div className="rounded-xl bg-white p-2 shadow-sm">
              <h3 className="mb-6 text-2xl font-semibold text-navy-blue">Get a Quotation</h3>
              <Form/>
            </div>
            <div className="space-y-8">
              <div className="rounded-xl bg-white p-2 shadow-sm">
                <h3 className="mb-6 text-2xl font-semibold text-navy-blue">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Phone className="mt-1 h-5 w-5 flex-shrink-0 text-gold" />
                    <div>
                      <h4 className="font-medium text-navy-blue">Phone</h4>
                      <p className="text-muted-foreground text-sm">+971 52 709 3747</p>
                      <p className="text-muted-foreground text-sm">+971 55 440 7515</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="mt-1 h-5 w-5 flex-shrink-0 text-gold" />
                    <div>
                      <h4 className="font-medium text-navy-blue">Email</h4>
                      <p className="text-muted-foreground text-sm">info@alhaya.tech </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-gold" />
                    <div>
                      <h4 className="font-medium text-navy-blue">Location</h4>
                      <p className="text-muted-foreground text-sm">Office no. 101 B6, Naseer Ahmad Saeed Tower, Al Garhoud, Dubai, UAE</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="mt-1 h-5 w-5 flex-shrink-0 text-gold" />
                    <div>
                      <h4 className="font-medium text-navy-blue">Working Hours</h4>
                      <p className="text-muted-foreground text-sm">Monday - Saturday: 8:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-80 overflow-hidden rounded-xl bg-slate-200">
                <iframe loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24659.317408298088!2d55.321686152186416!3d25.240170232843543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5d0c1a67a9dd%3A0xe1619a4dd393d10f!2sAl%20Garhoud%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sin!4v1746899242467!5m2!1sen!2sin" width="650" height="350" referrerPolicy="no-referrer-when-downgrade" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-navy-blue py-16 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
            <div>
              <h2 className="text-2xl font-bold sm:text-3xl">Ready to start your project?</h2>
              <p className="mt-2 text-white/80">Contact us today for a free consultation and quote.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
