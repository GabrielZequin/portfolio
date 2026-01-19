export function About() {
  return (
    <section id="sobre-mi" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-primary font-mono text-sm">01.</span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">Sobre mí</h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="grid md:grid-cols-[3fr_2fr] gap-12 items-start">
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Soy{" "}
              <span className="text-foreground font-medium">
                Técnico Universitario en Tecnologías de la Información
              </span>{" "}
              egresado de la UTN, con una fuerte orientación al desarrollo backend. Mi trabajo se centra en construir
              aplicaciones web robustas, escalables y mantenibles utilizando{" "}
              <span className="text-primary">Java con Spring Boot</span>, apoyándome en arquitecturas REST,
              microservicios y patrones de diseño modernos.
            </p>

            <p>
              Cuento con experiencia en el diseño y desarrollo de APIs, integración de sistemas, creación de CRUD
              completos y modelado de datos utilizando bases de datos SQL. También domino herramientas de control de
              versiones como <span className="text-primary">Git</span>, fundamentales para garantizar orden,
              trazabilidad y trabajo colaborativo.
            </p>

            <p>
              Me apasiona transformar ideas en soluciones reales, optimizar procesos y explorar nuevas tecnologías que
              agreguen valor. Me caracterizo por la{" "}
              <span className="text-foreground font-medium">curiosidad constante</span>, la búsqueda de buenas prácticas
              y el compromiso con un desarrollo limpio, seguro y orientado al crecimiento.
            </p>
          </div>

          {/* // Agregando tu foto real */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-primary/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative aspect-square rounded-xl bg-card border border-border overflow-hidden">
              <img
                src="/images/gabriel-foto.png"
                alt="Gabriel Zequin - Desarrollador Backend"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 border-2 border-primary rounded-xl translate-x-4 translate-y-4 -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
