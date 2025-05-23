// src/components/Features.jsx
import React from 'react';
import FeatureCarousel from './FeatureCarousel';

const Features = () => {
  const incomeSources = [
    {
      title: "Produtos Digitais",
      icon: "📚",
      description: "Crie e venda e-books, cursos ou templates que os clientes compram repetidamente sem seu envolvimento direto"
    },
    {
      title: "Marketing de Afiliados",
      icon: "🔗",
      description: "Promova produtos de terceiros e ganhe comissões por cada venda realizada através dos seus links"
    },
    {
      title: "YouTube Monetizado",
      icon: "🎬",
      description: "Crie um canal que gera receita através de anúncios, parcerias e vendas de produtos"
    },
    {
      title: "Blogs e Sites de Conteúdo",
      icon: "💻",
      description: "Desenvolva plataformas que geram renda através de anúncios, links de afiliados e produtos próprios"
    },
    {
      title: "Dropshipping Otimizado",
      icon: "📦",
      description: "Monte uma loja online com processos automatizados onde você não precisa estocar produtos"
    },
    {
      title: "Aplicativos e Software",
      icon: "📱",
      description: "Crie aplicativos que geram receita recorrente através de assinaturas ou anúncios"
    },
    {
      title: "Comunidades e Memberships",
      icon: "👥",
      description: "Desenvolva comunidades fechadas onde membros pagam mensalidades para ter acesso a conteúdos exclusivos"
    },
    {
      title: "Investimentos Digitais",
      icon: "📊",
      description: "Estratégias de investimento em ativos digitais com potencial de valorização e renda passiva"
    }
  ];

  return (
    <section id="beneficios" className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-green-500">8 Fontes de Renda Passiva</span> Que Você Vai Dominar
            </h2>
            <p className="text-xl text-gray-300">
              O Guia Definitivo do Lucro Automático ensina você a implementar e escalar cada uma dessas fontes
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {incomeSources.map((source, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg flex">
                <div className="text-4xl mr-4">{source.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-green-400">{source.title}</h3>
                  <p className="text-gray-300 text-sm">{source.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              O Que Você Encontra No Guia
            </h3>
            <p className="text-xl text-gray-300">
              Conteúdo completo e prático para implementar imediatamente
            </p>
          </div>
          
          <FeatureCarousel />
          
          <div className="mt-12 text-center">
            <a 
              href="#comprar" 
              className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold text-xl py-4 px-10 rounded-full transition-all transform hover:scale-105 hover:shadow-lg"
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