// src/components/Guarantee.jsx
import React from 'react';

const Guarantee = () => {
  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Responsive: Main box padding adjusted */}
          <div className="bg-black p-4 sm:p-6 md:p-8 rounded-lg border-2 border-green-500">
            {/* Layout already flex-col md:flex-row items-center */}
            <div className="md:flex items-center">
              {/* Responsive: "30 Dias" visual container margin */}
              <div className="w-full md:w-1/3 mb-6 md:mb-0 flex justify-center">
                <div className="relative">
                  {/* Responsive: "30 Dias" visual sizes */}
                  <div className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 flex items-center justify-center bg-green-500 rounded-full">
                    <span className="text-black text-4xl sm:text-5xl md:text-6xl font-bold">30</span>
                  </div>
                  <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                    {/* Responsive: Spinning border size to match inner circle */}
                    <div className="w-[144px] h-[144px] sm:w-[160px] sm:h-[160px] md:w-[176px] md:h-[176px] border-4 border-dashed border-green-500 rounded-full animate-spin-slow"></div>
                  </div>
                </div>
              </div>
              
              {/* Responsive: Text content alignment and padding */}
              <div className="w-full md:w-2/3 text-center md:text-left md:pl-6 lg:pl-8">
                {/* Responsive: Headline font sizes and margin */}
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
                  Garantia de <span className="text-green-500">30 Dias</span>
                </h2>
                <p className="text-lg sm:text-xl mb-4 sm:mb-6">
                  Risco Zero: Seu Investimento Totalmente Protegido
                </p>
                {/* Responsive: Paragraph font sizes and margins */}
                <p className="text-sm sm:text-base mb-3 sm:mb-4">
                  Se por qualquer motivo você não ficar satisfeito com o Guia Definitivo do Lucro Automático, 
                  basta solicitar o reembolso em até 30 dias após a compra e devolveremos 100% do seu investimento.
                </p>
                <p className="text-sm sm:text-base mb-4 sm:mb-6">
                  Não fazemos perguntas complicadas, não criamos obstáculos. 
                  Nossa prioridade é sua satisfação e confiança total no programa.
                </p>
                
                {/* Responsive: Checklist items gap and text size */}
                <div className="flex flex-wrap justify-center md:justify-start gap-3 sm:gap-4">
                  <div className="flex items-center text-sm sm:text-base">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-1.5 sm:mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span>Reembolso integral</span>
                  </div>
                  <div className="flex items-center text-sm sm:text-base">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-1.5 sm:mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span>Sem burocracia</span>
                  </div>
                  <div className="flex items-center text-sm sm:text-base">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-1.5 sm:mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span>Processo simples</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Responsive: "Por que oferecemos" box margin, padding, and text sizes */}
          <div className="mt-10 sm:mt-12 bg-gradient-to-r from-green-900 to-green-700 p-4 sm:p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
              Por que oferecemos esta garantia?
            </h3>
            <p className="text-sm sm:text-lg mb-4 sm:mb-6">
              Porque temos total confiança no valor que o Guia Definitivo do Lucro Automático vai entregar para você. 
              Nosso material já foi testado e aprovado por milhares de alunos, e sabemos que se você aplicar o que 
              ensinamos, os resultados virão. Isso nos permite oferecer esta garantia com total segurança.
            </p>
            <p className="text-sm sm:text-lg font-semibold">
              Esta é uma oportunidade sem riscos para transformar sua realidade financeira.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;