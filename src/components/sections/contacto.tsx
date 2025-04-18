import React from "react";
import { Button } from "../ui/button";

export function Contacto() {
  return (
    <section id="contacto" className="py-20 bg-ceabym-1 dark:bg-secondary-2">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-12 dark:text-secondary-11 mb-4">
            <span className="text-ceabym-11 dark:text-ceabym-9">Contáctanos</span> hoy mismo
          </h2>
          <p className="text-lg text-secondary-11 dark:text-secondary-10">
            Estamos a tu disposición para responder cualquier consulta y brindar la información que necesites.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {/* Contact information - 2 columns */}
          <div className="lg:col-span-2 bg-white dark:bg-secondary-1 rounded-lg shadow-md p-6 lg:p-8">
            <h3 className="text-xl font-semibold text-secondary-12 dark:text-secondary-11 mb-6">Información de contacto</h3>
            
            <ul className="space-y-6">
              <li className="flex items-start">
                <div className="w-10 h-10 rounded-lg bg-ceabym-2 dark:bg-ceabym-3 flex items-center justify-center mr-4 text-ceabym-11 dark:text-ceabym-9">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-secondary-10 dark:text-secondary-9 mb-1">Teléfono</h4>
                  <p className="text-secondary-12 dark:text-secondary-11">(123) 456-7890</p>
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="w-10 h-10 rounded-lg bg-ceabym-2 dark:bg-ceabym-3 flex items-center justify-center mr-4 text-ceabym-11 dark:text-ceabym-9">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-secondary-10 dark:text-secondary-9 mb-1">Email</h4>
                  <p className="text-secondary-12 dark:text-secondary-11">info@ceabym.com</p>
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="w-10 h-10 rounded-lg bg-ceabym-2 dark:bg-ceabym-3 flex items-center justify-center mr-4 text-ceabym-11 dark:text-ceabym-9">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-secondary-10 dark:text-secondary-9 mb-1">Dirección</h4>
                  <p className="text-secondary-12 dark:text-secondary-11">Av. Principal 123, Ciudad</p>
                </div>
              </li>
            </ul>
            
            <div className="mt-8">
              <h4 className="text-sm font-medium text-secondary-10 dark:text-secondary-9 mb-3">Síguenos en redes sociales</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-ceabym-2 dark:bg-ceabym-3 flex items-center justify-center text-ceabym-11 dark:text-ceabym-9 hover:bg-ceabym-3 dark:hover:bg-ceabym-4 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-ceabym-2 dark:bg-ceabym-3 flex items-center justify-center text-ceabym-11 dark:text-ceabym-9 hover:bg-ceabym-3 dark:hover:bg-ceabym-4 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-ceabym-2 dark:bg-ceabym-3 flex items-center justify-center text-ceabym-11 dark:text-ceabym-9 hover:bg-ceabym-3 dark:hover:bg-ceabym-4 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-ceabym-2 dark:bg-ceabym-3 flex items-center justify-center text-ceabym-11 dark:text-ceabym-9 hover:bg-ceabym-3 dark:hover:bg-ceabym-4 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Contact form - 3 columns */}
          <div className="lg:col-span-3 bg-white dark:bg-secondary-1 rounded-lg shadow-md p-6 lg:p-8">
            <h3 className="text-xl font-semibold text-secondary-12 dark:text-secondary-11 mb-6">Envíanos un mensaje</h3>
            
            <form className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-secondary-11 dark:text-secondary-10 mb-1">Nombre completo</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full rounded-md border border-secondary-4 dark:border-secondary-3 p-3 bg-white dark:bg-secondary-2 text-secondary-12 dark:text-secondary-11 focus:outline-none focus:ring-2 focus:ring-ceabym-9"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-secondary-11 dark:text-secondary-10 mb-1">Correo electrónico</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full rounded-md border border-secondary-4 dark:border-secondary-3 p-3 bg-white dark:bg-secondary-2 text-secondary-12 dark:text-secondary-11 focus:outline-none focus:ring-2 focus:ring-ceabym-9"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-secondary-11 dark:text-secondary-10 mb-1">Asunto</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full rounded-md border border-secondary-4 dark:border-secondary-3 p-3 bg-white dark:bg-secondary-2 text-secondary-12 dark:text-secondary-11 focus:outline-none focus:ring-2 focus:ring-ceabym-9"
                  placeholder="Asunto de tu mensaje"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-secondary-11 dark:text-secondary-10 mb-1">Mensaje</label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full rounded-md border border-secondary-4 dark:border-secondary-3 p-3 bg-white dark:bg-secondary-2 text-secondary-12 dark:text-secondary-11 focus:outline-none focus:ring-2 focus:ring-ceabym-9"
                  placeholder="Escribe tu mensaje aquí..."
                ></textarea>
              </div>
              
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="privacy"
                  className="w-4 h-4 text-ceabym-9 rounded border-secondary-4 dark:border-secondary-3 focus:ring-ceabym-9"
                />
                <label htmlFor="privacy" className="ml-2 text-sm text-secondary-11 dark:text-secondary-10">
                  Acepto la política de privacidad y el procesamiento de mis datos personales.
                </label>
              </div>
              
              <div>
                <Button type="submit" size="lg" className="w-full md:w-auto">
                  Enviar mensaje
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contacto;
