// src/components/Solution.jsx
import React from 'react';

const Solution = () => {
  const svgIcons = {
    // Changed from CurrencyDollarIcon to ArrowPathIcon for "Renda Recorrente" to better emphasize recurrence
    rendaRecorrente: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 11.667 0l3.181-3.183m-4.991-4.992v4.992m0 0H9.345m0 0-3.181-3.183a8.25 8.25 0 0 1 11.667 0l3.181 3.183" />
      </svg>
    ),
    liberdadeTempo: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
    trabalheQualquerLugar: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A11.978 11.978 0 0 1 12 16.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 0 21 12c0-.778.099-1.533.284-2.253M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A11.978 11.978 0 0 1 12 16.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 0 21 12c0-.778.099-1.533.284-2.253" />
      </svg>
    ),
    potencialIlimitado: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.812a2.25 2.25 0 0 1 2.248 2.032l.006.064A2.25 2.25 0 0 1 12 16a2.25 2.25 0 0 1-2.248-2.032l-.006-.064Zm1.85-3.92a2.25 2.25 0 0 0-2.248 2.032l-.006.064A2.25 2.25 0 0 0 12 16a2.25 2.25 0 0 0 2.248-2.032l.006-.064Zm-3.712 3.92a2.25 2.25 0 0 1 2.248-2.032l.006-.064A2.25 2.25 0 0 1 12 12.25a2.25 2.25 0 0 1-2.248-2.032l-.006-.064Zm-3.712 3.92a2.25 2.25 0 0 0 2.248-2.032l.006-.064A2.25 2.25 0 0 0 12 12.25a2.25 2.25 0 0 0-2.248-2.032l-.006-.064Z" />
      </svg>
    ),
    segurancaFinanceira: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.75h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
    escalabilidade: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 18 9-9 4.5 4.5L21.75 6" />
      </svg>
    )
  };

  {/* Replaced emoji icons with SVGs for a modern look */}
  const benefits = [
    {
      icon: svgIcons.rendaRecorrente,
      title: "Renda Recorrente",
      description: "Receba dinheiro continuamente, mesmo enquanto dorme ou viaja"
    },
    {
      icon: svgIcons.liberdadeTempo,
      title: "Liberdade de Tempo",
      description: "Trabalhe poucas horas por dia e tenha tempo para o que realmente importa"
    },
    {
      icon: svgIcons.trabalheQualquerLugar,
      title: "Trabalhe de Qualquer Lugar",
      description: "Tudo o que você precisa é de um computador e conexão à internet"
    },
    {
      icon: svgIcons.potencialIlimitado,
      title: "Potencial Ilimitado",
      description: "Sem teto salarial ou limitações para quanto você pode ganhar"
    },
    {
      icon: svgIcons.segurancaFinanceira,
      title: "Segurança Financeira",
      description: "Múltiplas fontes de renda protegem você contra crises"
    },
    {
      icon: svgIcons.escalabilidade,
      title: "Escalabilidade",
      description: "Crie uma vez e multiplique seus resultados sem trabalho adicional"
    }
  ];

  return (
    <section className="py-16 bg-black relative">
      {/* Background image placeholder for /assets/images/solution-bg.webp */}
      <div className="absolute inset-0 bg-[url('https://placehold.co/1920x1080?text=SolutionBG')] bg-cover bg-center opacity-20"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Responsive: Adjusted headline font sizes and margins */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-center">
            A <span className="text-green-500">Solução Definitiva</span>:
          </h2>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 sm:mb-8 text-center">
            8 Fontes de Renda Passiva Para Lucrar Automaticamente
          </h3>
          
          {/* Responsive: Adjusted paragraph font size and margin */}
          <p className="text-base sm:text-lg mb-6 sm:mb-8 text-center">
            Imagine acordar todas as manhãs e já ter ganho dinheiro enquanto dormia. 
            Imagine ter a liberdade de viajar pelo mundo, passar mais tempo com sua família 
            e ainda assim, ver seu saldo bancário aumentando dia após dia.
          </p>
          
          {/* Responsive: Grid gap and bottom margin adjusted */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-12">
            {benefits.map((benefit, index) => (
              // Responsive: Benefit card padding adjusted
              <div key={index} className="bg-gray-800 p-4 sm:p-6 rounded-lg shadow-lg">
                {/* SVG icon size is fixed (w-10 h-10), mb-3 is fine */}
                <div className="mb-3">{benefit.icon}</div>
                {/* Responsive: Title font size and margin */}
                <h4 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2 text-green-400">{benefit.title}</h4>
                {/* Responsive: Description font size */}
                <p className="text-sm sm:text-base text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
          
          {/* Responsive: Padding, margins, and text sizes for bottom callout box */}
          <div className="bg-gradient-to-r from-green-900 to-green-700 p-4 sm:p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">
              É hora de dar um passo além do emprego tradicional
            </h3>
            <p className="text-sm sm:text-lg mb-4 sm:mb-6">
              O Guia Definitivo do Lucro Automático é sua porta de entrada para o mundo 
              das rendas passivas e automatizadas onde você pode ganhar dinheiro 24 horas por dia, 
              7 dias por semana, com mínimo esforço após a configuração inicial.
            </p>
            
            {/* Responsive: Button padding and text size adjusted */}
            <a 
              href="#comprar" 
              className="inline-block bg-white text-green-800 font-bold text-base sm:text-lg py-2 px-6 sm:py-3 sm:px-8 rounded-full hover:bg-gray-100 transition-colors"
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