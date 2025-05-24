// src/components/Expert.jsx
import React from 'react';

const Expert = () => {
  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Responsive: Explicit flex-col for mobile, md:flex-row for medium up. items-center for vertical alignment on larger screens. */}
          <div className="flex flex-col md:flex-row md:items-center md:gap-8">
            {/* Responsive: Image container adjustments */}
            <div className="w-full md:w-1/3 mb-6 md:mb-0 flex justify-center">
              <div className="relative">
                {/* Responsive: Image size slightly reduced for smaller mobile, md size maintained */}
                <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-green-500">
                  {/* Placeholder for /assets/images/expert.webp */}
                  <img
                    src="https://placehold.co/256x256?text=Expert"
                    alt="Ricardo Mendonça - Especialista em Renda Passiva"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Responsive: Badge position and size adjusted for smaller image */}
                <div className="absolute -bottom-2 -right-2 sm:-bottom-3 sm:-right-3 bg-green-500 text-black font-bold text-xs sm:text-sm py-1 px-2 sm:px-3 rounded-full">
                  Mais de R$100.000/mês
                </div>
              </div>
            </div>
            
            {/* Responsive: Text content alignment and sizes */}
            <div className="w-full md:w-2/3 text-center md:text-left">
              <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
                Conheça <span className="text-green-500">Ricardo Mendonça</span>
              </h2>
              <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-gray-300">
                Especialista em Renda Passiva & Empreendedorismo Digital
              </h3>
              
              {/* Responsive: Paragraph text sizes */}
              <p className="mb-3 sm:mb-4 text-sm sm:text-base text-gray-300">
                Há 5 anos, eu estava exatamente onde você está agora - frustrado com meu emprego de 9 às 5, 
                lutando para pagar as contas e sonhando com uma vida melhor.
              </p>
              
              <p className="mb-3 sm:mb-4 text-sm sm:text-base text-gray-300">
                Após perder meu emprego durante a crise econômica, fui forçado a encontrar alternativas para gerar renda. 
                Foi quando descobri o poder das fontes de renda passiva online.
              </p>
              
              <p className="mb-4 sm:mb-6 text-sm sm:text-base text-gray-300">
                Hoje, gerencio <span className="text-green-500 font-bold">8 fontes distintas de renda automática</span> que me 
                geram mais de <span className="text-green-500 font-bold">R$100.000 por mês</span>, trabalhando apenas 
                algumas horas por semana, de qualquer lugar do mundo.
              </p>
              
              {/* Responsive: Tags gap and justification */}
              <div className="flex flex-wrap gap-2 sm:gap-3 justify-center md:justify-start">
                <div className="bg-gray-800 py-1 px-2 sm:px-3 rounded-full text-xs sm:text-sm">Autor Best-seller</div>
                <div className="bg-gray-800 py-1 px-2 sm:px-3 rounded-full text-xs sm:text-sm">Investidor</div>
                <div className="bg-gray-800 py-1 px-2 sm:px-3 rounded-full text-xs sm:text-sm">Coach de Empreendedores</div>
                <div className="bg-gray-800 py-1 px-2 sm:px-3 rounded-full text-xs sm:text-sm">Palestrante Internacional</div>
              </div>
            </div>
          </div>
          
          {/* Responsive: Quote box margin, padding, and text sizes */}
          <div className="mt-10 sm:mt-12 p-4 sm:p-6 bg-black rounded-lg border border-green-500 text-center">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
              "Eu compilei tudo o que aprendi em um <span className="text-green-500">sistema passo a passo</span>"
            </h3>
            <p className="text-sm sm:text-lg mb-4 sm:mb-6">
              No Guia Definitivo do Lucro Automático, compartilho todas as estratégias que usei para sair do zero 
              até construir um império de rendas passivas. São métodos testados e aprovados que funcionam mesmo 
              para quem está começando do absoluto zero.
            </p>
            {/* Responsive: Button padding and text size */}
            <a 
              href="#comprar" 
              className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold text-base sm:text-lg py-2 px-6 sm:py-3 sm:px-8 rounded-full transition-all transform hover:scale-105"
            >
              QUERO APRENDER COM QUEM JÁ CHEGOU LÁ
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expert;