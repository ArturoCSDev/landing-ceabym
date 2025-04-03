import React, { useEffect, useRef } from "react";
import { Button } from "../ui/button";

export function Hero() {
  // Refs para las animaciones
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const fluidPathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    // Animación del texto (de izquierda a derecha)
    if (textRef.current) {
      textRef.current.style.opacity = "0";
      textRef.current.style.transform = "translateX(-50px)";
      
      setTimeout(() => {
        if (textRef.current) {
          textRef.current.style.transition = "opacity 1s ease, transform 1s ease";
          textRef.current.style.opacity = "1";
          textRef.current.style.transform = "translateX(0)";
        }
      }, 300);
    }

    // Animación de la imagen (de derecha a izquierda)
    if (imageRef.current) {
      imageRef.current.style.opacity = "0";
      imageRef.current.style.transform = "translateX(50px)";
      
      setTimeout(() => {
        if (imageRef.current) {
          imageRef.current.style.transition = "opacity 1s ease, transform 1s ease";
          imageRef.current.style.opacity = "1";
          imageRef.current.style.transform = "translateX(0)";
        }
      }, 600);
    }

    // Animación del fluido
    if (fluidPathRef.current) {
      const length = fluidPathRef.current.getTotalLength();
      
      fluidPathRef.current.style.strokeDasharray = `${length}`;
      fluidPathRef.current.style.strokeDashoffset = `${length}`;
      
      setTimeout(() => {
        if (fluidPathRef.current) {
          fluidPathRef.current.style.transition = "stroke-dashoffset 3s ease";
          fluidPathRef.current.style.strokeDashoffset = "0";
        }
      }, 300);
    }
  }, []);

  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-ceabym-1 to-white dark:from-background dark:to-secondary-1 z-0"></div>
      
      {/* Fluid animation background */}
      <div className="absolute inset-0 z-1 overflow-hidden">
        <svg className="w-full h-full" viewBox="0 0 1440 800" preserveAspectRatio="none">
          {/* Fluido principal (simulando sangre u otro fluido biológico) - Movido más arriba */}
          <path
            ref={fluidPathRef}
            d="M0,250 C200,230 400,320 600,250 C800,180 1000,230 1200,200 C1300,190 1400,170 1440,150 L1440,800 L0,800 Z"
            fill="none"
            stroke="url(#fluidGradient)"
            strokeWidth="6"
            strokeLinecap="round"
          />
          
          {/* Partículas/gotas distribuidas por todo el viewport, no solo cerca del fluido */}
          {/* Fila superior */}
          <circle className="animate-pulse" cx="120" cy="100" r="3" fill="#73d4a4" fillOpacity="0.5">
            <animate attributeName="cy" values="100;110;100;90;100" dur="7s" repeatCount="indefinite" />
          </circle>
          <circle className="animate-pulse" cx="320" cy="150" r="4" fill="#0abf80" fillOpacity="0.4">
            <animate attributeName="cy" values="150;160;150;140;150" dur="9s" repeatCount="indefinite" />
          </circle>
          <circle className="animate-pulse" cx="520" cy="120" r="3.5" fill="#11c181" fillOpacity="0.5">
            <animate attributeName="cy" values="120;130;120;110;120" dur="8s" repeatCount="indefinite" />
          </circle>
          <circle className="animate-pulse" cx="720" cy="80" r="3" fill="#00b375" fillOpacity="0.4">
            <animate attributeName="cy" values="80;90;80;70;80" dur="10s" repeatCount="indefinite" />
          </circle>
          <circle className="animate-pulse" cx="920" cy="130" r="4" fill="#73d4a4" fillOpacity="0.5">
            <animate attributeName="cy" values="130;140;130;120;130" dur="6s" repeatCount="indefinite" />
          </circle>
          <circle className="animate-pulse" cx="1120" cy="90" r="3.5" fill="#0abf80" fillOpacity="0.4">
            <animate attributeName="cy" values="90;100;90;80;90" dur="8s" repeatCount="indefinite" />
          </circle>
          <circle className="animate-pulse" cx="1320" cy="110" r="3" fill="#11c181" fillOpacity="0.5">
            <animate attributeName="cy" values="110;120;110;100;110" dur="7s" repeatCount="indefinite" />
          </circle>
          
          {/* Fila media (por encima del fluido) */}
          <circle className="animate-pulse" cx="200" cy="200" r="4" fill="#11c181" fillOpacity="0.6">
            <animate attributeName="cy" values="200;210;200;190;200" dur="6s" repeatCount="indefinite" />
          </circle>
          <circle className="animate-pulse" cx="450" cy="180" r="3.5" fill="#00834e" fillOpacity="0.5">
            <animate attributeName="cy" values="180;190;180;170;180" dur="9s" repeatCount="indefinite" />
          </circle>
          <circle className="animate-pulse" cx="700" cy="220" r="4.5" fill="#73d4a4" fillOpacity="0.6">
            <animate attributeName="cy" values="220;230;220;210;220" dur="7s" repeatCount="indefinite" />
          </circle>
          <circle className="animate-pulse" cx="950" cy="190" r="3" fill="#0abf80" fillOpacity="0.5">
            <animate attributeName="cy" values="190;200;190;180;190" dur="8s" repeatCount="indefinite" />
          </circle>
          <circle className="animate-pulse" cx="1200" cy="210" r="4" fill="#11c181" fillOpacity="0.6">
            <animate attributeName="cy" values="210;220;210;200;210" dur="6.5s" repeatCount="indefinite" />
          </circle>
          
          {/* Partículas a lo largo del fluido */}
          <circle className="animate-pulse" cx="100" cy="270" r="3" fill="#11c181" fillOpacity="0.7">
            <animate attributeName="cy" values="270;260;270;280;270" dur="7s" repeatCount="indefinite" />
          </circle>
          <circle className="animate-pulse" cx="300" cy="270" r="3.5" fill="#0abf80" fillOpacity="0.6">
            <animate attributeName="cy" values="270;260;270;280;270" dur="8s" repeatCount="indefinite" />
          </circle>
          <circle className="animate-pulse" cx="500" cy="265" r="4" fill="#73d4a4" fillOpacity="0.7">
            <animate attributeName="cy" values="265;255;265;275;265" dur="6.5s" repeatCount="indefinite" />
          </circle>
          <circle className="animate-pulse" cx="700" cy="230" r="5" fill="#0abf80" fillOpacity="0.6">
            <animate attributeName="cy" values="230;220;230;240;230" dur="7s" repeatCount="indefinite" />
          </circle>
          <circle className="animate-pulse" cx="900" cy="215" r="4" fill="#00834e" fillOpacity="0.65">
            <animate attributeName="cy" values="215;205;215;225;215" dur="6s" repeatCount="indefinite" />
          </circle>
          <circle className="animate-pulse" cx="1100" cy="200" r="3.5" fill="#11c181" fillOpacity="0.7">
            <animate attributeName="cy" values="200;190;200;210;200" dur="7s" repeatCount="indefinite" />
          </circle>
          <circle className="animate-pulse" cx="1300" cy="190" r="4" fill="#0abf80" fillOpacity="0.65">
            <animate attributeName="cy" values="190;180;190;200;190" dur="6.5s" repeatCount="indefinite" />
          </circle>
          
          {/* Fila inferior (debajo del área principal) */}
          <circle className="animate-pulse" cx="150" cy="500" r="4" fill="#11c181" fillOpacity="0.5">
            <animate attributeName="cy" values="500;510;500;490;500" dur="8s" repeatCount="indefinite" />
          </circle>
          <circle className="animate-pulse" cx="400" cy="550" r="3" fill="#73d4a4" fillOpacity="0.4">
            <animate attributeName="cy" values="550;560;550;540;550" dur="9s" repeatCount="indefinite" />
          </circle>
          <circle className="animate-pulse" cx="650" cy="520" r="3.5" fill="#0abf80" fillOpacity="0.5">
            <animate attributeName="cy" values="520;530;520;510;520" dur="7s" repeatCount="indefinite" />
          </circle>
          <circle className="animate-pulse" cx="900" cy="540" r="4" fill="#00834e" fillOpacity="0.4">
            <animate attributeName="cy" values="540;550;540;530;540" dur="10s" repeatCount="indefinite" />
          </circle>
          <circle className="animate-pulse" cx="1150" cy="510" r="3" fill="#11c181" fillOpacity="0.5">
            <animate attributeName="cy" values="510;520;510;500;510" dur="8s" repeatCount="indefinite" />
          </circle>
          <circle className="animate-pulse" cx="1300" cy="530" r="3.5" fill="#73d4a4" fillOpacity="0.4">
            <animate attributeName="cy" values="530;540;530;520;530" dur="7s" repeatCount="indefinite" />
          </circle>

          {/* Gradiente para el fluido */}
          <defs>
            <linearGradient id="fluidGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0abf80" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#11c181" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#73d4a4" stopOpacity="0.6" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-8 lg:px-12 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text content - animates from left to right */}
          <div ref={textRef} className="flex flex-col">
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

          {/* Image/visual content - animates from right to left */}
          <div ref={imageRef} className="hidden lg:flex justify-center">
            <div className="relative w-full max-w-md aspect-square">
              {/* Volvemos a la imagen del microscopio */}
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

export default Hero;
