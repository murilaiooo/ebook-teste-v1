// src/components/TargetAudience.jsx
import React from 'react';

const TargetAudience = () => {
  const svgIcons = {
    profissionaisInsatisfeitos: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-12 h-12">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.073a2.25 2.25 0 0 1-2.243 2.243H5.993A2.25 2.25 0 0 1 3.75 18.223V14.15M20.25 14.15V11.25a2.25 2.25 0 0 0-2.25-2.25h-5.379a2.25 2.25 0 0 0-2.25 2.25v2.9M20.25 14.15v-2.9C20.25 9.45 18.85 8 16.5 8h-9a2.25 2.25 0 0 0-2.25 2.25v2.9m9-3.85V5.25a2.25 2.25 0 0 0-2.25-2.25H9.75A2.25 2.25 0 0 0 7.5 5.25v2.9m3.75 0h3.75" />
      </svg>
    ),
    estudantesVisionarios: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-12 h-12">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.627 48.627 0 0 1 12 20.904a48.627 48.627 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
      </svg>
    ),
    // Changed from UserIcon to SparklesIcon for "Aposentados Ativos" to better reflect activity/vitality
    aposentadosAtivos: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-12 h-12">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L1.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.25 12l2.847-.813a4.5 4.5 0 0 0 3.09-3.09L24 5.25l-.813 2.846a4.5 4.5 0 0 0-3.09 3.09L18.25 12ZM18.25 12l-.813 2.846a4.5 4.5 0 0 0-3.09 3.09L12.5 21l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L20.25 12l-2.007-2.007Z" />
      </svg>
    ),
    paisMaes: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-12 h-12">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-3.741-5.208M19.5 12v.75A.75.75 0 0 1 18.75 15h-.043a2.25 2.25 0 0 1-1.583-.659 2.25 2.25 0 0 0-1.583-.659h-.652a3 3 0 0 0-3.741 5.208 9.093 9.093 0 0 0 3.741.479M8.25 12h6M8.25 15h6M4.5 16.5a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3h10.5a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H4.5Z" />
      </svg>
    ),
    empreendedores: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-12 h-12">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h6M9 12.75h6M9 18.75h6" />
      </svg>
    ),
    nomadesDigitais: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-12 h-12">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A11.978 11.978 0 0 1 12 16.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 0 21 12c0-.778.099-1.533.284-2.253M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A11.978 11.978 0 0 1 12 16.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 0 21 12c0-.778.099-1.533.284-2.253" />
      </svg>
    )
  };

  {/* Replaced emoji icons with SVGs for a modern look */}
  const profiles = [
    {
      icon: svgIcons.profissionaisInsatisfeitos,
      title: "Profissionais Insatisfeitos",
      description: "Pessoas que trabalham em empregos tradicionais e querem construir fontes de renda alternativas para alcançar liberdade financeira."
    },
    {
      icon: svgIcons.estudantesVisionarios,
      title: "Estudantes Visionários",
      description: "Jovens que desejam começar cedo a construir patrimônio e não querem depender apenas de empregos convencionais."
    },
    {
      icon: svgIcons.aposentadosAtivos,
      title: "Aposentados Ativos",
      description: "Pessoas que querem complementar sua aposentadoria ou iniciar novos projetos sem exigências físicas."
    },
    {
      icon: svgIcons.paisMaes,
      title: "Pais e Mães",
      description: "Quem busca flexibilidade para trabalhar de casa e passar mais tempo com a família sem comprometer a renda."
    },
    {
      icon: svgIcons.empreendedores,
      title: "Empreendedores",
      description: "Donos de negócios que querem diversificar suas fontes de receita ou migrar para modelos mais escaláveis."
    },
    {
      icon: svgIcons.nomadesDigitais,
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