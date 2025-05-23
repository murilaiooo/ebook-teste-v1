// src/components/WhyDifferent.jsx
import React from 'react';

const WhyDifferent = () => {
  const differentiators = [
    {
      icon: "🎯",
      title: "Foco em Resultados Reais",
      description: "Enquanto outros cursos prometem milhões da noite para o dia, nós nos concentramos em estratégias comprovadas que geram resultados reais e consistentes."
    },
    {
      icon: "📋",
      title: "Passo a Passo Completo",
      description: "Cada estratégia é explicada em detalhes, desde o absoluto zero até a monetização avançada, sem deixar lacunas de conhecimento."
    },
    {
      icon: "🔄",
      title: "Múltiplas Fontes de Renda",
      description: "Em vez de apostar tudo em um único método, você aprenderá 8 fontes diferentes para diversificar sua renda e minimizar riscos."
    },
    {
      icon: "🔑",
      title: "Acesso a Ferramentas Exclusivas",
      description: "Fornecemos acesso a softwares, templates e recursos que automatizam processos e potencializam seus resultados."
    },
    {
      icon: "🛠️",
      title: "Suporte Técnico e Estratégico",
      description: "Nossa equipe de especialistas está disponível para responder dúvidas e ajudar a superar obstáculos em sua jornada."
    },
    {
      icon: "🚀",
      title: "Atualizações Constantes",
      description: "O mercado digital evolui rapidamente, e nosso conteúdo é regularmente atualizado para incluir as mais recentes estratégias."
    }
  ];

  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Por que o <span className="text-green-500">Lucro Automático</span> é diferente?
            </h2>
            <p className="text-xl text-gray-300">
              Existem muitos cursos por aí, mas nenhum com nossa abordagem completa
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {differentiators.map((item, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg flex items-start">
                <div className="text-4xl mr-4">{item.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-green-400">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-lg shadow-lg">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/4 mb-6 md:mb-0 flex justify-center">
                <div className="text-6xl">🏆</div>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-2xl font-bold mb-4 text-center md:text-left">
                  A Diferença que Faz Você <span className="text-green-500">Chegar ao Topo</span>
                </h3>
                <p className="text-lg mb-4">
                  Mais de 90% das pessoas que tentam ganhar dinheiro online <strong>falham</strong> porque 
                  seguem métodos dispersos ou desatualizados que não funcionam mais no cenário atual.
                </p>
                <p className="text-lg">
                  O Guia Definitivo do Lucro Automático te dá <strong>exatamente o que funciona hoje</strong>, em 2023, 
                  com estratégias atualizadas e testadas por milhares de alunos com resultados comprovados.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyDifferent;