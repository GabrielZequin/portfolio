"use client"

import { ExternalLink, Github, ChevronLeft, ChevronRight, X, Maximize2 } from "lucide-react"
import Link from "next/link"
import { useState, useEffect, useCallback } from "react"

const projects = [
  {
    title: "Sistema de Gestión de Facturas - Amiun",
    description:
      "Sistema web en producción para la concesionaria Amiun (Santa Fe). Automatiza la lectura de correos IMAP, descarga y extracción de datos de facturas PDF, gestión de estados/vencimientos y reportes. Incluye roles ADMIN/PDV, envío de facturas por correo e historial de acciones.",
    tags: ["Java 17", "Spring Boot", "Spring Security", "MySQL", "Thymeleaf", "Bootstrap", "Docker", "AWS"],
    github: "https://github.com/GabrielZequin/Sistema-de-gestion-de-facturas-Amiun",
    images: [
      "/images/amiun-facturas.png",
      "/images/amiun-reportes.png",
      "/images/amiun-usuarios.png",
      "/images/amiun-login.png",
      "/images/amiun-cuenta.png",
    ],
    featured: true,
  },
  {
    title: "Sistema de Facturación",
    description:
      "API REST construida con Java y Spring Boot, diseñada bajo principios de arquitectura limpia. Implementa CRUD completos de clientes, productos y facturación, con persistencia mediante Spring Data JPA y base de datos SQL.",
    tags: ["Java", "Spring Boot", "JPA", "SQL", "REST API"],
    github: "https://github.com/GabrielZequin/ProyectoFacturacion",
    images: ["/invoice-management-system-dark-dashboard.jpg"],
  },
  {
    title: "Centro Asistencial",
    description:
      "Sistema web desarrollado con Spring Boot y Thymeleaf, basado en el patrón MVC, que permite administrar familias, recetas y datos clínicos. Integra procesos CRUD, validación de entrada y persistencia en SQL.",
    tags: ["Spring Boot", "Thymeleaf", "MVC", "SQL", "Bootstrap"],
    github: "https://github.com/Tatidl/ZequinMarzoratiFloresdelLlano",
    images: ["/medical-center-management-system-healthcare-dashbo.jpg"],
  },
  {
    title: "Clínica Veterinaria",
    description:
      "API REST que administra mascotas, turnos, historial médico y veterinarios mediante CRUD completos. Utiliza mapeo de relaciones (@OneToMany, @ManyToOne) y validación con Bean Validation.",
    tags: ["Java", "Spring Boot", "Hibernate", "REST API", "Bean Validation"],
    github: "https://github.com/GabrielZequin/ClinicaVeterinaria",
    images: ["/veterinary-clinic-pet-management-system-dashboard.jpg"],
  },
]

