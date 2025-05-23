// src/components/TargetAudience.jsx
import React from 'react';

const TargetAudience = () => {
  const profiles = [
    {
      icon: "👨‍💼",
      title: "Profissionais Insatisfeitos",
      description: "Pessoas que trabalham em empregos tradicionais e querem construir fontes de renda alternativas para alcançar liberdade financeira."
    },
    {
      icon: "🧑‍🎓",
      title: "Estudantes Visionários",
      description: "Jovens que desejam começar cedo a construir patrimônio e não querem depender apenas de empregos convencionais."
    },
    {
      icon: "👵",
      title: "Aposentados Ativos",
      description: "Pessoas que querem complementar sua aposentadoria ou iniciar novos projetos sem exigências físicas."
    },
    {
      icon: "👩‍👧‍👦",
      title: "Pais e Mães",
      description: "Quem busca flexibilidade para trabalhar de casa e passar mais tempo com a família sem comprometer a renda."
    },
    {
      icon: "💼",
      title: "Empreendedores",
      description: "Donos de negócios que querem diversificar suas fontes de receita ou migrar para modelos mais escaláveis."
    },
    {
      icon: "🌎",
      title: "Nômades Digitais",
      description: "Pessoas que desejam viajar pelo mundo enquanto mantêm um fluxo constante de receita sem amarras geográficas."
    }
  ];

  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Para Quem é o <span className="text-green-500">Lucro Automático</span>?
            </h2>
            <p className="text-xl text-gray-300">
              Nosso método foi desenvolvido para ser aplicado por diferentes perfis
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {profiles.map((profile, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg text-center">
                <div className="text-5xl mb-4 flex justify-center">{profile.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-green-400">{profile.title}</h3>
                <p className="text-gray-300 text-sm">{profile.description}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-black p-6 rounded-lg border border-green-500">
            <h3 className="text-2xl font-bold mb-4 text-center">
              Não Precisa de Experiência Prévia
            </h3>
            <p className="text-lg mb-4">
              O Guia Definitivo do Lucro Automático foi projetado para funcionar mesmo se você:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span>Nunca trabalhou com internet antes</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span>Não tem conhecimentos técnicos avançados</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span>Tem pouco capital para investir inicialmente</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span>Tem apenas algumas horas livres por semana</span>
              </li>
            </ul>
            <div className="text-center">
              <a 
                href="#comprar" 
                className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105"
              >
                QUERO COMEÇAR MESMO DO ZERO
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;