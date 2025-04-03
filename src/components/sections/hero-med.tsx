import React from "react";
import { Button } from "../ui/button";

export function HeroMed() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-16">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-ceabym-3/70 to-ceabym-1/50 dark:from-ceabym-2/30 dark:to-background/95 z-0"></div>
      
      {/* Background image placeholder */}
      <div className="absolute inset-0 z-[-1]">
        <div className="w-full h-full bg-secondary-2 dark:bg-secondary-1 flex items-center justify-center overflow-hidden">
          {/* This is a placeholder - replace with actual image when available */}
          <div className="relative w-full h-full opacity-40 dark:opacity-20">
            {/* Medical/lab themed background */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <pattern id="labs" width="20" height="20" patternUnits="userSpaceOnUse" patternTransform="scale(0.7) rotate(0)">
                  <g stroke="currentColor" strokeWidth="0.4" fill="none" className="text-ceabym-9/30">
                    {/* Test tubes */}
                    <path d="M4 0v12c0 1 0.5 2 2 2s2-1 2-2V0M12 0v12c0 1 0.5 2 2 2s2-1 2-2V0" />
                    {/* Circles (cells/molecules) */}
                    <circle cx="6" cy="16" r="1.5" />
                    <circle cx="14" cy="16" r="1.5" />
                    <circle cx="10" cy="10" r="2" />
                    <circle cx="18" cy="6" r="1" />
                    <circle cx="2" cy="8" r="1" />
                  </g>
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#labs)" />
            </svg>
            
            {/* Circular gradients for depth */}
            <div className="absolute top-1/3 left-1/3 w-1/2 h-1/2 rounded-full bg-ceabym-6/20 dark:bg-ceabym-7/10 blur-3xl"></div>
            <div className="absolute bottom-1/3 right-1/3 w-1/3 h-1/3 rounded-full bg-ceabym-8/20 dark:bg-ceabym-9/10 blur-3xl"></div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-8 lg:px-12 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col">
            <span className="text-ceabym-11 dark:text-ceabym-9 font-medium mb-4">LABORATORIO DE ANÁLISIS BIOLÓGICOS Y MICROBIOLÓGICOS</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-12 dark:text-secondary-12 mb-6">
              Precisión y excelencia en <span className="text-ceabym-11 dark:text-ceabym-9">cada análisis</span>
            </h1>
            <p className="text-lg text-secondary-12 dark:text-secondary-11 max-w-xl mb-8">
              En CEABYM nos dedicamos a brindar resultados confiables con la más alta calidad y tecnología de vanguardia, priorizando siempre tu bienestar y atención personalizada.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contacto">
                <Button size="lg">Agendar cita</Button>
              </a>
              <a href="#analisis">
                <Button variant="outline" size="lg">Ver servicios</Button>
              </a>
            </div>
          </div>

          <div className="hidden lg:flex justify-center">
            <div className="relative w-full max-w-md aspect-square">
              {/* Placeholder for an image of laboratory equipment or a microscope */}
              <div className="w-full h-full rounded-2xl bg-white/80 dark:bg-secondary-3/50 shadow-xl backdrop-blur-sm flex items-center justify-center border border-ceabym-4 dark:border-ceabym-3">
                <div className="text-ceabym-9 w-1/2 h-1/2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 21h14M6 18h2M10 16v-3.5A2.5 2.5 0 0 1 12.5 10h3l-1.5-1.5 1.5-1.5h-3A2.5 2.5 0 0 1 10 4.5l.543-3M16 18h2M7 14v2M17 14v2M12 8v12" />
                  </svg>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-ceabym-3 dark:bg-ceabym-3/30 rounded-lg -z-10"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-ceabym-4 dark:bg-ceabym-4/30 rounded-lg -z-10"></div>
              <div className="absolute top-1/4 -right-8 w-16 h-16 bg-ceabym-5 dark:bg-ceabym-5/30 rounded-full -z-10"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating elements for visual interest - DNA-like structures */}
      <div className="absolute top-1/4 right-1/5 z-0 opacity-30 dark:opacity-20">
        <svg width="120" height="80" viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 40 C10 20, 110 20, 110 40 C110 60, 10 60, 10 40" stroke="currentColor" strokeWidth="2" className="text-ceabym-11" />
          <path d="M10 10 L10 70" stroke="currentColor" strokeWidth="2" className="text-ceabym-11" />
          <path d="M110 10 L110 70" stroke="currentColor" strokeWidth="2" className="text-ceabym-11" />
          <circle cx="10" cy="10" r="4" fill="currentColor" className="text-ceabym-9" />
          <circle cx="10" cy="70" r="4" fill="currentColor" className="text-ceabym-9" />
          <circle cx="110" cy="10" r="4" fill="currentColor" className="text-ceabym-9" />
          <circle cx="110" cy="70" r="4" fill="currentColor" className="text-ceabym-9" />
        </svg>
      </div>

      <div className="absolute bottom-1/4 left-1/6 z-0 opacity-30 dark:opacity-20">
        <svg width="80" height="60" viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 30 C10 15, 70 15, 70 30 C70 45, 10 45, 10 30" stroke="currentColor" strokeWidth="2" className="text-ceabym-11" />
          <path d="M10 5 L10 55" stroke="currentColor" strokeWidth="2" className="text-ceabym-11" />
          <path d="M70 5 L70 55" stroke="currentColor" strokeWidth="2" className="text-ceabym-11" />
          <circle cx="10" cy="5" r="3" fill="currentColor" className="text-ceabym-9" />
          <circle cx="10" cy="55" r="3" fill="currentColor" className="text-ceabym-9" />
          <circle cx="70" cy="5" r="3" fill="currentColor" className="text-ceabym-9" />
          <circle cx="70" cy="55" r="3" fill="currentColor" className="text-ceabym-9" />
        </svg>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
        <a href="#analisis" className="text-ceabym-11 dark:text-ceabym-9" aria-label="Scroll down">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
}

export default HeroMed;
