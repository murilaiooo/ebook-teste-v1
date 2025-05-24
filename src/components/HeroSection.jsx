// src/components/HeroSection.jsx
import React from 'react';
import CountdownTimer from './CountdownTimer';

const HeroSection = () => {
  return (
    <section className="pt-28 pb-20 md:pt-40 md:pb-32 relative bg-black">
      {/* Background image placeholder for /assets/images/hero-bg.webp */}
      <div className="absolute inset-0 bg-[url('https://placehold.co/1920x1080?text=HeroBG')] bg-cover bg-center opacity-30"></div>
      <div className="container mx-auto px-4 relative z-10">
        {/* Responsive: Adjusted max-width for very small screens if needed, but max-w-4xl is generally fine with px-4 */}
        <div className="max-w-4xl mx-auto text-center">
          {/* Responsive: Adjusted font size for smaller screens */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="text-green-500">Guia Definitivo</span> do Lucro Automático
          </h1>
          {/* Responsive: Adjusted font size for smaller screens */}
          <h2 className="text-lg sm:text-xl md:text-3xl font-semibold mb-8">
            8 Fontes de Renda Passiva Para Você Lucrar Online
          </h2>
          
          {/* Responsive: Padding adjusted slightly for mobile */}
          <div className="bg-gray-800 bg-opacity-70 p-3 sm:p-4 md:p-6 rounded-lg mb-10 sm:mb-12">
            {/* Responsive: Adjusted font size for smaller screens */}
            <p className="text-base sm:text-lg md:text-xl mb-6">
              Descubra como <span className="text-green-500 font-bold">mais de 2.457 brasileiros</span> estão
              gerando <span className="text-green-500 font-bold">R$1.000 até R$30.000 por mês</span> trabalhando 
              menos de 2 horas por dia com fontes de renda automática
            </p>
            
            <div className="flex justify-center">
              {/* Responsive: YouTube Iframe - ensuring it scales correctly */}
              <iframe
                src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ"
                title="Guia Definitivo do Lucro Automático"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg shadow-lg w-full aspect-video max-w-xl" // aspect-video for 16:9, max-w-xl to cap size on larger viewports if desired
                loading="lazy"
              ></iframe>
            </div>
          </div>
          
          {/* Responsive: Padding and margin adjusted for mobile */}
          <div className="bg-gray-900 p-4 sm:p-6 rounded-lg mb-10 sm:mb-8">
            <h3 className="text-lg sm:text-xl font-bold text-red-500 mb-2">OFERTA LIMITADA!</h3>
            <p className="text-base sm:text-lg mb-4">Esta oferta especial expira em:</p>
            <CountdownTimer />
          </div>
          
          {/* Responsive: CTA button padding and text size adjusted */}
          <a 
            href="#comprar" 
            className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold text-lg sm:text-xl py-3 px-6 sm:py-4 sm:px-8 rounded-full transition-all transform hover:scale-105 hover:shadow-lg"
          >
            QUERO GERAR LUCRO AUTOMÁTICO AGORA
          </a>
          
          {/* Replaced emojis with inline SVGs for guarantee points */}
          <p className="mt-6 text-gray-300">
            <span className="block mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 inline-block align-text-bottom mr-1 text-green-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              Satisfação garantida ou seu dinheiro de volta
            </span>
            <span className="block">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 inline-block align-text-bottom mr-1 text-green-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
              </svg>
              Pagamento 100% seguro
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;