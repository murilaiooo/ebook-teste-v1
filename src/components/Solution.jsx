// src/components/Solution.jsx
import React from 'react';

const Solution = () => {
  const benefits = [
    {
      icon: "💰",
      title: "Renda Recorrente",
      description: "Receba dinheiro continuamente, mesmo enquanto dorme ou viaja"
    },
    {
      icon: "🕒",
      title: "Liberdade de Tempo",
      description: "Trabalhe poucas horas por dia e tenha tempo para o que realmente importa"
    },
    {
      icon: "🌍",
      title: "Trabalhe de Qualquer Lugar",
      description: "Tudo o que você precisa é de um computador e conexão à internet"
    },
    {
      icon: "🚀",
      title: "Potencial Ilimitado",
      description: "Sem teto salarial ou limitações para quanto você pode ganhar"
    },
    {
      icon: "🛡️",
      title: "Segurança Financeira",
      description: "Múltiplas fontes de renda protegem você contra crises"
    },
    {
      icon: "📈",
      title: "Escalabilidade",
      description: "Crie uma vez e multiplique seus resultados sem trabalho adicional"
    }
  ];

  return (
    <section className="py-16 bg-black relative">
      <div className="absolute inset-0 bg-[url('/assets/images/solution-bg.webp')] bg-cover bg-center opacity-20"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            A <span className="text-green-500">Solução Definitiva</span>:
          </h2>
          <h3 className="text-2xl md:text-3xl font-semibold mb-8 text-center">
            8 Fontes de Renda Passiva Para Lucrar Automaticamente
          </h3>
          
          <p className="text-lg mb-8 text-center">
            Imagine acordar todas as manhãs e já ter ganho dinheiro enquanto dormia. 
            Imagine ter a liberdade de viajar pelo mundo, passar mais tempo com sua família 
            e ainda assim, ver seu saldo bancário aumentando dia após dia.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <div className="text-4xl mb-3">{benefit.icon}</div>
                <h4 className="text-xl font-semibold mb-2 text-green-400">{benefit.title}</h4>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-gradient-to-r from-green-900 to-green-700 p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-3">
              É hora de dar um passo além do emprego tradicional
            </h3>
            <p className="text-lg mb-6">
              O Guia Definitivo do Lucro Automático é sua porta de entrada para o mundo 
              das rendas passivas e automatizadas onde você pode ganhar dinheiro 24 horas por dia, 
              7 dias por semana, com mínimo esforço após a configuração inicial.
            </p>
            
            <a 
              href="#comprar" 
              className="inline-block bg-white text-green-800 font-bold text-lg py-3 px-8 rounded-full hover:bg-gray-100 transition-colors"
            >
              QUERO CONHECER AS 8 FONTES DE RENDA
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;