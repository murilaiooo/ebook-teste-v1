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
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Renda Tradicional <span className="text-red-500">vs</span> <span className="text-green-500">Renda Automática</span>
            </h2>
            <p className="text-xl text-gray-300">
              Compare e veja por que milhares de pessoas estão migrando para fontes de renda passiva
            </p>
          </div>
          
          <div className="overflow-x-auto mb-10">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-800">
                  <th className="py-4 px-6 text-left">Aspecto</th>
                  <th className="py-4 px-6 text-center text-red-400">Renda Tradicional</th>
                  <th className="py-4 px-6 text-center text-green-400">Renda Automática</th>
                </tr>
              </thead>
              <tbody>
                {comparisonItems.map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-gray-900" : "bg-gray-800"}>
                    <td className="py-3 px-6 font-medium">{item.aspect}</td>
                    <td className="py-3 px-6 text-center text-red-300">{item.traditional}</td>
                    <td className="py-3 px-6 text-center text-green-300">{item.automatic}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-center">
              A Verdade Sobre o Mundo do Trabalho em 2023
            </h3>
            <p className="text-lg mb-4">
              O modelo de trabalho tradicional está se tornando cada vez mais arriscado e menos recompensador. 
              Enquanto isso, a economia digital oferece oportunidades sem precedentes para quem está preparado.
            </p>
            <p className="text-lg mb-6">
              O <span className="text-green-500 font-bold">Guia Definitivo do Lucro Automático</span> foi criado para ajudar você 
              a fazer essa transição para um modelo de vida com mais liberdade, segurança financeira e realização pessoal.
            </p>
            <div className="text-center">
              <a 
                href="#comprar" 
                className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105"
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