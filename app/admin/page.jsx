"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Pencil, Trash, Plus, Save, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog"
import { initialClients, initialContactInfo, categories, initialFaqs, initialProjects, initialServices} from '@/components/textualData.js'
import { toast } from "sonner"

export default function AdminDashboard() {
  const [services, setServices] = useState(initialServices)
  const [clients, setClients] = useState(initialClients)
  const [projects, setProjects] = useState(initialProjects)
  const [faqs, setFaqs] = useState(initialFaqs)
  const [contactInfo, setContactInfo] = useState(initialContactInfo)

  // Dialog states
  const [serviceDialog, setServiceDialog] = useState({ open: false, data: null })
  const [clientDialog, setClientDialog] = useState({ open: false, data: null })
  const [projectDialog, setProjectDialog] = useState({ open: false, data: null })
  const [faqDialog, setFaqDialog] = useState({ open: false, data: null })

  // Form data states
  const [serviceForm, setServiceForm] = useState({ title: "", description: "", icon: "" })
  const [clientForm, setClientForm] = useState({ name: "", logo: "" })
  const [projectForm, setProjectForm] = useState({ title: "", category: "", image: "" })
  const [faqForm, setFaqForm] = useState({ question: "", answer: "" })


  // Services handlers
  const handleEditService = (service) => {
    setServiceForm({
      title: service.title,
      description: service.description,
      icon: service.icon,
    })
    setServiceDialog({ open: true, data: service })
  }

  const handleAddService = () => {
    setServiceForm({ title: "", description: "", icon: "/placeholder.svg?height=40&width=40" })
    setServiceDialog({ open: true, data: null })
  }

  const handleDeleteService = (id) => {
    setServices(services.filter((service) => service.id !== id))
    toast('Service deleted!')
  }

  const handleSubmitService = (e) => {
    e.preventDefault()

    if (serviceDialog.data) {
      setServices(
        services.map((service) => (service.id === serviceDialog.data.id ? { ...service, ...serviceForm } : service)),
      )
      toast('Service updated!')
    } else {
      const newId = Math.max(0, ...services.map((s) => s.id)) + 1
      setServices([...services, { id: newId, ...serviceForm }])
      toast('Service added!')
    }

    setServiceDialog({ open: false, data: null })
  }

  // Clients handlers
  const handleEditClient = (client) => {
    setClientForm({
      name: client.name,
      logo: client.logo,
    })
    setClientDialog({ open: true, data: client })
  }

  const handleAddClient = () => {
    setClientForm({ name: "", logo: "/placeholder.svg?height=80&width=160" })
    setClientDialog({ open: true, data: null })
  }

  const handleDeleteClient = (id) => {
    setClients(clients.filter((client) => client.id !== id))
    toast('Client deleted!')
  }

  const handleSubmitClient = (e) => {
    e.preventDefault()

    if (clientDialog.data) {
      setClients(clients.map((client) => (client.id === clientDialog.data.id ? { ...client, ...clientForm } : client)))
      toast('Client updated!')
    } else {
      const newId = Math.max(0, ...clients.map((c) => c.id)) + 1
      setClients([...clients, { id: newId, ...clientForm }])
      toast('Client added!')
    }

    setClientDialog({ open: false, data: null })
  }

  // Projects handlers
  const handleEditProject = (project) => {
    setProjectForm({
      title: project.title,
      category: project.category,
      image: project.image,
    })
    setProjectDialog({ open: true, data: project })
  }

  const handleAddProject = () => {
    setProjectForm({ title: "", category: "", image: "/placeholder.svg?height=400&width=600" })
    setProjectDialog({ open: true, data: null })
  }

  const handleDeleteProject = (id) => {
    setProjects(projects.filter((project) => project.id !== id))
    toast('Project deleted!')
  }

  const handleSubmitProject = (e) => {
    e.preventDefault()

    if (projectDialog.data) {
      setProjects(
        projects.map((project) => (project.id === projectDialog.data.id ? { ...project, ...projectForm } : project)),
      )
      toast('Project updated!')
    } else {
      const newId = Math.max(0, ...projects.map((p) => p.id)) + 1
      setProjects([...projects, { id: newId, ...projectForm }])
      toast('Project added!')
    }

    setProjectDialog({ open: false, data: null })
  }

  // FAQs handlers
  const handleEditFaq = (faq) => {
    setFaqForm({
      question: faq.question,
      answer: faq.answer,
    })
    setFaqDialog({ open: true, data: faq })
  }

  const handleAddFaq = () => {
    setFaqForm({ question: "", answer: "" })
    setFaqDialog({ open: true, data: null })
  }

  const handleDeleteFaq = (id) => {
    setFaqs(faqs.filter((faq) => faq.id !== id))
    toast('FAQ deleted!')
  }

  const handleSubmitFaq = (e) => {
    e.preventDefault()

    if (faqDialog.data) {
      setFaqs(faqs.map((faq) => (faq.id === faqDialog.data.id ? { ...faq, ...faqForm } : faq)))
      toast('FAQ updated!')
    } else {
      const newId = Math.max(0, ...faqs.map((f) => f.id)) + 1
      setFaqs([...faqs, { id: newId, ...faqForm }])
      toast('FAQ added!')
    }

    setFaqDialog({ open: false, data: null })
  }

  // Contact info handlers
  const handleContactChange = (section, field, value) => {
    setContactInfo((prev) => ({
      ...prev,
      [section]: typeof prev[section] === "object" ? { ...prev[section], [field]: value } : value,
    }))
  }

  const handleSaveContact = () => {
    toast('Contact information updated!')
  }

  return (
    <div className="min-h-screen bg-slate-50 p-4">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between rounded-lg bg-white p-4 shadow-sm">
          <div className="flex items-center">
            <span className="text-xl font-bold text-navy-blue">AL</span>
            <span className="text-xl font-bold text-gold">HAYA</span>
            <span className="text-sm font-medium text-muted-foreground">Admin</span>
          </div>
          <Button variant="outline" size="sm" asChild>
            <Link href="/">
              <LogOut className="mr-2 h-4 w-4" />
              Back to Website
            </Link>
          </Button>
        </div>

        <h1 className="mb-6 text-2xl font-bold text-navy-blue">Website Content Management</h1>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {/* Services Section */}
          <AccordionItem value="services" className="rounded-lg border bg-white px-6">
            <AccordionTrigger className="py-4 text-lg font-medium">Services</AccordionTrigger>
            <AccordionContent className="pb-6 pt-2">
              <div className="mb-4 flex justify-between">
                <p className="text-muted-foreground">Manage the services your company offers.</p>
                <Button size="sm" onClick={handleAddService}>
                  <Plus className="mr-2 h-4 w-4" /> Add Service
                </Button>
              </div>

              <div className="space-y-4">
                {services.map((service) => (
                  <div key={service.id} className="flex items-start justify-between rounded-md border p-4">
                    <div className="flex-1">
                      <h3 className="font-medium">{service.title}</h3>
                      <p className="text-sm text-muted-foreground">{service.description}</p>
                    </div>
                    <div className="ml-4 flex space-x-2">
                      <Button variant="ghost" size="icon" onClick={() => handleEditService(service)}>
                        <Pencil className="h-4 w-4" />
                        <span className="sr-only">Edit</span>
                      </Button>
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Button variant="ghost" size="icon" className="text-destructive">
                            <Trash className="h-4 w-4" />
                            <span className="sr-only">Delete</span>
                          </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                            <AlertDialogDescription>
                              This will permanently delete the service "{service.title}".
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction onClick={() => handleDeleteService(service.id)}>
                              Delete
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </div>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Clients Section */}
          <AccordionItem value="clients" className="rounded-lg border bg-white px-6">
            <AccordionTrigger className="py-4 text-lg font-medium">Trusted Clients</AccordionTrigger>
            <AccordionContent className="pb-6 pt-2">
              <div className="mb-4 flex justify-between">
                <p className="text-muted-foreground">Manage your trusted clients list.</p>
                <Button size="sm" onClick={handleAddClient}>
                  <Plus className="mr-2 h-4 w-4" /> Add Client
                </Button>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                {clients.map((client) => (
                  <div key={client.id} className="rounded-md border p-4">
                    <div className="mb-3 flex h-16 items-center justify-center">
                      <Image
                        src={client.logo || "/placeholder.svg"}
                        alt={client.name}
                        width={120}
                        height={60}
                        className="max-h-12 w-auto object-contain"
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">{client.name}</span>
                      <div className="flex space-x-1">
                        <Button variant="ghost" size="icon" onClick={() => handleEditClient(client)}>
                          <Pencil className="h-4 w-4" />
                          <span className="sr-only">Edit</span>
                        </Button>
                        <AlertDialog>
                          <AlertDialogTrigger asChild>
                            <Button variant="ghost" size="icon" className="text-destructive">
                              <Trash className="h-4 w-4" />
                              <span className="sr-only">Delete</span>
                            </Button>
                          </AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                              <AlertDialogDescription>
                                This will permanently delete the client "{client.name}".
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>Cancel</AlertDialogCancel>
                              <AlertDialogAction onClick={() => handleDeleteClient(client.id)}>
                                Delete
                              </AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Project Gallery Section */}
          <AccordionItem value="gallery" className="rounded-lg border bg-white px-6">
            <AccordionTrigger className="py-4 text-lg font-medium">Project Gallery</AccordionTrigger>
            <AccordionContent className="pb-6 pt-2">
              <div className="mb-4 flex justify-between">
                <p className="text-muted-foreground">Manage your project gallery.</p>
                <Button size="sm" onClick={handleAddProject}>
                  <Plus className="mr-2 h-4 w-4" /> Add Project
                </Button>
              </div>

              <div className="grid gap-4 sm:grid-cols-3 md:grid-cols-4 ">
                {projects.map((project) => (
                  <div key={project.id} className="w-36 overflow-hidden rounded-md border">
                    <div className="relative ">
                      <img loading="lazy" className="object-cover w-14 aspect-video" src={project.image} alt="" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-100" />
                      <div className="absolute bottom-0 left-0 right-0 p-3">
                        <h3 className="text-sm font-semibold text-white">{project.title}</h3>
                        <p className="text-xs text-white/80">
                          {categories.find((c) => c.id === project.category)?.name || project.category}
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-end space-x-2 p-2">
                      <Button variant="ghost" size="sm" onClick={() => handleEditProject(project)}>
                        <Pencil className="mr-2 h-4 w-4" />
                        Edit
                      </Button>
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Button variant="ghost" size="sm" className="text-destructive">
                            <Trash className="mr-2 h-4 w-4" />
                            Delete
                          </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                            <AlertDialogDescription>This will permanently delete this project.</AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction onClick={() => handleDeleteProject(project.id)}>
                              Delete
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </div>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* FAQs Section */}
          <AccordionItem value="faqs" className="rounded-lg border bg-white px-6">
            <AccordionTrigger className="py-4 text-lg font-medium">FAQs</AccordionTrigger>
            <AccordionContent className="pb-6 pt-2">
              <div className="mb-4 flex justify-between">
                <p className="text-muted-foreground">Manage frequently asked questions.</p>
                <Button size="sm" onClick={handleAddFaq}>
                  <Plus className="mr-2 h-4 w-4" /> Add FAQ
                </Button>
              </div>

              <div className="space-y-4">
                {faqs.map((faq) => (
                  <div key={faq.id} className="rounded-md border p-4">
                    <div className="mb-2 flex items-center justify-between">
                      <h3 className="font-medium">{faq.question}</h3>
                      <div className="flex space-x-2">
                        <Button variant="ghost" size="icon" onClick={() => handleEditFaq(faq)}>
                          <Pencil className="h-4 w-4" />
                          <span className="sr-only">Edit</span>
                        </Button>
                        <AlertDialog>
                          <AlertDialogTrigger asChild>
                            <Button variant="ghost" size="icon" className="text-destructive">
                              <Trash className="h-4 w-4" />
                              <span className="sr-only">Delete</span>
                            </Button>
                          </AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                              <AlertDialogDescription>This will permanently delete this FAQ.</AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>Cancel</AlertDialogCancel>
                              <AlertDialogAction onClick={() => handleDeleteFaq(faq.id)}>Delete</AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Contact Information Section */}
          <AccordionItem value="contact" className="rounded-lg border bg-white px-6">
            <AccordionTrigger className="py-4 text-lg font-medium">Contact Information</AccordionTrigger>
            <AccordionContent className="pb-6 pt-2">
              <div className="mb-4">
                <p className="text-muted-foreground">Update your company's contact details.</p>
              </div>

              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="font-medium">Phone Numbers</h3>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="primary-phone">Primary Phone</Label>
                      <Input
                        id="primary-phone"
                        value={contactInfo.phone.primary}
                        onChange={(e) => handleContactChange("phone", "primary", e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="secondary-phone">Secondary Phone</Label>
                      <Input
                        id="secondary-phone"
                        value={contactInfo.phone.secondary}
                        onChange={(e) => handleContactChange("phone", "secondary", e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-medium">Email Addresses</h3>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="primary-email">Primary Email</Label>
                      <Input
                        id="primary-email"
                        type="email"
                        value={contactInfo.email.primary}
                        onChange={(e) => handleContactChange("email", "primary", e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="secondary-email">Secondary Email</Label>
                      <Input
                        id="secondary-email"
                        type="email"
                        value={contactInfo.email.secondary}
                        onChange={(e) => handleContactChange("email", "secondary", e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-medium">Office Address</h3>
                  <div className="space-y-2">
                    <Textarea
                      id="address"
                      value={contactInfo.address}
                      onChange={(e) => handleContactChange("address", "", e.target.value)}
                      rows={2}
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-medium">Working Hours</h3>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="weekdays">Weekdays</Label>
                      <Input
                        id="weekdays"
                        value={contactInfo.workingHours.weekdays}
                        onChange={(e) => handleContactChange("workingHours", "weekdays", e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="weekend">Weekend</Label>
                      <Input
                        id="weekend"
                        value={contactInfo.workingHours.weekend}
                        onChange={(e) => handleContactChange("workingHours", "weekend", e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-medium">Social Media</h3>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="facebook">Facebook</Label>
                      <Input
                        id="facebook"
                        value={contactInfo.socialMedia.facebook}
                        onChange={(e) => handleContactChange("socialMedia", "facebook", e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="twitter">Twitter</Label>
                      <Input
                        id="twitter"
                        value={contactInfo.socialMedia.twitter}
                        onChange={(e) => handleContactChange("socialMedia", "twitter", e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="instagram">Instagram</Label>
                      <Input
                        id="instagram"
                        value={contactInfo.socialMedia.instagram}
                        onChange={(e) => handleContactChange("socialMedia", "instagram", e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="linkedin">LinkedIn</Label>
                      <Input
                        id="linkedin"
                        value={contactInfo.socialMedia.linkedin}
                        onChange={(e) => handleContactChange("socialMedia", "linkedin", e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                <Button onClick={handleSaveContact}>
                  <Save className="mr-2 h-4 w-4" />
                  Save Contact Information
                </Button>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      {/* Service Dialog */}
      <Dialog open={serviceDialog.open} onOpenChange={(open) => setServiceDialog({ ...serviceDialog, open })}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{serviceDialog.data ? "Edit Service" : "Add New Service"}</DialogTitle>
            <DialogDescription>
              {serviceDialog.data ? "Update the details of this service." : "Add a new service to your website."}
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmitService}>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="title">Service Title</Label>
                <Input
                  id="title"
                  value={serviceForm.title}
                  onChange={(e) => setServiceForm({ ...serviceForm, title: e.target.value })}
                  placeholder="e.g. Civil Contracting"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={serviceForm.description}
                  onChange={(e) => setServiceForm({ ...serviceForm, description: e.target.value })}
                  placeholder="Describe the service..."
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="icon">Icon URL</Label>
                <Input
                  id="icon"
                  value={serviceForm.icon}
                  onChange={(e) => setServiceForm({ ...serviceForm, icon: e.target.value })}
                  placeholder="/path/to/icon.svg"
                  required
                />
                <p className="text-xs text-muted-foreground">
                  For now, use placeholder images. In a real system, you would upload icons here.
                </p>
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">{serviceDialog.data ? "Update Service" : "Add Service"}</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* Client Dialog */}
      <Dialog open={clientDialog.open} onOpenChange={(open) => setClientDialog({ ...clientDialog, open })}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{clientDialog.data ? "Edit Client" : "Add New Client"}</DialogTitle>
            <DialogDescription>
              {clientDialog.data
                ? "Update the details of this client."
                : "Add a new client to your trusted clients list."}
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmitClient}>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Client Name</Label>
                <Input
                  id="name"
                  value={clientForm.name}
                  onChange={(e) => setClientForm({ ...clientForm, name: e.target.value })}
                  placeholder="e.g. Dubai Properties"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="logo">Logo URL</Label>
                <Input
                  id="logo"
                  value={clientForm.logo}
                  onChange={(e) => setClientForm({ ...clientForm, logo: e.target.value })}
                  placeholder="/path/to/logo.png"
                  required
                />
                <p className="text-xs text-muted-foreground">
                  For now, use placeholder images. In a real system, you would upload logos here.
                </p>
              </div>
              {clientForm.logo && (
                <div className="mt-2 flex justify-center rounded-md border p-4">
                  <Image
                    src={clientForm.logo || "/placeholder.svg"}
                    alt="Logo preview"
                    width={160}
                    height={80}
                    className="max-h-16 w-auto object-contain"
                  />
                </div>
              )}
            </div>
            <DialogFooter>
              <Button type="submit">{clientDialog.data ? "Update Client" : "Add Client"}</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* Project Dialog */}
      <Dialog open={projectDialog.open} onOpenChange={(open) => setProjectDialog({ ...projectDialog, open })}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{projectDialog.data ? "Edit Project" : "Add New Project"}</DialogTitle>
            <DialogDescription>
              {projectDialog.data ? "Update the details of this project." : "Add a new project to your gallery."}
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmitProject}>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="title">Project Title</Label>
                <Input
                  id="title"
                  value={projectForm.title}
                  onChange={(e) => setProjectForm({ ...projectForm, title: e.target.value })}
                  placeholder="e.g. Luxury Villa Renovation"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="category">Category</Label>
                <Select
                  value={projectForm.category}
                  onValueChange={(value) => setProjectForm({ ...projectForm, category: value })}
                  required
                >
                  <SelectTrigger id="category">
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category.id} value={category.id}>
                        {category.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="image">Image URL</Label>
                <Input
                  id="image"
                  value={projectForm.image}
                  onChange={(e) => setProjectForm({ ...projectForm, image: e.target.value })}
                  placeholder="/path/to/image.jpg"
                  required
                />
                <p className="text-xs text-muted-foreground">
                  For now, use placeholder images. In a real system, you would upload project images here.
                </p>
              </div>
              {projectForm.image && (
                <div className="mt-2 overflow-hidden rounded-md border">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={projectForm.image || "/placeholder.svg"}
                      alt="Project preview"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              )}
            </div>
            <DialogFooter>
              <Button type="submit">{projectDialog.data ? "Update Project" : "Add Project"}</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* FAQ Dialog */}
      <Dialog open={faqDialog.open} onOpenChange={(open) => setFaqDialog({ ...faqDialog, open })}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{faqDialog.data ? "Edit FAQ" : "Add New FAQ"}</DialogTitle>
            <DialogDescription>
              {faqDialog.data
                ? "Update this frequently asked question."
                : "Add a new frequently asked question to your website."}
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmitFaq}>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="question">Question</Label>
                <Input
                  id="question"
                  value={faqForm.question}
                  onChange={(e) => setFaqForm({ ...faqForm, question: e.target.value })}
                  placeholder="e.g. What areas in Dubai do you service?"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="answer">Answer</Label>
                <Textarea
                  id="answer"
                  value={faqForm.answer}
                  onChange={(e) => setFaqForm({ ...faqForm, answer: e.target.value })}
                  placeholder="Provide a clear and concise answer..."
                  rows={5}
                  required
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">{faqDialog.data ? "Update FAQ" : "Add FAQ"}</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}
