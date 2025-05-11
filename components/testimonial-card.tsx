import Image from "next/image"

import { Card, CardContent } from "@/components/ui/card"

interface TestimonialCardProps {
  testimonial: {
    name: string
    company: string
    text: string
    image: string
  }
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card className="bg-white/10 border-white/20">
      <CardContent className="p-6">
        <div className="mb-4 flex items-center gap-4">
          <div className="relative h-12 w-12 overflow-hidden rounded-full">
            <Image src={testimonial.image || "/placeholder.svg"} alt={testimonial.name} fill className="object-cover" />
          </div>
          <div>
            <h3 className="font-semibold text-white">{testimonial.name}</h3>
            <p className="text-sm text-white/80">{testimonial.company}</p>
          </div>
        </div>
        <p className="italic text-white/90">"{testimonial.text}"</p>
      </CardContent>
    </Card>
  )
}
