import carpentery1 from '@/public/carpentry/carpentery.webp'
import carpentery2 from '@/public/carpentry/carpentery2.webp'
import carp3 from '@/public/carpentry/carp3.webp'
import carp4 from '@/public/carpentry/carp4.webp'
import carp5 from '@/public/carpentry/carp5.webp'
import civil1 from '@/public/civil/civil.webp'
import floor from '@/public/civil/floor.webp'
import heavy1 from '@/public/heavy/heavy.webp'
import crane from '@/public/heavy/crane.webp'
import crane2 from '@/public/heavy/crane2.webp'
import crane3 from '@/public/heavy/crane3.webp'
import fork from '@/public/heavy/fork.webp'
import fork2 from '@/public/heavy/fork2.webp'
import marbel11 from '@/public/marbel/marbel1.webp'
import marbel1 from '@/public/marbel/marbel.webp'
import marbel2 from '@/public/marbel/marbel2.webp'
import marbel3 from '@/public/marbel/marbel3.webp'
import marbel4 from '@/public/marbel/marbel4.webp'
import marbel5 from '@/public/marbel/marbel5.webp'
import marbel6 from '@/public/marbel/marbel6.webp'
import birds from '@/public/pest/birds.webp'
import pest11 from '@/public/pest/pest1.jpg'
import pest2 from '@/public/pest/pest2.webp'
import pest3 from '@/public/pest/pest3.webp'
import pest4 from '@/public/pest/pest4.webp'
import trust from '@/public/icons/trust.png'
import focus from '@/public/icons/focus.png'
import quality from '@/public/icons/quality.png'
import innovate from '@/public/icons/innovate.png'
import commit from '@/public/icons/commit.png'
import safe from '@/public/icons/safe.png'
import civil from '@/public/icons/civil.png'
import marbel from '@/public/icons/marbel.png'
import cctv from '@/public/icons/cctv.png'
import heavy from '@/public/icons/heavy.png'
import carpentery from '@/public/icons/carpentery.png'
import pest from '@/public/icons/pest.png'
import ducab from '@/public/brands/ducab.png'
import g4s from '@/public/brands/g4s.webp'
import johnson from '@/public/brands/johnson.webp'
import rta from '@/public/brands/rta.webp'
import siemens from '@/public/brands/siemens.png'
import st from '@/public/brands/st.svg'
import taj from '@/public/brands/taj.webp'
import shazia from '@/public/founder/shazia.png'
import parwaiz from '@/public/founder/parwaiz.png'
import cctv1 from '@/public/cctv/cctv1.webp'
import cctv2 from '@/public/cctv/cctv2.webp'
import cctv3 from '@/public/cctv/cctv3.webp'
import cctv4 from '@/public/cctv/cctv4.webp'

export const initialServices = [
  {
    id: 1,
    title: "Civil Contracting",
    description: "Professional civil contracting services for residential and commercial projects in Dubai.",
    icon: civil,
  },
  {
    id: 2,
    title: "Heavy Equipment",
    description: "Specialized lifting and transportation of heavy equipment with safety as our priority.",
    icon: heavy,
  },
  {
    id: 3,
    title: "Birds & Pest Control",
    description: "Effective and humane bird and pest control solutions for all types of properties.",
    icon: pest,
  },
  {
    id: 4,
    title: "Marble Supply",
    description: "Premium marble supply for construction and interior design projects with expert installation.",
    icon: marbel,
  },
  {
    id: 5,
    title: "Civil & Carpentry",
    description: "Comprehensive civil and carpentry work delivered with precision and craftsmanship.",
    icon: carpentery,
  },
  {
    id: 6,
    title: "Security Management",
    description: "Advanced security solutions including CCTV installation, surveillance, and monitoring services.",
    icon: cctv,
  },
]

export const initialClients = [
  { id: 1, name: "Ducab", logo: ducab.src },
  { id: 2, name: "G4S Global", logo: g4s.src },
  { id: 3, name: "Johnson Controls", logo: johnson.src },
  { id: 4, name: "RTA", logo: rta.src },
  { id: 5, name: "Siemens Middle East", logo: siemens.src },
  { id: 5, name: "St. Regis Hotels", logo: st.src },
  { id: 5, name: "Taj Hotels", logo: taj.src },
]

