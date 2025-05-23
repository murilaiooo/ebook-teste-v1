// src/components/Guarantee.jsx
import React from 'react';

const Guarantee = () => {
  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-black p-8 rounded-lg border-2 border-green-500">
            <div className="md:flex items-center">
              <div className="md:w-1/3 mb-6 md:mb-0 flex justify-center">
                <div className="relative">
                  <div className="w-40 h-40 flex items-center justify-center bg-green-500 rounded-full">
                    <span className="text-black text-6xl font-bold">30</span>
                  </div>
                  <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                    <div className="w-48 h-48 border-4 border-dashed border-green-500 rounded-full animate-spin-slow"></div>
                  </div>
                </div>
              </div>
              
              <div className="md:w-2/3 text-center md:text-left md:pl-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Garantia de <span className="text-green-500">30 Dias</span>
                </h2>
                <p className="text-xl mb-6">
                  Risco Zero: Seu Investimento Totalmente Protegido
                </p>
                <p className="mb-4">
                  Se por qualquer motivo você não ficar satisfeito com o Guia Definitivo do Lucro Automático, 
                  basta solicitar o reembolso em até 30 dias após a compra e devolveremos 100% do seu investimento.
                </p>
                <p className="mb-6">
                  Não fazemos perguntas complicadas, não criamos obstáculos. 
                  Nossa prioridade é sua satisfação e confiança total no programa.
                </p>
                
                <div className="flex flex-wrap justify-center md:justify-start gap-4">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span>Reembolso integral</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span>Sem burocracia</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span>Processo simples</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 bg-gradient-to-r from-green-900 to-green-700 p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-4">
              Por que oferecemos esta garantia?
            </h3>
            <p className="text-lg mb-6">
              Porque temos total confiança no valor que o Guia Definitivo do Lucro Automático vai entregar para você. 
              Nosso material já foi testado e aprovado por milhares de alunos, e sabemos que se você aplicar o que 
              ensinamos, os resultados virão. Isso nos permite oferecer esta garantia com total segurança.
            </p>
            <p className="text-lg font-semibold">
              Esta é uma oportunidade sem riscos para transformar sua realidade financeira.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;