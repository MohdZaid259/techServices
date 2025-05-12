'use client'

import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { useRouter } from "next/navigation"

interface ServiceCardProps {
  service: {
    title: string
    description: string
    icon: any
  }
}

const serviceStyles: any = {
  'Civil Contracting': {
    border: 'border-b-red-500',
  },
  'Heavy Equipment': {
    border: 'border-b-blue-500',
  },
  'Birds & Pest Control': {
    border: 'border-b-yellow-500',
  },
  'Marble Supply': {
    border: 'border-b-purple-500',
  },
  'Civil & Carpentry': {
    border: 'border-b-green-500',
  },
};

export default function ServiceCard({ service }: ServiceCardProps) {
  const router = useRouter()

  return (
    <Card onClick={()=>router.push(`/services/${service.title}`)} className={`overflow-hidden transition-all border-b-4 
    ${serviceStyles[service.title]?.border || 'border-b-pink-400'} hover:shadow-xl`}>
      <CardContent className="p-6">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gold/10">
          <Image
            src={service.icon || "/placeholder.svg"}
            alt={service.title}
            width={40}
            
            priority={false}
            height={40}
            className="h-8 w-8"
          />
        </div>
        <h3 className="mb-2 text-xl font-semibold text-navy-blue">{service.title}</h3>
        <p className="text-muted-foreground">{service.description}</p>
      </CardContent>
      <CardFooter className="border-t p-0">
        <Link
          href="#"
          className="flex w-full items-center justify-between p-4 text-sm font-medium text-navy-blue transition-colors hover:bg-slate-100"
        >
          Learn More
          <ChevronRight className="h-4 w-4" />
        </Link>
      </CardFooter>
    </Card>
  )
}
