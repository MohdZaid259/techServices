"use client"

import { useState } from "react"
import Image from "next/image"
import { categories, initialProjects } from "@/components/textualData.js"

type Project = {
  id: number
  title: string
  category: string
  image: string
}

type Category = {
  id: string
  name: string
}

function getLimitedProjects(
  projects: Project[],
  limitPerCategory: number = 2,
  maxTotal: number = 9
): Project[] {
  const grouped: Record<string, Project[]> = {}

  for (const project of projects) {
    if (!grouped[project.category]) {
      grouped[project.category] = []
    }
    if (grouped[project.category].length < limitPerCategory) {
      grouped[project.category].push(project)
    }
  }

  return Object.values(grouped).flat().slice(0, maxTotal)
}

export default function ProjectGallery() {
  const [activeCategory, setActiveCategory] = useState<string>("all")

  const filteredProjects: Project[] =
    activeCategory === "all"
      ? getLimitedProjects(initialProjects)
      : initialProjects.filter((project) => project.category === activeCategory)

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap justify-center gap-2">
        {categories.map((category: Category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              activeCategory === category.id
                ? "bg-navy-blue text-white"
                : "bg-slate-100 text-muted-foreground hover:bg-slate-200"
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project: Project) => (
          <div key={project.id} className="group overflow-hidden rounded-xl">
            <div className="relative aspect-[5/3] overflow-hidden">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                
                priority={false}
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute inset-0 flex items-end p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <h3 className="text-lg font-semibold text-white">{project.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
