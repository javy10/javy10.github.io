
import React from 'react';
import { Button } from '@/components/ui/button';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const About: React.FC = () => {
  const { elementRef, isInView } = useIntersectionObserver();

  return (
    <section 
      id="sobre-mi" 
      ref={elementRef}
      className={`py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 dark:from-gray-900 dark:via-purple-900 dark:to-gray-800 animate-on-scroll min-h-screen flex items-center ${
        isInView ? 'animate animate-about-entrance' : ''
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-600 rounded-3xl blur-2xl opacity-30 transform -rotate-6"></div>
              <img
                src="https://cdn.pixabay.com/photo/2022/04/13/16/46/girl-7130668_1280.png"
                alt="Estilista profesional"
                className="relative w-full max-w-md mx-auto rounded-3xl shadow-2xl object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-playfair font-bold mb-6 text-gray-800 dark:text-white">
                Sobre <span className="gradient-text">Mí</span>
              </h2>
              
              <div className="space-y-4 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                <p>
                  Soy <strong className="text-pink-600 dark:text-pink-400">Abby Beltrán</strong>, cuento con más de 1 año de experiencia 
                  en el mundo de la belleza. Mi pasión por realzar la belleza natural de cada persona 
                  me ha llevado a especializarme en las últimas tendencias y técnicas.
                </p>
                
                <p>
                  Creo firmemente que cada persona es única y merece un servicio personalizado 
                  que refleje su personalidad y estilo de vida. Mi objetivo es que salgas de 
                  nuestro salón sintiéndote más segura y radiante que nunca.
                </p>
                
                <p>
                  Continúo formándome constantemente para ofrecerte siempre los tratamientos más innovadores y efectivos.
                </p>
              </div>
            </div>

            {/* Certifications */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/70 dark:bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-gray-200 dark:border-white/20">
                <h4 className="font-semibold text-pink-600 dark:text-pink-400 mb-2">Certificaciones</h4>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  <li>• Cosmetología</li>
                  <li>• Técnica Classic</li>
                  <li>• Técnica Rimel</li>
                </ul>
              </div>
              
              <div className="bg-white/70 dark:bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-gray-200 dark:border-white/20">
                <h4 className="font-semibold text-pink-600 dark:text-pink-400 mb-2">Experiencia</h4>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  <li>• +1 año</li>
                  <li>• +100 clientes</li>
                  <li>• Personalizaciones</li>
                </ul>
              </div>
            </div>

            <Button 
              size="lg"
              onClick={() => document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-6 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              Conoce Más de Mi Trabajo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
