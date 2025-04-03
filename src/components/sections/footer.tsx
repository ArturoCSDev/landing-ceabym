import React from "react";
import Logo from "../logo";

export function Footer() {
  return (
    <footer className="bg-secondary-1 dark:bg-secondary-2 border-t border-secondary-4 dark:border-secondary-3">
      <div className="container mx-auto px-4 py-12 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="col-span-1 md:col-span-1">
            <Logo />
            <p className="text-secondary-11 dark:text-secondary-10 mt-4">
              Centro de Estudios, Análisis y Biomarcadores de Alta Precisión
            </p>
          </div>

          {/* Links */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-lg font-semibold text-secondary-12 dark:text-secondary-11 mb-4">Navegación</h3>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="text-secondary-11 dark:text-secondary-10 hover:text-ceabym-11 dark:hover:text-ceabym-9 transition-colors">Inicio</a>
              </li>
              <li>
                <a href="#analisis" className="text-secondary-11 dark:text-secondary-10 hover:text-ceabym-11 dark:hover:text-ceabym-9 transition-colors">Análisis</a>
              </li>
              <li>
                <a href="#historia" className="text-secondary-11 dark:text-secondary-10 hover:text-ceabym-11 dark:hover:text-ceabym-9 transition-colors">Historia</a>
              </li>
              <li>
                <a href="#ubicacion" className="text-secondary-11 dark:text-secondary-10 hover:text-ceabym-11 dark:hover:text-ceabym-9 transition-colors">Ubicación</a>
              </li>
              <li>
                <a href="#contacto" className="text-secondary-11 dark:text-secondary-10 hover:text-ceabym-11 dark:hover:text-ceabym-9 transition-colors">Contacto</a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-lg font-semibold text-secondary-12 dark:text-secondary-11 mb-4">Servicios</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-secondary-11 dark:text-secondary-10 hover:text-ceabym-11 dark:hover:text-ceabym-9 transition-colors">Análisis Sanguíneos</a>
              </li>
              <li>
                <a href="#" className="text-secondary-11 dark:text-secondary-10 hover:text-ceabym-11 dark:hover:text-ceabym-9 transition-colors">Microbiología</a>
              </li>
              <li>
                <a href="#" className="text-secondary-11 dark:text-secondary-10 hover:text-ceabym-11 dark:hover:text-ceabym-9 transition-colors">Bioquímica Clínica</a>
              </li>
              <li>
                <a href="#" className="text-secondary-11 dark:text-secondary-10 hover:text-ceabym-11 dark:hover:text-ceabym-9 transition-colors">Inmunología</a>
              </li>
              <li>
                <a href="#" className="text-secondary-11 dark:text-secondary-10 hover:text-ceabym-11 dark:hover:text-ceabym-9 transition-colors">Análisis Hormonales</a>
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-lg font-semibold text-secondary-12 dark:text-secondary-11 mb-4">Contáctanos</h3>
            <address className="not-italic">
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-ceabym-11 dark:text-ceabym-9 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span className="text-secondary-11 dark:text-secondary-10">(123) 456-7890</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-ceabym-11 dark:text-ceabym-9 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  <span className="text-secondary-11 dark:text-secondary-10">info@ceabym.com</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-ceabym-11 dark:text-ceabym-9 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                  <span className="text-secondary-11 dark:text-secondary-10">Av. Principal 123, Ciudad</span>
                </li>
              </ul>
            </address>
            
            <div className="mt-4 flex space-x-3">
              <a href="#" className="text-secondary-10 dark:text-secondary-9 hover:text-ceabym-11 dark:hover:text-ceabym-9 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a href="#" className="text-secondary-10 dark:text-secondary-9 hover:text-ceabym-11 dark:hover:text-ceabym-9 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                </svg>
              </a>
              <a href="#" className="text-secondary-10 dark:text-secondary-9 hover:text-ceabym-11 dark:hover:text-ceabym-9 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a href="#" className="text-secondary-10 dark:text-secondary-9 hover:text-ceabym-11 dark:hover:text-ceabym-9 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-secondary-4 dark:border-secondary-3 flex flex-col md:flex-row justify-between items-center">
          <p className="text-secondary-11 dark:text-secondary-10 text-sm">
            © {new Date().getFullYear()} CEABYM. Todos los derechos reservados.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="text-secondary-11 dark:text-secondary-10 text-sm hover:text-ceabym-11 dark:hover:text-ceabym-9 transition-colors">
              Términos de servicio
            </a>
            <a href="#" className="text-secondary-11 dark:text-secondary-10 text-sm hover:text-ceabym-11 dark:hover:text-ceabym-9 transition-colors">
              Política de privacidad
            </a>
            <a href="#" className="text-secondary-11 dark:text-secondary-10 text-sm hover:text-ceabym-11 dark:hover:text-ceabym-9 transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
