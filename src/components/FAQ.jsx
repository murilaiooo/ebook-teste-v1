// src/components/FAQ.jsx
import React, { useState } from 'react';

const FAQ = () => {
  const faqItems = [
    {
      question: "Preciso ter experiência prévia para começar?",
      answer: "Não, o Guia Definitivo do Lucro Automático foi desenvolvido para funcionar mesmo para quem está começando do zero. Ensinamos tudo passo a passo, desde os conceitos básicos até estratégias avançadas."
    },
    {
      question: "Quanto tempo leva para começar a ver resultados?",
      answer: "Isto varia conforme a fonte de renda escolhida e o tempo que você dedica. Alguns alunos começam a ver resultados nas primeiras semanas, enquanto outros podem levar 2-3 meses para estabelecer suas fontes de renda. O importante é seguir o sistema consistentemente."
    },
    {
      question: "Quanto dinheiro preciso investir além do curso?",
      answer: "Incluímos estratégias que podem ser iniciadas com menos de R$100, e outras que não precisam de nenhum investimento além do tempo. Detalhamos o investimento necessário para cada fonte de renda, para que você possa escolher o que melhor se adapta à sua situação."
    },
    {
      question: "Por quanto tempo terei acesso ao material?",
      answer: "O acesso ao conteúdo principal é vitalício. No plano Standard, você recebe atualizações por 1 ano, enquanto no plano Premium, as atualizações são vitalícias."
    },
    {
      question: "Quantas horas por semana preciso dedicar?",
      answer: "Recomendamos no mínimo 5-10 horas semanais no início para configurar suas fontes de renda. Depois que estiverem estabelecidas, muitas podem ser mantidas com apenas 1-2 horas por semana."
    },
    {
      question: "O conteúdo funciona para quem mora fora do Brasil?",
      answer: "Sim! Embora algumas estratégias sejam otimizadas para o mercado brasileiro, a maioria das fontes de renda pode ser implementada de qualquer lugar do mundo, e ensinamos como adaptar para diferentes mercados."
    },
    {
      question: "Como funciona a garantia de 30 dias?",
      answer: "Se por qualquer razão você não estiver satisfeito com o material, basta enviar um e-mail para suporte@lucroautomatico.com.br dentro de 30 dias após a compra solicitando o reembolso. Devolveremos 100% do seu investimento, sem perguntas."
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <section id="faq" className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Responsive: Adjusted headline font sizes and margin */}
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
              Perguntas <span className="text-green-500">Frequentes</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300">
              Tudo o que você precisa saber antes de investir
            </p>
          </div>
          
          {/* Responsive: FAQ items container margin */}
          <div className="space-y-3 sm:space-y-4 mb-10 sm:mb-12">
            {faqItems.map((faq, index) => (
              <div 
                key={index} 
                className={`bg-gray-800 rounded-lg overflow-hidden transition-all duration-300 ${openIndex === index ? 'shadow-lg' : ''}`}
              >
                {/* Responsive: FAQ item button padding and text size */}
                <button
                  className="w-full text-left p-4 sm:p-5 md:p-6 flex justify-between items-center focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="text-base sm:text-lg md:text-xl font-medium flex-1 pr-2">{faq.question}</span> {/* flex-1 pr-2 to allow text to wrap and not overlap icon */}
                  {/* Responsive: SVG icon size */}
                  <svg 
                    className={`w-4 h-4 sm:w-5 sm:h-5 transform transition-transform flex-shrink-0 ${openIndex === index ? 'rotate-180' : ''}`} 
                    fill="none" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                {/* Responsive: FAQ answer padding and text size */}
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-screen pb-4 px-4 sm:pb-5 sm:px-5 md:pb-6 md:px-6' : 'max-h-0' // max-h-screen for smooth opening
                  }`}
                >
                  <p className="text-sm sm:text-base text-gray-300">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Responsive: "Ainda tem dúvidas?" box padding, margins, and text sizes */}
          <div className="bg-black p-4 sm:p-6 rounded-lg text-center">
            <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
              Ainda tem dúvidas?
            </h3>
            <p className="text-base sm:text-lg mb-4 sm:mb-6">
              Entre em contato com nossa equipe de suporte e teremos prazer em ajudar
            </p>
            {/* Responsive: Button padding and text size adjusted */}
            <a 
              href="mailto:suporte@lucroautomatico.com.br" 
              className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold text-base sm:text-lg py-2 px-6 sm:py-3 sm:px-8 rounded-full transition-colors"
            >
              FALAR COM O SUPORTE
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;