export const initialProjects = [
    {
      id: 1,
      title: "Luxury Villa Renovation",
      category: "carpentry",
      image: carpentery1.src,
    },
    {
      id: 2,
      title: "Custom Carpentry Work",
      category: "carpentry",
      image: carpentery2.src,
    },
    {
      id: 3,
      title: "Luxury Villa Renovation",
      category: "carpentry",
      image: carp3.src,
    },
    {
      id: 4,
      title: "Custom Carpentry Work",
      category: "carpentry",
      image: carp4.src,
    },
    {
      id: 5,
      title: "Luxury Villa Renovation",
      category: "carpentry",
      image: carp5.src,
    },
    {
      id: 6,
      title: "Commercial Building Construction",
      category: "civil",
      image: civil1.src,
    },
    {
      id: 7,
      title: "Commercial Building Construction",
      category: "civil",
      image: floor.src,
    },
    {
      id: 8,
      title: "Commercial Building Construction",
      category: "civil",
      image: marbel11.src,
    },
    {
      id: 9,
      title: "Heavy Equipment Transportation",
      category: "heavy",
      image: heavy1.src,
    },
    {
      id: 10,
      title: "Heavy Equipment Transportation",
      category: "heavy",
      image: crane.src,
    },
    {
      id: 11,
      title: "Heavy Equipment Transportation",
      category: "heavy",
      image: fork.src,
    },
    {
      id: 12,
      title: "Heavy Equipment Transportation",
      category: "heavy",
      image: crane2.src,
    },
    {
      id: 13,
      title: "Heavy Equipment Transportation",
      category: "heavy",
      image: fork2.src,
    },
    {
      id: 14,
      title: "Heavy Equipment Transportation",
      category: "heavy",
      image: crane3.src,
    },
    {
      id: 15,
      title: "Floor Restoration",
      category: "marble",
      image: marbel1.src,
    },
    {
      id: 16,
      title: "Marble Flooring Installation",
      category: "marble",
      image: marbel2.src,
    },
    {
      id: 17,
      title: "Marble Flooring Installation",
      category: "marble",
      image: marbel3.src,
    },
    {
      id: 18,
      title: "Floor Restoration",
      category: "marble",
      image: marbel4.src,
    },
    {
      id: 19,
      title: "Marble Flooring Installation",
      category: "marble",
      image: marbel5.src,
    },
    {
      id: 20,
      title: "Floor Restoration",
      category: "marble",
      image: marbel6.src,
    },
    {
      id: 22,
      title: "Bird & Pest Control",
      category: "pest",
      image: birds.src,
    },
    {
      id: 23,
      title: "Bird & Pest Control",
      category: "pest",
      image: pest11.src,
    },
    {
      id: 24,
      title: "Bird & Pest Control",
      category: "pest",
      image: pest2.src,
    },
    {
      id: 26,
      title: "Bird & Pest Control",
      category: "pest",
      image: pest3.src,
    },
    {
      id: 27,
      title: "Bird & Pest Control",
      category: "pest",
      image: pest4.src,
    },
]

export const categories = [
  { id: "all", name: "All Projects" },
  { id: "civil", name: "Civil Contracting" },
  { id: "heavy", name: "Heavy Equipment" },
  { id: "pest", name: "Pest Control" },
  { id: "marble", name: "Marble Supply" },
  { id: "carpentry", name: "Carpentry" },
]

export const initialFaqs = [
  {
    id: 1,
    question: "What areas in Dubai do you service?",
    answer:
      "We provide our technical services across all areas of Dubai and neighboring emirates, including Abu Dhabi, Sharjah, and Ajman.",
  },
  {
    id: 2,
    question: "Do you offer free quotations?",
    answer: "Yes, we provide free on-site inspections and detailed quotations for all our services with no obligation.",
  },
  {
    id: 3,
    question: "What is your typical project timeline?",
    answer:
      "Project timelines vary based on scope and complexity. Small projects may take a few days while larger ones can extend to several weeks. We always provide a detailed timeline before starting any work.",
  },
  {
    id: 4,
    question: "Are your services available for both residential and commercial properties?",
    answer:
      "We cater to both residential and commercial clients, from small apartments to large corporate buildings and industrial facilities.",
  },
  {
    id: 5,
    question: "Do you provide warranties for your work?",
    answer:
      "Yes, all our services come with a warranty period. The specific duration depends on the type of service provided, which will be clearly mentioned in your contract.",
  },
]

