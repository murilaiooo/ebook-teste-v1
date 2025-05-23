// src/components/Expert.jsx
import React from 'react';

const Expert = () => {
  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="md:flex items-center gap-8">
            <div className="md:w-1/3 mb-8 md:mb-0 flex justify-center">
              <div className="relative">
                <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-green-500">
                  <img
                    src="/assets/images/expert.webp"
                    alt="Ricardo Mendonça - Especialista em Renda Passiva"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-3 -right-3 bg-green-500 text-black font-bold text-sm py-1 px-3 rounded-full">
                  Mais de R$100.000/mês
                </div>
              </div>
            </div>
            
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold mb-4">
                Conheça <span className="text-green-500">Ricardo Mendonça</span>
              </h2>
              <h3 className="text-xl font-semibold mb-6 text-gray-300">
                Especialista em Renda Passiva & Empreendedorismo Digital
              </h3>
              
              <p className="mb-4 text-gray-300">
                Há 5 anos, eu estava exatamente onde você está agora - frustrado com meu emprego de 9 às 5, 
                lutando para pagar as contas e sonhando com uma vida melhor.
              </p>
              
              <p className="mb-4 text-gray-300">
                Após perder meu emprego durante a crise econômica, fui forçado a encontrar alternativas para gerar renda. 
                Foi quando descobri o poder das fontes de renda passiva online.
              </p>
              
              <p className="mb-6 text-gray-300">
                Hoje, gerencio <span className="text-green-500 font-bold">8 fontes distintas de renda automática</span> que me 
                geram mais de <span className="text-green-500 font-bold">R$100.000 por mês</span>, trabalhando apenas 
                algumas horas por semana, de qualquer lugar do mundo.
              </p>
              
              <div className="flex flex-wrap gap-3">
                <div className="bg-gray-800 py-1 px-3 rounded-full text-sm">Autor Best-seller</div>
                <div className="bg-gray-800 py-1 px-3 rounded-full text-sm">Investidor</div>
                <div className="bg-gray-800 py-1 px-3 rounded-full text-sm">Coach de Empreendedores</div>
                <div className="bg-gray-800 py-1 px-3 rounded-full text-sm">Palestrante Internacional</div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 p-6 bg-black rounded-lg border border-green-500 text-center">
            <h3 className="text-2xl font-bold mb-4">
              "Eu compilei tudo o que aprendi em um <span className="text-green-500">sistema passo a passo</span>"
            </h3>
            <p className="text-lg mb-6">
              No Guia Definitivo do Lucro Automático, compartilho todas as estratégias que usei para sair do zero 
              até construir um império de rendas passivas. São métodos testados e aprovados que funcionam mesmo 
              para quem está começando do absoluto zero.
            </p>
            <a 
              href="#comprar" 
              className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold text-lg py-3 px-8 rounded-full transition-all transform hover:scale-105"
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