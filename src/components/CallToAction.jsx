// src/components/CallToAction.jsx
import React from 'react';
import CountdownTimer from './CountdownTimer';

const CallToAction = () => {
  const pricingOptions = [
    {
      title: "Acesso Standard",
      originalPrice: "R$997",
      currentPrice: "R$297",
      features: [
        "Guia Completo com 8 fontes de renda",
        "Tutoriais passo a passo",
        "Acesso vitalício",
        "Atualizações por 1 ano",
        "Comunidade de alunos"
      ],
      recommended: false,
      link: "#checkout-standard"
    },
    {
      title: "Acesso Premium",
      originalPrice: "R$1.997",
      currentPrice: "R$497",
      features: [
        "Tudo do plano Standard",
        "2 fontes de renda bônus exclusivas",
        "Ferramentas de automação premium",
        "Modelos e templates prontos",
        "Suporte prioritário",
        "Sessão de mentoria em grupo",
        "Atualizações vitalícias"
      ],
      recommended: true,
      link: "#checkout-premium"
    }
  ];

  return (
    <section id="comprar" className="py-16 bg-black relative">
      {/* Background image placeholder for /assets/images/cta-bg.webp */}
      <div className="absolute inset-0 bg-[url('https://placehold.co/1920x1080?text=CtaBG')] bg-cover bg-center opacity-20"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Responsive: Adjusted text sizes and margins for smaller screens */}
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 sm:mb-4">
              <span className="text-green-500">Invista Agora</span> no Seu Futuro Financeiro
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl mb-2">
              Comece a construir suas fontes de renda passiva hoje
            </p>
            <p className="text-base sm:text-lg text-red-500 font-bold">
              Oferta por tempo limitado!
            </p>
          </div>
          
          {/* Responsive: Adjusted padding and margins */}
          <div className="bg-gray-900 p-4 sm:p-6 rounded-lg mb-8 sm:mb-10 text-center">
            <h3 className="text-lg sm:text-xl font-bold text-red-500 mb-2">ESTA OFERTA EXPIRA EM:</h3>
            <CountdownTimer />
          </div>
          
          {/* Responsive: Grid stacks to 1 column on mobile (default), gap adjusted for mobile */}
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-10 sm:mb-12">
            {pricingOptions.map((option, index) => (
              <div 
                key={index} 
                className={`bg-gray-800 rounded-lg overflow-hidden ${option.recommended ? 'border-2 border-green-500 ring-2 ring-green-500' : ''}`}
              >
                {option.recommended && (
                  // Responsive: Text size for "MAIS POPULAR" banner
                  <div className="bg-green-500 text-black font-bold py-1 text-center text-sm sm:text-base">
                    MAIS POPULAR
                  </div>
                )}
                
                {/* Responsive: Padding for pricing card content */}
                <div className="p-4 sm:p-6">
                  {/* Responsive: Title and price text sizes */}
                  <h3 className="text-xl sm:text-2xl font-bold mb-2">{option.title}</h3>
                  <div className="mb-4">
                    <span className="text-gray-400 text-base sm:text-lg line-through mr-2">{option.originalPrice}</span>
                    <span className="text-green-500 text-2xl sm:text-3xl font-bold">{option.currentPrice}</span>
                    <span className="text-xs sm:text-sm text-gray-400 ml-1">à vista</span>
                  </div>
                  
                  {/* Responsive: Feature list text size and spacing */}
                  <ul className="mb-6 space-y-1 sm:space-y-2">
                    {option.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-sm sm:text-base">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="text-center">
                    {/* Responsive: CTA button text size and padding */}
                    <a
                      href={option.link}
                      className={`inline-block w-full font-bold text-base sm:text-lg py-3 px-6 sm:px-8 rounded-full transition-all transform hover:scale-105 shadow-lg ${
                        option.recommended 
                          ? 'bg-green-500 hover:bg-green-600 text-white animate-pulse' 
                          : 'bg-white hover:bg-gray-100 text-black'
                      }`}
                    >
                      {option.recommended ? '✨ QUERO ESTE PLANO ✨' : 'QUERO ESTE PLANO'}
                    </a>
                    {option.recommended && <p className="text-green-500 text-xs sm:text-sm mt-2 font-medium">A escolha mais popular</p>}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Responsive: Padding for payment info box */}
          <div className="bg-gray-900 p-4 sm:p-6 rounded-lg text-center">
            {/* Responsive: Headline text size */}
            <h3 className="text-xl sm:text-2xl font-bold mb-4">
              Formas de Pagamento Aceitas
            </h3>
            {/* Responsive: Gap for payment icons on mobile */}
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-6">
              {/* Responsive: Padding for individual payment icon wrappers */}
              <div className="bg-white p-2 sm:p-2 rounded flex items-center">
                {/* Placeholder for /assets/images/payment-card.webp */}
                <img src="https://placehold.co/50x32?text=Card" alt="Cartão de Crédito" className="h-6 sm:h-8" />
                <span className="ml-2 text-xs sm:text-sm text-gray-700 font-medium">Até 12x</span>
              </div>
              <div className="bg-white p-2 sm:p-2 rounded flex items-center">
                {/* Placeholder for /assets/images/payment-pix.webp */}
                <img src="https://placehold.co/50x32?text=Pix" alt="Pix" className="h-6 sm:h-8" />
                <span className="ml-2 text-xs sm:text-sm text-gray-700 font-medium">10% OFF</span>
              </div>
              <div className="bg-white p-2 sm:p-2 rounded flex items-center">
                {/* Placeholder for /assets/images/payment-boleto.webp */}
                <img src="https://placehold.co/50x32?text=Boleto" alt="Boleto" className="h-6 sm:h-8" />
                <span className="ml-2 text-xs sm:text-sm text-gray-700 font-medium">5% OFF</span>
              </div>
            </div>
            <div className="flex items-center justify-center mb-4">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"></path>
              </svg>
              {/* Responsive: Text size for "Pagamento Seguro" */}
              <p className="text-base sm:text-lg font-medium">Pagamento 100% Seguro</p>
            </div>
            {/* Responsive: Text size for disclaimer */}
            <p className="text-xs sm:text-sm text-gray-400">
              Processamento de pagamento criptografado com os mais altos padrões de segurança.
              <br />Garantia de 30 dias ou seu dinheiro de volta.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;