function ImageLightbox({
  images,
  currentIndex,
  isOpen,
  onClose,
  onPrevious,
  onNext,
  onSelectIndex,
  title,
}: {
  images: string[]
  currentIndex: number
  isOpen: boolean
  onClose: () => void
  onPrevious: () => void
  onNext: () => void
  onSelectIndex: (index: number) => void
  title: string
}) {
  // Manejar teclas de navegación
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return
      if (e.key === "Escape") onClose()
      if (e.key === "ArrowLeft") onPrevious()
      if (e.key === "ArrowRight") onNext()
    },
    [isOpen, onClose, onPrevious, onNext],
  )

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown)
    if (isOpen) {
      document.body.style.overflow = "hidden"
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = "unset"
    }
  }, [handleKeyDown, isOpen])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center"
      onClick={onClose}
    >
      {/* Botón cerrar */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-muted-foreground hover:text-foreground p-2 rounded-full bg-card/50 hover:bg-card transition-colors z-50"
        aria-label="Cerrar"
      >
        <X size={24} />
      </button>

      {/* Contenedor de imagen */}
      <div
        className="relative w-full h-full flex items-center justify-center p-4 md:p-12"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botones de navegación */}
        {images.length > 1 && (
          <>
            <button
              onClick={onPrevious}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 bg-card/80 hover:bg-card text-foreground p-3 rounded-full transition-colors z-20"
              aria-label="Imagen anterior"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={onNext}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 bg-card/80 hover:bg-card text-foreground p-3 rounded-full transition-colors z-20"
              aria-label="Imagen siguiente"
            >
              <ChevronRight size={24} />
            </button>
          </>
        )}

        {/* Imagen */}
        <img
          src={images[currentIndex] || "/placeholder.svg"}
          alt={`${title} - imagen ${currentIndex + 1}`}
          className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
        />

        {/* Indicadores y contador */}
        {images.length > 1 && (
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
            <span className="text-muted-foreground text-sm font-mono bg-card/80 px-3 py-1 rounded-full">
              {currentIndex + 1} / {images.length}
            </span>
            <div className="flex gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => onSelectIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    index === currentIndex ? "bg-primary scale-125" : "bg-foreground/40 hover:bg-foreground/60"
                  }`}
                  aria-label={`Ir a imagen ${index + 1}`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

function ImageCarousel({ images, title }: { images: string[]; title: string }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  const openLightbox = () => {
    setLightboxOpen(true)
  }

  if (images.length === 1) {
    return (
      <>
        <div className="relative w-full h-full min-h-[220px] cursor-pointer group/img" onClick={openLightbox}>
          <img
            src={images[0] || "/placeholder.svg"}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/30 transition-colors flex items-center justify-center">
            <Maximize2 className="text-white opacity-0 group-hover/img:opacity-100 transition-opacity" size={28} />
          </div>
        </div>
        <ImageLightbox
          images={images}
          currentIndex={currentIndex}
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
          onPrevious={goToPrevious}
          onNext={goToNext}
          onSelectIndex={setCurrentIndex}
          title={title}
        />
      </>
    )
  }

  return (
    <>
      <div className="relative w-full h-full min-h-[220px]">
        {/* Imagen clickeable para abrir lightbox */}
        <div className="w-full h-full cursor-pointer group/img" onClick={openLightbox}>
          <img
            src={images[currentIndex] || "/placeholder.svg"}
            alt={`${title} - imagen ${currentIndex + 1}`}
            className="w-full h-full object-cover transition-all duration-300"
          />
          <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/30 transition-colors flex items-center justify-center pointer-events-none">
            <Maximize2 className="text-white opacity-0 group-hover/img:opacity-100 transition-opacity" size={28} />
          </div>
        </div>

        {/* Navigation buttons */}
        <button
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            goToPrevious()
          }}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background text-foreground p-1.5 rounded-full transition-colors z-20"
          aria-label="Imagen anterior"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            goToNext()
          }}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background text-foreground p-1.5 rounded-full transition-colors z-20"
          aria-label="Imagen siguiente"
        >
          <ChevronRight size={18} />
        </button>

        {/* Indicators */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                setCurrentIndex(index)
              }}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? "bg-primary" : "bg-foreground/40"
              }`}
              aria-label={`Ir a imagen ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <ImageLightbox
        images={images}
        currentIndex={currentIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onPrevious={goToPrevious}
        onNext={goToNext}
        onSelectIndex={setCurrentIndex}
        title={title}
      />
    </>
  )
}

export function Projects() {
  return (
    <section id="proyectos" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-primary font-mono text-sm">03.</span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">Proyectos</h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="grid gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className={`group bg-card border rounded-xl overflow-hidden transition-all duration-300 ${
                project.featured ? "border-primary/50 ring-1 ring-primary/20" : "border-border hover:border-primary/50"
              }`}
            >
              {/* // Badge para proyecto destacado */}
              {project.featured && (
                <div className="bg-primary/10 border-b border-primary/20 px-6 py-2">
                  <span className="text-primary font-mono text-xs font-medium">Proyecto Real en Produccion</span>
                </div>
              )}

              <div className="grid md:grid-cols-[1fr_1.5fr] gap-0">
                {/* Project Image Carousel */}
                <div className="relative overflow-hidden">
                  <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-300 z-10 pointer-events-none" />
                  <ImageCarousel images={project.images} title={project.title} />
                </div>

                {/* Project Content */}
                <div className="p-6 flex flex-col justify-center">
                  {!project.featured && <span className="text-primary font-mono text-xs mb-2">Proyecto Destacado</span>}
                  <h3 className="text-xl font-bold text-foreground mb-3">{project.title}</h3>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.description}</p>

                  <ul className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <li key={tag} className="text-xs font-mono text-muted-foreground bg-muted px-3 py-1 rounded-full">
                        {tag}
                      </li>
                    ))}
                  </ul>

                  <div className="flex gap-4">
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="Ver código en GitHub"
                    >
                      <Github size={20} />
                    </Link>
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="Ver proyecto"
                    >
                      <ExternalLink size={20} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
