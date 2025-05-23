// src/components/ComparisonTable.jsx
import React from 'react';

const ComparisonTable = () => {
  const comparisonItems = [
    {
      aspect: "Tempo de trabalho",
      traditional: "40-60 horas semanais",
      automatic: "2-10 horas semanais"
    },
    {
      aspect: "Potencial de ganhos",
      traditional: "Limitado por horas trabalhadas",
      automatic: "Ilimitado e escalável"
    },
    {
      aspect: "Localização",
      traditional: "Presença física obrigatória",
      automatic: "De qualquer lugar do mundo"
    },
    {
      aspect: "Risco de demissão",
      traditional: "Alto (depende de um empregador)",
      automatic: "Baixo (múltiplas fontes de renda)"
    },
    {
      aspect: "Férias e folgas",
      traditional: "Limitadas e pré-aprovadas",
      automatic: "A qualquer momento, sem pedir permissão"
    },
    {
      aspect: "Custos iniciais",
      traditional: "Faculdade (R$50.000 a R$200.000)",
      automatic: "Baixo investimento em conhecimento"
    },
    {
      aspect: "Crescimento de renda",
      traditional: "Linear e lento (5-10% ao ano)",
      automatic: "Exponencial (pode dobrar em meses)"
    }
  ];

  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Responsive: Adjusted headline font sizes and margin */}
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
              Renda Tradicional <span className="text-red-500">vs</span> <span className="text-green-500">Renda Automática</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300">
              Compare e veja por que milhares de pessoas estão migrando para fontes de renda passiva
            </p>
          </div>
          
          {/* Responsive: Table container margin */}
          <div className="overflow-x-auto mb-8 sm:mb-10 shadow-md rounded-lg"> {/* Added shadow and rounded-lg to scroll container */}
            {/* Responsive: Adjusted min-width for table for very small screens */}
            <table className="w-full min-w-[540px] sm:min-w-[640px]"> 
              <thead>
                <tr className="bg-gray-800">
                  {/* Responsive: Table header padding and text size */}
                  <th className="py-2 px-3 sm:py-3 sm:px-4 md:py-4 md:px-6 text-left text-xs sm:text-sm font-semibold text-gray-200 uppercase tracking-wider">Aspecto</th>
                  <th className="py-2 px-3 sm:py-3 sm:px-4 md:py-4 md:px-6 text-center text-xs sm:text-sm font-semibold text-red-400 uppercase tracking-wider">Renda Tradicional</th>
                  <th className="py-2 px-3 sm:py-3 sm:px-4 md:py-4 md:px-6 text-center text-xs sm:text-sm font-semibold text-green-400 uppercase tracking-wider">Renda Automática</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700"> {/* Added dividers for rows */}
                {comparisonItems.map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-gray-900 hover:bg-gray-700/50" : "bg-gray-800 hover:bg-gray-700/50"}> {/* Added hover effect */}
                    {/* Responsive: Table cell padding and text size */}
                    <td className="py-2 px-3 sm:py-3 sm:px-4 md:py-3 md:px-6 text-xs sm:text-sm font-medium text-gray-300 whitespace-nowrap">{item.aspect}</td> {/* whitespace-nowrap for aspect column */}
                    <td className="py-2 px-3 sm:py-3 sm:px-4 md:py-3 md:px-6 text-xs sm:text-sm text-center text-red-300">{item.traditional}</td>
                    <td className="py-2 px-3 sm:py-3 sm:px-4 md:py-3 md:px-6 text-xs sm:text-sm text-center text-green-300">{item.automatic}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* Responsive: Bottom callout box padding, margins, and text sizes */}
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-4 sm:p-6 rounded-lg">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-center">
              A Verdade Sobre o Mundo do Trabalho em 2023
            </h3>
            <p className="text-sm sm:text-lg mb-3 sm:mb-4">
              O modelo de trabalho tradicional está se tornando cada vez mais arriscado e menos recompensador. 
              Enquanto isso, a economia digital oferece oportunidades sem precedentes para quem está preparado.
            </p>
            <p className="text-sm sm:text-lg mb-4 sm:mb-6">
              O <span className="text-green-500 font-bold">Guia Definitivo do Lucro Automático</span> foi criado para ajudar você 
              a fazer essa transição para um modelo de vida com mais liberdade, segurança financeira e realização pessoal.
            </p>
            <div className="text-center">
              {/* Responsive: Button padding and text size adjusted */}
              <a 
                href="#comprar" 
                className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold text-base sm:text-lg py-2 px-6 sm:py-3 sm:px-8 rounded-full transition-all transform hover:scale-105"
              >
                QUERO FAZER A TRANSIÇÃO AGORA
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;