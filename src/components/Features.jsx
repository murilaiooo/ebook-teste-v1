// src/components/Features.jsx
import React from 'react';
import FeatureCarousel from './FeatureCarousel';

const Features = () => {
  const svgIcons = {
    produtosDigitais: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
      </svg>
    ),
    marketingAfiliados: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
      </svg>
    ),
    youtubeMonetizado: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z" />
      </svg>
    ),
    // Changed from ComputerDesktopIcon to NewspaperIcon for "Blogs e Sites de Conteúdo" for better content representation
    blogsSitesConteudo: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25H5.625a2.25 2.25 0 0 1-2.25-2.25V7.5c0-.621.504-1.125 1.125-1.125H9M3 9h18M3 9V7.125A2.25 2.25 0 0 1 5.25 4.875h13.5A2.25 2.25 0 0 1 21 7.125V9" />
      </svg>
    ),
    dropshippingOtimizado: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
      </svg>
    ),
    aplicativosSoftware: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
    comunidadesMemberships: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-3.741-5.208M19.5 12v.75A.75.75 0 0 1 18.75 15h-.043a2.25 2.25 0 0 1-1.583-.659 2.25 2.25 0 0 0-1.583-.659h-.652a3 3 0 0 0-3.741 5.208 9.093 9.093 0 0 0 3.741.479M8.25 12h6M8.25 15h6M4.5 16.5a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3h10.5a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H4.5Z" />
      </svg>
    ),
    investimentosDigitais: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 0 1-1.125-1.125V6.375m1.125 13.125V15A2.25 2.25 0 0 1 5.625 12.75h12.75c1.243 0 2.25 1.007 2.25 2.25V19.5m-17.25 0h17.25M4.5 12.75v-1.5a3.375 3.375 0 0 1 3.375-3.375h6.75a3.375 3.375 0 0 1 3.375 3.375v1.5m-13.5 0h13.5" />
      </svg>
    )
  };

  {/* Replaced emoji icons with SVGs for a modern look */}
  const incomeSources = [
    {
      title: "Produtos Digitais",
      icon: svgIcons.produtosDigitais,
      description: "Crie e venda e-books, cursos ou templates que os clientes compram repetidamente sem seu envolvimento direto"
    },
    {
      title: "Marketing de Afiliados",
      icon: svgIcons.marketingAfiliados,
      description: "Promova produtos de terceiros e ganhe comissões por cada venda realizada através dos seus links"
    },
    {
      title: "YouTube Monetizado",
      icon: svgIcons.youtubeMonetizado,
      description: "Crie um canal que gera receita através de anúncios, parcerias e vendas de produtos"
    },
    {
      title: "Blogs e Sites de Conteúdo",
      icon: svgIcons.blogsSitesConteudo,
      description: "Desenvolva plataformas que geram renda através de anúncios, links de afiliados e produtos próprios"
    },
    {
      title: "Dropshipping Otimizado",
      icon: svgIcons.dropshippingOtimizado,
      description: "Monte uma loja online com processos automatizados onde você não precisa estocar produtos"
    },
    {
      title: "Aplicativos e Software",
      icon: svgIcons.aplicativosSoftware,
      description: "Crie aplicativos que geram receita recorrente através de assinaturas ou anúncios"
    },
    {
      title: "Comunidades e Memberships",
      icon: svgIcons.comunidadesMemberships,
      description: "Desenvolva comunidades fechadas onde membros pagam mensalidades para ter acesso a conteúdos exclusivos"
    },
    {
      title: "Investimentos Digitais",
      icon: svgIcons.investimentosDigitais,
      description: "Estratégias de investimento em ativos digitais com potencial de valorização e renda passiva"
    }
  ];

  return (
    <section id="beneficios" className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Responsive: Adjusted headline font sizes and margins */}
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
              <span className="text-green-500">8 Fontes de Renda Passiva</span> Que Você Vai Dominar
            </h2>
            <p className="text-lg sm:text-xl text-gray-300">
              O Guia Definitivo do Lucro Automático ensina você a implementar e escalar cada uma dessas fontes
            </p>
          </div>
          
          {/* Responsive: Grid gap and bottom margin adjusted */}
          <div className="grid md:grid-cols-2 gap-4 sm:gap-6 mb-10 sm:mb-12">
            {incomeSources.map((source, index) => (
              // Responsive: Income source card padding and flex alignment for mobile
              <div key={index} className="bg-gray-800 p-4 sm:p-6 rounded-lg flex items-start"> {/* items-start for better alignment with multi-line text */}
                {/* SVG icon size is fixed (w-10 h-10), mr-4 is fine */}
                <div className="mr-3 sm:mr-4 flex-shrink-0">{source.icon}</div> {/* flex-shrink-0 to prevent icon shrinking */}
                <div>
                  {/* Responsive: Title and description font sizes */}
                  <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2 text-green-400">{source.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-300">{source.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Responsive: Adjusted headline font sizes and margins */}
          <div className="text-center mb-8 sm:mb-10">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">
              O Que Você Encontra No Guia
            </h3>
            <p className="text-lg sm:text-xl text-gray-300">
              Conteúdo completo e prático para implementar imediatamente
            </p>
          </div>
          
          <FeatureCarousel />
          
          {/* Responsive: CTA button margin, padding, and text size adjusted */}
          <div className="mt-10 sm:mt-12 text-center">
            <a 
              href="#comprar" 
              className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold text-base sm:text-lg md:text-xl py-3 px-6 sm:py-3 md:py-4 sm:px-8 md:px-10 rounded-full transition-all transform hover:scale-105 hover:shadow-lg"
            >
              QUERO TER ACESSO AO GUIA COMPLETO
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;