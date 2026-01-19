"use client"

import { useEffect, useState } from "react"
import { Send } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)

  // Detecta si venimos de un envío exitoso
  useEffect(() => {
    if (typeof window === "undefined") return
    const params = new URLSearchParams(window.location.search)
    if (params.get("sent") === "1") {
      setSubmitted(true)

      // Limpia el query param sin recargar (opcional)
      const url = new URL(window.location.href)
      url.searchParams.delete("sent")
      window.history.replaceState({}, "", url.toString())

      // Limpia campos
      setFormData({ name: "", email: "", message: "" })
    }
  }, [])

  return (
    <section id="contacto" className="py-24 px-6 bg-card/50">
      <div className="max-w-2xl mx-auto text-center">
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="flex-1 h-px bg-border max-w-20" />
          <span className="text-primary font-mono text-sm">04.</span>
          <div className="flex-1 h-px bg-border max-w-20" />
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          ¿Trabajamos juntos?
        </h2>

        <p className="text-muted-foreground mb-12 max-w-lg mx-auto">
          Estoy abierto a nuevas oportunidades y proyectos interesantes. Si tienes una idea o simplemente quieres
          saludar, ¡escríbeme!
        </p>

        {submitted ? (
          <p className="text-primary font-medium text-lg">
            ✅ ¡Mensaje enviado correctamente! Te responderé pronto.
          </p>
        ) : (
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            action="/?sent=1#contacto"
            className="space-y-6 text-left"
          >
            {/* Netlify requiere este hidden */}
            <input type="hidden" name="form-name" value="contact" />

            {/* Redirección post-submit para mostrar el mensaje */}
            <input type="hidden" name="redirect" value="/?sent=1#contacto" />

            {/* Honeypot anti-bot */}
            <p className="hidden">
              <label>
                Don’t fill this out: <input name="bot-field" />
              </label>
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Nombre</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors text-foreground"
                  placeholder="Tu nombre"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Correo electrónico</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors text-foreground"
                  placeholder="tu@email.com"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Mensaje</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={5}
                className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors text-foreground resize-none"
                placeholder="Cuéntame sobre tu proyecto..."
                required
              />
            </div>

            <button
              type="submit"
              className="w-full md:w-auto px-8 py-4 bg-primary text-primary-foreground font-medium rounded-xl hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 group"
            >
              Enviar mensaje
              <Send size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
