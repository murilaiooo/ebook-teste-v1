// src/components/Testimonials.jsx
import React from 'react';
import TestimonialCarousel from './TestimonialCarousel';

const Testimonials = () => {
  return (
    <section id="depoimentos" className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Histórias de <span className="text-green-500">Sucesso Real</span>
            </h2>
            <p className="text-xl text-gray-300">
              Veja o que nossos alunos estão conquistando com o Guia Definitivo do Lucro Automático
            </p>
          </div>
          
          <TestimonialCarousel />
          
          <div className="mt-12 bg-gray-900 p-6 rounded-lg text-center">
            <h3 className="text-2xl font-semibold mb-4">Resultados Comprovados</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="text-3xl font-bold text-green-500">2.457+</div>
                <div className="text-sm text-gray-400">Alunos</div>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="text-3xl font-bold text-green-500">87%</div>
                <div className="text-sm text-gray-400">Taxa de Sucesso</div>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="text-3xl font-bold text-green-500">R$7.300</div>
                <div className="text-sm text-gray-400">Média Mensal</div>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="text-3xl font-bold text-green-500">4.9/5</div>
                <div className="text-sm text-gray-400">Avaliação</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              *Os resultados individuais podem variar de acordo com o esforço e implementação das estratégias
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;