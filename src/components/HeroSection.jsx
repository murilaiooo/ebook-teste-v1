// src/components/HeroSection.jsx
import React from 'react';
import CountdownTimer from './CountdownTimer';

const HeroSection = () => {
  return (
    <section className="pt-28 pb-20 md:pt-40 md:pb-32 relative bg-black">
      {/* Background image placeholder for /assets/images/hero-bg.webp */}
      <div className="absolute inset-0 bg-[url('https://placehold.co/1920x1080?text=HeroBG')] bg-cover bg-center opacity-30"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="text-green-500">Guia Definitivo</span> do Lucro Automático
          </h1>
          <h2 className="text-xl md:text-3xl font-semibold mb-8">
            8 Fontes de Renda Passiva Para Você Lucrar Online
          </h2>
          
          <div className="bg-gray-800 bg-opacity-70 p-4 md:p-6 rounded-lg mb-12">
            <p className="text-lg md:text-xl mb-6">
              Descubra como <span className="text-green-500 font-bold">mais de 2.457 brasileiros</span> estão
              gerando <span className="text-green-500 font-bold">R$1.000 até R$30.000 por mês</span> trabalhando 
              menos de 2 horas por dia com fontes de renda automática
            </p>
            
            <div className="flex justify-center">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ"
                title="Guia Definitivo do Lucro Automático"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg shadow-lg max-w-full w-full md:w-auto"
                loading="lazy"
              ></iframe>
            </div>
          </div>
          
          <div className="bg-gray-900 p-6 rounded-lg mb-8">
            <h3 className="text-xl font-bold text-red-500 mb-2">OFERTA LIMITADA!</h3>
            <p className="text-lg mb-4">Esta oferta especial expira em:</p>
            <CountdownTimer />
          </div>
          
          <a 
            href="#comprar" 
            className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold text-xl py-4 px-8 rounded-full transition-all transform hover:scale-105 hover:shadow-lg"
          >
            QUERO GERAR LUCRO AUTOMÁTICO AGORA
          </a>
          
          <p className="mt-6 text-gray-300">
            <span className="block mb-2">💰 Satisfação garantida ou seu dinheiro de volta</span>
            <span className="block">🔒 Pagamento 100% seguro</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;