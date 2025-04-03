import React, { useEffect, useRef } from "react";

export function Historia() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const timelineItemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Función para animar elementos cuando entran en el viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Si el elemento observado es la timeline completa
            if (entry.target === timelineRef.current) {
              // Efecto de línea bajando
              if (timelineRef.current) {
                timelineRef.current.style.opacity = "1";
                timelineRef.current.style.transform = "translateY(0)";
              }
            }
            
            // Animar cada item de timeline individualmente
            if (timelineItemsRef.current.includes(entry.target as HTMLDivElement)) {
              entry.target.classList.add("animate-in");
            }
            
            // Animar el contenido
            if (entry.target === contentRef.current) {
              if (contentRef.current) {
                contentRef.current.style.opacity = "1";
                contentRef.current.style.transform = "translateY(0)";
              }
            }
            
            // Dejar de observar después de animar
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1
      }
    );

    // Observar la timeline completa
    if (timelineRef.current) {
      timelineRef.current.style.opacity = "0";
      timelineRef.current.style.transform = "translateY(-20px)";
      timelineRef.current.style.transition = "opacity 0.6s ease, transform 0.6s ease";
      observer.observe(timelineRef.current);
    }

    // Observar cada item de la timeline
    timelineItemsRef.current.forEach((item) => {
      if (item) {
        observer.observe(item);
      }
    });

    // Observar el contenido
    if (contentRef.current) {
      contentRef.current.style.opacity = "0";
      contentRef.current.style.transform = "translateY(20px)";
      contentRef.current.style.transition = "opacity 0.6s ease 0.3s, transform 0.6s ease 0.3s";
      observer.observe(contentRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="historia" className="py-20 bg-ceabym-1 dark:bg-secondary-2 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-12 dark:text-secondary-11 mb-4">
            Nuestra <span className="text-ceabym-11 dark:text-ceabym-9">historia</span>
          </h2>
          <p className="text-lg text-secondary-11 dark:text-secondary-10 max-w-3xl mx-auto">
            Conoce la evolución de CEABYM a lo largo de los años, impulsada por la dedicación y la visión de nuestro fundador.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Timeline */}
          <div className="order-2 lg:order-1">
            <div ref={timelineRef} className="relative border-l-2 border-ceabym-6 dark:border-ceabym-5 pl-8 py-4 ml-4">
              {/* Timeline items */}
              <div 
                ref={(el) => timelineItemsRef.current[0] = el} 
                className="mb-12 relative opacity-0 translate-x-[-20px] transition-all duration-700 ease-out"
              >
                <div className="absolute w-5 h-5 bg-ceabym-9 dark:bg-ceabym-8 rounded-full -left-[1.25rem] top-1.5 border-2 border-white dark:border-secondary-2"></div>
                <h3 className="text-xl font-bold text-secondary-12 dark:text-secondary-11 mb-2">2011</h3>
                <p className="text-secondary-12 dark:text-secondary-10">
                  Fundación de CEABYM por el biólogo microbiólogo <span className="font-medium">Carlos Enrique Cortegana Vargas</span>, egresado de la Universidad Nacional de Trujillo, quien llegó a Tingo María en busca de oportunidades profesionales.
                </p>
              </div>
              
              <div 
                ref={(el) => timelineItemsRef.current[1] = el} 
                className="mb-12 relative opacity-0 translate-x-[-20px] transition-all duration-700 delay-200 ease-out"
              >
                <div className="absolute w-5 h-5 bg-ceabym-9 dark:bg-ceabym-8 rounded-full -left-[1.25rem] top-1.5 border-2 border-white dark:border-secondary-2"></div>
                <h3 className="text-xl font-bold text-secondary-12 dark:text-secondary-11 mb-2">2015</h3>
                <p className="text-secondary-12 dark:text-secondary-10">
                  Crecimiento significativo de la cartera de clientes gracias a la excelencia en el servicio y la precisión de los resultados. Ampliación del equipo con profesionales altamente capacitados.
                </p>
              </div>
              
              <div 
                ref={(el) => timelineItemsRef.current[2] = el} 
                className="mb-12 relative opacity-0 translate-x-[-20px] transition-all duration-700 delay-400 ease-out"
              >
                <div className="absolute w-5 h-5 bg-ceabym-9 dark:bg-ceabym-8 rounded-full -left-[1.25rem] top-1.5 border-2 border-white dark:border-secondary-2"></div>
                <h3 className="text-xl font-bold text-secondary-12 dark:text-secondary-11 mb-2">2019</h3>
                <p className="text-secondary-12 dark:text-secondary-10">
                  Implementación de un sistema avanzado de facturación que mejoró la eficiencia administrativa y la experiencia del paciente, reduciendo los tiempos de espera.
                </p>
              </div>
              
              <div 
                ref={(el) => timelineItemsRef.current[3] = el} 
                className="mb-12 relative opacity-0 translate-x-[-20px] transition-all duration-700 delay-600 ease-out"
              >
                <div className="absolute w-5 h-5 bg-ceabym-9 dark:bg-ceabym-8 rounded-full -left-[1.25rem] top-1.5 border-2 border-white dark:border-secondary-2"></div>
                <h3 className="text-xl font-bold text-secondary-12 dark:text-secondary-11 mb-2">2020 - 2021</h3>
                <p className="text-secondary-12 dark:text-secondary-10">
                  Apoyo crucial durante la pandemia de COVID-19 mediante la realización de pruebas diagnósticas confiables, contribuyendo a la salud pública de la comunidad en un momento crítico.
                </p>
              </div>
              
              <div 
                ref={(el) => timelineItemsRef.current[4] = el} 
                className="relative opacity-0 translate-x-[-20px] transition-all duration-700 delay-800 ease-out"
              >
                <div className="absolute w-5 h-5 bg-ceabym-9 dark:bg-ceabym-8 rounded-full -left-[1.25rem] top-1.5 border-2 border-white dark:border-secondary-2"></div>
                <h3 className="text-xl font-bold text-secondary-12 dark:text-secondary-11 mb-2">2023 - Actualidad</h3>
                <p className="text-secondary-12 dark:text-secondary-10">
                  Desarrollo de un sistema de gestión propio para optimizar los procesos internos del laboratorio, mejorando la eficiencia operativa y la calidad del servicio al paciente.
                </p>
              </div>
            </div>
          </div>
          
          {/* Text content */}
          <div ref={contentRef} className="order-1 lg:order-2">
            <div className="relative bg-white dark:bg-secondary-1 rounded-lg p-8 shadow-md border border-ceabym-3 dark:border-ceabym-3/30">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-ceabym-3 dark:bg-ceabym-3/20 rounded-full -z-10 opacity-70"></div>
              
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-ceabym-2 dark:bg-ceabym-3/50 rounded-full flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-ceabym-11 dark:text-ceabym-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-secondary-12 dark:text-secondary-11">Carlos Enrique Cortegana Vargas</h3>
                  <p className="text-ceabym-11 dark:text-ceabym-9">Fundador y Director</p>
                </div>
              </div>
              
              <p className="text-lg text-secondary-12 dark:text-secondary-11 mb-6">
                CEABYM nació de la visión de un profesional apasionado por la microbiología y comprometido con ofrecer servicios de análisis de alta calidad a la comunidad de Tingo María.
              </p>
              
              <p className="text-lg text-secondary-12 dark:text-secondary-11 mb-6">
                El Biólogo Microbiólogo Carlos Enrique Cortegana Vargas fundó este laboratorio en 2011, y desde entonces ha mantenido un equipo pequeño pero altamente capacitado de 2 a 3 profesionales que comparten su compromiso con la excelencia y la precisión.
              </p>
              
              <p className="text-lg text-secondary-12 dark:text-secondary-11 mb-6">
                A lo largo de los años, su perseverancia y dedicación han permitido que CEABYM crezca y se consolide como un referente local en análisis biológicos y microbiológicos, siempre adaptándose a las necesidades cambiantes de la comunidad.
              </p>
              
              <div className="mt-8 flex flex-wrap gap-4">
                <div className="py-3 px-5 bg-ceabym-2 dark:bg-ceabym-3/50 rounded-full text-ceabym-11 dark:text-ceabym-9 font-medium">
                  Perseverancia
                </div>
                <div className="py-3 px-5 bg-ceabym-2 dark:bg-ceabym-3/50 rounded-full text-ceabym-11 dark:text-ceabym-9 font-medium">
                  Atención personalizada
                </div>
                <div className="py-3 px-5 bg-ceabym-2 dark:bg-ceabym-3/50 rounded-full text-ceabym-11 dark:text-ceabym-9 font-medium">
                  Excelencia científica
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS personalizado para la animación de entrada */}
      <style jsx>{`
        .animate-in {
          opacity: 1 !important;
          transform: translateX(0) !important;
        }
      `}</style>
    </section>
  );
}

export default Historia;