export const initialContactInfo = {
  phone: {
    primary: "+971 50 123 4567",
    secondary: "+971 4 123 4567",
  },
  email: {
    primary: "info@dubaitechtechnical.com",
    secondary: "sales@dubaitechtechnical.com",
  },
  address: "Office #1234, Al Barsha Business Tower, Sheikh Zayed Road, Dubai, UAE",
  workingHours: {
    weekdays: "Sunday - Thursday: 8:00 AM - 6:00 PM",
    weekend: "Friday - Saturday: 9:00 AM - 1:00 PM",
  },
  socialMedia: {
    facebook: "https://facebook.com/dubaitechtechnical",
    twitter: "https://twitter.com/dubaitechtechnical",
    instagram: "https://instagram.com/dubaitechtechnical",
    linkedin: "https://linkedin.com/company/dubaitechtechnical",
  },
}

export const values = [
    {
      title: "Trust",
      description: "Building lasting relationships through honesty, transparency, and reliability in every interaction.",
      icon: trust
    },
    {
      title: "Quality",
      description: "Delivering exceptional workmanship and using premium materials to exceed client expectations.",
      icon: quality
    },
    {
      title: "Safety",
      description: "Maintaining the highest safety standards to protect our team, clients, and the environment.",
      icon: safe
    },
    {
      title: "Innovation",
      description: "Embracing new technologies and methodologies to provide cutting-edge solutions.",
      icon: innovate
    },
    {
      title: "Commitment",
      description: "Dedicated to meeting deadlines and delivering projects with precision and excellence.",
      icon: commit
    },
    {
      title: "Customer Focus",
      description: "Placing client satisfaction at the center of everything we do, from initial consultation to project completion.",
      icon: focus
    },
]

export const team = [
    {
      name: "Parwaiz Qamar",
      position: "Managing director",
      bio: "Parwaiz is responsible for steering the company’s vision, making high-level strategic decisions, and ensuring overall business performance.",
      image: parwaiz
    },
    {
      name: "Shazia Alam",
      position: "Managing Partner",
      bio: "Shazia oversees the strategic direction and overall operations of a firm, balancing leadership with hands-on management.",
      image: shazia
    },
]

