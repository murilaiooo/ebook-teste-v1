// src/components/Testimonials.jsx
import React from 'react';
import TestimonialCarousel from './TestimonialCarousel';

const Testimonials = () => {
  return (
    <section id="depoimentos" className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Responsive: Adjusted headline font sizes and margin */}
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
              Histórias de <span className="text-green-500">Sucesso Real</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300">
              Veja o que nossos alunos estão conquistando com o Guia Definitivo do Lucro Automático
            </p>
          </div>
          
          <TestimonialCarousel />
          
          {/* Responsive: Adjusted margin, padding, and text sizes for "Resultados Comprovados" box */}
          <div className="mt-10 sm:mt-12 bg-gray-900 p-4 sm:p-6 rounded-lg text-center">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Resultados Comprovados</h3>
            {/* Responsive: Grid columns for stats - 2 cols on mobile, 4 on md+ */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-4 sm:mb-6">
              {/* Responsive: Stat card padding and text sizes */}
              <div className="bg-gray-800 p-3 sm:p-4 rounded-lg">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-green-500">2.457+</div>
                <div className="text-xs sm:text-sm text-gray-400 mt-1">Alunos</div>
              </div>
              <div className="bg-gray-800 p-3 sm:p-4 rounded-lg">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-green-500">87%</div>
                <div className="text-xs sm:text-sm text-gray-400 mt-1">Taxa de Sucesso</div>
              </div>
              <div className="bg-gray-800 p-3 sm:p-4 rounded-lg">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-green-500">R$7.300</div>
                <div className="text-xs sm:text-sm text-gray-400 mt-1">Média Mensal</div>
              </div>
              <div className="bg-gray-800 p-3 sm:p-4 rounded-lg">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-green-500">4.9/5</div>
                <div className="text-xs sm:text-sm text-gray-400 mt-1">Avaliação</div>
              </div>
            </div>
            {/* Responsive: Disclaimer text size */}
            <p className="text-gray-400 text-xs sm:text-sm">
              *Os resultados individuais podem variar de acordo com o esforço e implementação das estratégias
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;