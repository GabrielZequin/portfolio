import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-6">
          <span className="text-primary font-mono text-sm tracking-wider">{"// Desarrollador Backend"}</span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance">Gabriel Zequin</h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed text-pretty">
          Construyo aplicaciones web <span className="text-primary">robustas</span>,{" "}
          <span className="text-primary">escalables</span> y <span className="text-primary">mantenibles</span>{" "}
          utilizando Java con Spring Boot.
        </p>

        <div className="flex items-center justify-center gap-6">
          <Link
            href="https://github.com/GabrielZequin"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-card border border-border hover:border-primary hover:text-primary transition-all duration-300 group"
            aria-label="GitHub"
          >
            <Github size={22} className="group-hover:scale-110 transition-transform" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/gabriel-zequin/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-card border border-border hover:border-primary hover:text-primary transition-all duration-300 group"
            aria-label="LinkedIn"
          >
            <Linkedin size={22} className="group-hover:scale-110 transition-transform" />
          </Link>
          <Link
            href="mailto:gabrielzequininfo@gmail.com"
            className="p-3 rounded-full bg-card border border-border hover:border-primary hover:text-primary transition-all duration-300 group"
            aria-label="Email"
          >
            <Mail size={22} className="group-hover:scale-110 transition-transform" />
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block">
          <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  )
}