export const servicesData = {
  "Civil%20Contracting": {
    title: "Civil Contracting Services",
    description:
      "Professional civil contracting services for residential and commercial projects in Dubai. We handle everything from small renovations to large-scale construction projects with precision and excellence.",
    icon: civil,
    heroImage: civil1,
    features: [
      "Residential and commercial construction",
      "Building renovations and extensions",
      "Infrastructure development",
      "Project management and consultation",
      "Quality control and assurance",
      "Compliance with Dubai Municipality regulations",
    ],
    benefits: [
      "Experienced team of civil engineers and contractors",
      "Timely project completion with attention to detail",
      "Use of high-quality materials and modern techniques",
      "Comprehensive project planning and execution",
      "Transparent pricing and regular progress updates",
    ],
    gallery: [
      {
        image: floor,
        caption: "Luxury Villa Construction in Palm Jumeirah",
      },
      {
        image: civil1,
        caption: "Commercial Building Development in Business Bay",
      },
      {
        image: floor,
        caption: "Residential Complex in Dubai Marina",
      },
      {
        image: floor,
        caption: "Infrastructure Project in Dubai South",
      },
    ],
  },
  "Heavy%20Equipment": {
    title: "Heavy Equipment Services",
    description:
      "Specialized lifting and transportation of heavy equipment with safety as our priority. Our fleet of modern equipment and experienced operators ensure safe and efficient handling of your valuable assets.",
    icon: heavy,
    heroImage: crane3,
    features: [
      "Heavy machinery transportation",
      "Crane and lifting services",
      "Equipment installation and dismantling",
      "Specialized rigging solutions",
      "Load testing and certification",
      "24/7 emergency services",
    ],
    benefits: [
      "Comprehensive insurance coverage",
      "Certified operators with extensive experience",
      "Modern fleet of equipment maintained to the highest standards",
      "Custom solutions for unique lifting challenges",
      "Strict adherence to safety protocols and regulations",
    ],
    gallery: [
      {
        image: crane3,
        caption: "Heavy Machinery Transportation in Dubai Industrial City",
      },
      {
        image: fork,
        caption: "Crane Operations at Construction Site",
      },
      {
        image: heavy1,
        caption: "Equipment Installation for Manufacturing Facility",
      },
      {
        image: fork2,
        caption: "Specialized Lifting Operation in Jebel Ali",
      },
    ],
  },
  "Birds%20%26%20Pest%20Control": {
    title: "Birds & Pest Control Services",
    description:
      "Effective and humane bird and pest control solutions for all types of properties. We use environmentally friendly methods to protect your property from pests while ensuring the safety of occupants and the environment.",
    icon: pest,
    heroImage: pest11,
    features: [
      "Bird deterrent systems installation",
      "Comprehensive pest management programs",
      "Termite control and prevention",
      "Rodent control services",
      "Mosquito and fly control",
      "Regular maintenance and monitoring",
    ],
    benefits: [
      "Eco-friendly and humane control methods",
      "Customized solutions for different property types",
      "Preventive measures to avoid future infestations",
      "Discreet service with minimal disruption",
      "Compliance with health and safety regulations",
    ],
    gallery: [
      {
        image: pest2,
        caption: "Bird Deterrent System Installation on Commercial Building",
      },
      {
        image: birds,
        caption: "Pest Inspection at Residential Property",
      },
      {
        image: pest3,
        caption: "Termite Control Treatment in Progress",
      },
      {
        image: pest4,
        caption: "Mosquito Control System for Outdoor Areas",
      },
    ],
  },
  "Marble%20Supply": {
    title: "Marble Supply & Installation",
    description:
      "Premium marble supply for construction and interior design projects with expert installation. We source the finest marble from around the world and provide professional installation services to enhance the beauty of your space.",
    icon: marbel,
    heroImage: marbel1,
    features: [
      "Wide selection of imported and local marble",
      "Custom cutting and polishing",
      "Professional installation services",
      "Marble restoration and maintenance",
      "Countertops and flooring solutions",
      "Consultation on marble selection",
    ],
    benefits: [
      "Direct sourcing from quarries for premium quality",
      "Skilled craftsmen with years of experience",
      "Precision cutting and perfect installation",
      "Long-lasting beauty with proper sealing techniques",
      "Comprehensive after-sales service and maintenance",
    ],
    gallery: [
      {
        image: marbel11,
        caption: "Luxury Marble Flooring in Villa",
      },
      {
        image: marbel2,
        caption: "Custom Marble Countertop Installation",
      },
      {
        image: marbel3,
        caption: "Marble Wall Cladding in Hotel Lobby",
      },
      {
        image: marbel4,
        caption: "Marble Staircase in Luxury Residence",
      },
    ],
  },
  "Civil%20%26%20Carpentry": {
    title: "Civil & Carpentry Work",
    description:
      "Comprehensive civil and carpentry work delivered with precision and craftsmanship. Our skilled carpenters and civil workers bring your vision to life with attention to detail and quality workmanship.",
    icon: carpentery,
    heroImage: carpentery1,
    features: [
      "Custom furniture design and creation",
      "Wooden flooring installation",
      "Cabinet making and installation",
      "Structural woodwork for buildings",
      "Wood restoration and refinishing",
      "Interior fit-out services",
    ],
    benefits: [
      "Skilled craftsmen with extensive experience",
      "Use of premium quality wood and materials",
      "Custom designs to match your specific requirements",
      "Attention to detail and fine finishing",
      "Timely completion with minimal disruption",
    ],
    gallery: [
      {
        image: carpentery2,
        caption: "Custom Wooden Cabinet Installation",
      },
      {
        image: carp4,
        caption: "Wooden Flooring in Residential Apartment",
      },
      {
        image: carp3,
        caption: "Custom Built-in Wardrobe Design",
      },
      {
        image: carp5,
        caption: "Wooden Pergola Construction for Villa",
      },
    ],
  },
  "Security%20Management": {
    title: "Securiy Management",
    description:
      "Advanced security solutions including CCTV installation, surveillance systems, and monitoring services to ensure safety and peace of mind for homes and businesses.",
    icon: cctv,
    heroImage: cctv3,
    features: [
      "Advanced CCTV camera installation and configuration",
      "Real-time remote surveillance and mobile monitoring",
      "Indoor and outdoor security system setup",
      "Access control and intrusion detection integration",
      "Motion detection and night vision technology",
      "Ongoing system maintenance and support",
    ],
    benefits: [
      "Enhanced safety for residential and commercial properties",
      "Professional-grade equipment and installation",
      "C24/7 monitoring for peace of mind",
      "Customized solutions tailored to your property's needs",
      "Expert support and prompt troubleshooting services",
    ],
    gallery: [
      {
        image: cctv1,
        caption: "Custom Wooden Cabinet Installation",
      },
      {
        image: cctv2,
        caption: "Wooden Flooring in Residential Apartment",
      },
      {
        image: cctv3,
        caption: "Custom Built-in Wardrobe Design",
      },
      {
        image: cctv4,
        caption: "Wooden Pergola Construction for Villa",
      },
    ],
  },
}