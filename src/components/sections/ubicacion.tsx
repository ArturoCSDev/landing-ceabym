import React from "react";

export function Ubicacion() {
  return (
    <section id="ubicacion" className="py-20 bg-white dark:bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-12 dark:text-secondary-11 mb-4">
            <span className="text-ceabym-11 dark:text-ceabym-9">Dónde</span> encontrarnos
          </h2>
          <p className="text-lg text-secondary-11 dark:text-secondary-10">
            Estamos estratégicamente ubicados en la ciudad de Tingo María - Huánuco, con instalaciones modernas y accesibles para brindarte la mejor atención.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Google Maps iframe */}
          <div className="h-96 lg:h-auto bg-secondary-3 dark:bg-secondary-2 rounded-lg overflow-hidden shadow-md relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.2453430883795!2d-76.0046875!3d-9.2908333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91a43fac1409bdd1%3A0x69ab74c27b44ebb3!2sCEABYM!5e0!3m2!1ses-419!2spe!4v1650925230121!5m2!1ses-419!2spe" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
              title="Ubicación de CEABYM en Google Maps"
            ></iframe>
            
            {/* Fallback content in case the iframe doesn't load */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 hover:opacity-100 transition-opacity duration-300 bg-secondary-1/80 dark:bg-secondary-1/80">
              <a 
                href="https://maps.app.goo.gl/opZ1oBFBGE6D4vFy7" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-ceabym-9 text-white px-4 py-2 rounded-md shadow-md hover:bg-ceabym-10 transition-colors duration-300 pointer-events-auto"
              >
                Abrir en Google Maps
              </a>
            </div>
          </div>

          {/* Contact information */}
          <div className="flex flex-col justify-center">
            <div className="bg-secondary-1 dark:bg-secondary-2 p-8 rounded-lg shadow-md border border-secondary-4 dark:border-secondary-3">
              <h3 className="text-2xl font-semibold text-secondary-12 dark:text-secondary-11 mb-6">Información de contacto</h3>
              
              <div>
                <h4 className="text-lg font-medium text-ceabym-11 dark:text-ceabym-9 mb-3">Sede Principal</h4>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-ceabym-11 dark:text-ceabym-9 mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <div>
                      <span className="text-secondary-12 dark:text-secondary-11 block">Tingo María - Huánuco</span>
                      <span className="text-secondary-11 dark:text-secondary-10 text-sm">
                        Segundo piso de la ubicación mostrada en el mapa
                      </span>
                      <a 
                        href="https://maps.app.goo.gl/opZ1oBFBGE6D4vFy7" 
                        target="_blank"
                        rel="noopener noreferrer" 
                        className="text-ceabym-11 dark:text-ceabym-9 text-sm block mt-1 hover:underline"
                      >
                        Ver en Google Maps
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-ceabym-11 dark:text-ceabym-9 mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    <span className="text-secondary-12 dark:text-secondary-11">Contáctanos para reservar tu cita</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-ceabym-11 dark:text-ceabym-9 mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                    <a href="mailto:cecortegana@gmail.com" className="text-secondary-12 dark:text-secondary-11 hover:text-ceabym-11 dark:hover:text-ceabym-9 transition-colors">
                      cecortegana@gmail.com
                    </a>
                  </li>
                </ul>
              </div>
              
              <div className="mt-8">
                <h4 className="text-lg font-medium text-ceabym-11 dark:text-ceabym-9 mb-3">Horarios de atención</h4>
                <div className="bg-ceabym-1 dark:bg-secondary-3/30 rounded-lg p-4">
                  <ul className="space-y-3">
                    <li className="flex justify-between">
                      <span className="text-secondary-12 dark:text-secondary-11">Lunes a Viernes:</span>
                      <span className="text-ceabym-11 dark:text-ceabym-9 font-medium">7:30 AM - 1:00 PM</span>
                      <span className="text-ceabym-11 dark:text-ceabym-9 font-medium">4:00 PM - 6:30 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-secondary-12 dark:text-secondary-11">Sábados:</span>
                      <span className="text-ceabym-11 dark:text-ceabym-9 font-medium">8:00 AM - 1:00 PM</span>
                      <span className="text-ceabym-11 dark:text-ceabym-9 font-medium">4:00 PM - 6:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-secondary-12 dark:text-secondary-11">Domingos:</span>
                      <span className="text-ceabym-11 dark:text-ceabym-9 font-medium">Cerrado</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 p-4 bg-ceabym-2 dark:bg-ceabym-3/30 rounded-lg">
                <h4 className="text-lg font-medium text-ceabym-11 dark:text-ceabym-9 mb-2">¿Necesitas ayuda?</h4>
                <p className="text-secondary-12 dark:text-secondary-11 mb-4">
                  Estamos para asistirte en todo lo que necesites. No dudes en contactarnos para cualquier consulta sobre nuestros servicios.
                </p>
                <a 
                  href="#contacto" 
                  className="inline-flex items-center text-white bg-ceabym-9 hover:bg-ceabym-10 px-4 py-2 rounded-md transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                    <polyline points="10 17 15 12 10 7" />
                    <line x1="15" y1="12" x2="3" y2="12" />
                  </svg>
                  Contáctanos
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Ubicacion;
