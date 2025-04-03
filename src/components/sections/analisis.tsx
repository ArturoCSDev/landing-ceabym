import React, { useState } from "react";

// Definición de tipos para los análisis
interface AnalisisItem {
  nombre: string;
  descripcion?: string;
}

interface AnalisisCategoriaProps {
  titulo: string;
  descripcion: string;
  icon: React.ReactNode;
  analisis: AnalisisItem[];
}

// Componente para cada tarjeta de categoría de análisis
const AnalisisCard: React.FC<AnalisisCategoriaProps> = ({ titulo, descripcion, icon, analisis }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="bg-white dark:bg-secondary-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-6 border border-secondary-4 dark:border-secondary-3 relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-12 h-12 bg-ceabym-2 dark:bg-ceabym-3 rounded-lg flex items-center justify-center text-ceabym-11 dark:text-ceabym-9 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-secondary-12 dark:text-secondary-11 mb-2">{titulo}</h3>
      <p className="text-secondary-11 dark:text-secondary-9">{descripcion}</p>
      
      {/* Dropdown de análisis */}
      <div 
        className={`absolute left-0 right-0 top-full mt-2 bg-white dark:bg-secondary-1 rounded-lg shadow-lg border border-secondary-4 dark:border-secondary-3 p-4 z-10 transition-all duration-300 overflow-hidden ${
          isHovered ? 'opacity-100 max-h-96 overflow-y-auto' : 'opacity-0 max-h-0 pointer-events-none'
        }`}
      >
        <h4 className="font-medium text-ceabym-11 dark:text-ceabym-9 mb-2">Análisis disponibles:</h4>
        <ul className="space-y-1">
          {analisis.map((item, index) => (
            <li key={index} className="text-secondary-12 dark:text-secondary-11 hover:text-ceabym-11 dark:hover:text-ceabym-9 transition-colors">
              <span className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-ceabym-9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5v14" />
                </svg>
                {item.nombre}
              </span>
              {item.descripcion && (
                <span className="block text-sm text-secondary-10 dark:text-secondary-9 ml-6">{item.descripcion}</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export function Analisis() {
  // Definición de las categorías de análisis con sus tipos específicos
  const categorias = [
    {
      titulo: "Análisis Sanguíneos",
      descripcion: "Hemogramas completos, química sanguínea, perfiles hormonales y más, con resultados precisos y rápidos.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v7.5" />
          <path d="m9 12 3-2.5 3 2.5a5 5 0 1 1-6 0Z" />
        </svg>
      ),
      analisis: [
        { nombre: "Hemograma completo", descripcion: "Análisis de glóbulos rojos, blancos y plaquetas" },
        { nombre: "Glucosa en sangre", descripcion: "Niveles de glucosa para diagnóstico de diabetes" },
        { nombre: "Perfil lipídico", descripcion: "Colesterol total, HDL, LDL y triglicéridos" },
        { nombre: "Hemoglobina glicosilada (HbA1c)", descripcion: "Control de diabetes a largo plazo" },
        { nombre: "Perfil hepático", descripcion: "Evaluación de la función del hígado" },
        { nombre: "Perfil renal", descripcion: "Evaluación de la función de los riñones" },
        { nombre: "Ácido úrico", descripcion: "Diagnóstico de gota y problemas renales" },
        { nombre: "Proteína C reactiva", descripcion: "Marcador de inflamación" },
        { nombre: "Velocidad de sedimentación globular", descripcion: "Detección de inflamación" },
        { nombre: "Electrolitos séricos", descripcion: "Sodio, potasio, cloro y bicarbonato" }
      ]
    },
    {
      titulo: "Microbiología",
      descripcion: "Cultivos bacterianos, antibiogramas, análisis de patógenos y estudios de resistencia microbiana.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a7 7 0 1 0 7 7" />
        </svg>
      ),
      analisis: [
        { nombre: "Cultivo de orina", descripcion: "Identificación de infecciones urinarias" },
        { nombre: "Cultivo de heces", descripcion: "Detección de patógenos intestinales" },
        { nombre: "Cultivo de exudado faríngeo", descripcion: "Diagnóstico de faringitis bacteriana" },
        { nombre: "Cultivo de esputo", descripcion: "Identificación de infecciones respiratorias" },
        { nombre: "Cultivo de secreciones", descripcion: "Análisis de secreciones de diferentes orígenes" },
        { nombre: "Antibiograma", descripcion: "Sensibilidad bacteriana a antibióticos" },
        { nombre: "Gram directo", descripcion: "Tinción para visualización de bacterias" },
        { nombre: "KOH directo", descripcion: "Detección de hongos" },
        { nombre: "Cultivo micológico", descripcion: "Identificación de hongos" },
        { nombre: "Parasitología", descripcion: "Identificación de parásitos" }
      ]
    },
    {
      titulo: "Bioquímica Clínica",
      descripcion: "Evaluación de enzimas, electrolitos, metabolitos y biomarcadores específicos para cada condición.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8.343 7.858 4.93 4.444a7.796 7.796 0 0 0-1.524 9.001A7.796 7.796 0 0 0 11.581 18" />
          <path d="M18.364 9.353 7.05 20.668A7.796 7.796 0 0 0 18.363 9.354Z" />
        </svg>
      ),
      analisis: [
        { nombre: "Proteínas totales", descripcion: "Evaluación de estado nutricional" },
        { nombre: "Albúmina sérica", descripcion: "Proteína producida por el hígado" },
        { nombre: "Transaminasas (ALT/AST)", descripcion: "Enzimas hepáticas" },
        { nombre: "Fosfatasa alcalina", descripcion: "Enzima presente en hígado y huesos" },
        { nombre: "Gamma-GT", descripcion: "Enzima hepática y marcador de consumo de alcohol" },
        { nombre: "Bilirrubina total y fraccionada", descripcion: "Producto de degradación de hemoglobina" },
        { nombre: "Amilasa y lipasa", descripcion: "Enzimas pancreáticas" },
        { nombre: "Lactato deshidrogenasa (LDH)", descripcion: "Enzima presente en múltiples tejidos" },
        { nombre: "Creatina quinasa (CK)", descripcion: "Enzima muscular y cardíaca" },
        { nombre: "Troponina", descripcion: "Marcador de daño cardíaco" }
      ]
    },
    {
      titulo: "Inmunología",
      descripcion: "Detección de anticuerpos, antígenos y evaluación del estado inmunológico mediante técnicas avanzadas.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
          <path d="M12 12v.01" />
        </svg>
      ),
      analisis: [
        { nombre: "Prueba rápida de COVID-19", descripcion: "Detección de antígeno del SARS-CoV-2" },
        { nombre: "Serología para COVID-19", descripcion: "Detección de anticuerpos IgG e IgM" },
        { nombre: "Prueba rápida de dengue", descripcion: "Detección de anticuerpos NS1" },
        { nombre: "Factor reumatoide", descripcion: "Marcador de enfermedades autoinmunes" },
        { nombre: "Anticuerpos antinucleares (ANA)", descripcion: "Diagnóstico de lupus y otras enfermedades autoinmunes" },
        { nombre: "Serología para VIH", descripcion: "Prueba de anticuerpos contra el VIH" },
        { nombre: "Serología para hepatitis", descripcion: "Detección de hepatitis A, B y C" },
        { nombre: "Prueba de embarazo en sangre", descripcion: "Detección de hormona HCG" },
        { nombre: "VDRL/RPR", descripcion: "Prueba para sífilis" },
        { nombre: "Inmunoglobulinas (IgA, IgG, IgM, IgE)", descripcion: "Evaluación del sistema inmune" }
      ]
    },
    {
      titulo: "Análisis Hormonales",
      descripcion: "Evaluación precisa de niveles hormonales para diagnóstico y seguimiento de condiciones endocrinas.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 4c-.6-.3-1-.8-1-1.5S18.4 1 19 1s1 .8 1 1.5S19.6 4 19 4Z" />
          <path d="M21 6c-.4 0-.8.1-1.1.3-.3.1-.5.3-.7.4-.5.5-.6.8-.7 1.6" />
          <path d="M12 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
          <path d="M13.8 15c-1.2-.5-2.7-.7-4.3-.7-2.8 0-5.2.8-6.6 2-.9.7-1.3 1.5-1.4 2.4 0 .9.4 1.8 1.3 2.4 2.1 1.8 5 2.7 7.9 2.7 2.7 0 5.3-1 7.2-2.4" />
          <path d="M21.3 16.7a3 3 0 1 0-4.2-4.3L13 17.5V22h4.3l4-5.3Z" />
        </svg>
      ),
      analisis: [
        { nombre: "Tirotropina (TSH)", descripcion: "Evaluación de la función tiroidea" },
        { nombre: "T3 y T4 libre", descripcion: "Hormonas tiroideas" },
        { nombre: "Insulina", descripcion: "Evaluación de resistencia a la insulina" },
        { nombre: "Cortisol", descripcion: "Hormona del estrés" },
        { nombre: "Estradiol", descripcion: "Hormona sexual femenina" },
        { nombre: "Progesterona", descripcion: "Hormona reproductiva femenina" },
        { nombre: "Testosterona", descripcion: "Hormona sexual masculina" },
        { nombre: "Hormona foliculoestimulante (FSH)", descripcion: "Evaluación de función reproductiva" },
        { nombre: "Hormona luteinizante (LH)", descripcion: "Regulación de función ovárica y testicular" },
        { nombre: "Prolactina", descripcion: "Hormona relacionada con la lactancia y reproducción" }
      ]
    },
    {
      titulo: "Diagnóstico Molecular",
      descripcion: "Técnicas de PCR y secuenciación para detección precisa de patógenos y biomarcadores genéticos.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 9h-5.586a1 1 0 0 0-.707.293l-5.414 5.414a1 1 0 0 0 0 1.414l1.586 1.586a1 1 0 0 0 1.414 0l5.414-5.414a1 1 0 0 0 .293-.707V6" />
          <path d="m7.698 15.009 5.586 5.586a1 1 0 0 0 1.414 0l1.586-1.586a1 1 0 0 0 0-1.414l-5.586-5.586" />
          <path d="m13 7.5 1-1 2.5 2.5M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0z" />
        </svg>
      ),
      analisis: [
        { nombre: "PCR para COVID-19", descripcion: "Detección del material genético del SARS-CoV-2" },
        { nombre: "PCR para tuberculosis", descripcion: "Detección del Mycobacterium tuberculosis" },
        { nombre: "PCR para VPH", descripcion: "Detección del virus del papiloma humano" },
        { nombre: "PCR para hepatitis B y C", descripcion: "Cuantificación de carga viral" },
        { nombre: "PCR para VIH", descripcion: "Cuantificación de carga viral" },
        { nombre: "Genotipado del VPH", descripcion: "Identificación de tipos de alto riesgo" },
        { nombre: "PCR para influenza", descripcion: "Detección de virus de la influenza" },
        { nombre: "PCR para dengue", descripcion: "Identificación del virus del dengue" },
        { nombre: "PCR para malaria", descripcion: "Detección de Plasmodium" },
        { nombre: "Identificación molecular de patógenos", descripcion: "Detección de múltiples patógenos" }
      ]
    }
  ];

  return (
    <section id="analisis" className="py-20 bg-secondary-1 dark:bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-12 dark:text-secondary-11 mb-4">
            Servicios de análisis de <span className="text-ceabym-11 dark:text-ceabym-9">excelencia</span>
          </h2>
          <p className="text-lg text-secondary-11 dark:text-secondary-10">
            Ofrecemos una amplia gama de análisis clínicos con los más altos estándares de calidad y tecnología de vanguardia.
            <br />
            <span className="text-sm italic">Pasa el cursor sobre cada categoría para ver los análisis disponibles.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categorias.map((categoria, index) => (
            <AnalisisCard
              key={index}
              titulo={categoria.titulo}
              descripcion={categoria.descripcion}
              icon={categoria.icon}
              analisis={categoria.analisis}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-ceabym-2 dark:bg-ceabym-3/50 rounded-lg p-4 md:p-8 shadow-md">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-ceabym-11 dark:text-ceabym-9">+1,000</div>
                <div className="text-secondary-11 dark:text-secondary-9">Análisis mensuales</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-ceabym-11 dark:text-ceabym-9">99.8%</div>
                <div className="text-secondary-11 dark:text-secondary-9">Precisión en resultados</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-ceabym-11 dark:text-ceabym-9">+50</div>
                <div className="text-secondary-11 dark:text-secondary-9">Tipos de análisis</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Analisis;
