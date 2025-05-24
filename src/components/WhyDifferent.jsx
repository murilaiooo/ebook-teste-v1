// src/components/WhyDifferent.jsx
import React from 'react';

const WhyDifferent = () => {
  const svgIcons = {
    focoResultados: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 0 1-1.161.886l-.143.048a1.107 1.107 0 0 0-.57 1.664l.143.143L10.07 15.57a.625.625 0 0 0 .928 0l.143-.143a1.107 1.107 0 0 0-.57-1.664l-.143-.048a2.25 2.25 0 0 1-1.161-.886l-.51-.766c-.319-.48-.225-1.121.216-1.49l1.068-.89a1.125 1.125 0 0 0 .405-.864v-.568M12.75 3.03h-.004M12.75 3.03c.056 0 .11.004.162.012m-.162-.012a2.256 2.256 0 0 1-2.223 2.223M15 19.5v-1.5a2.25 2.25 0 0 0-2.25-2.25H11.25a2.25 2.25 0 0 0-2.25 2.25v1.5m3.75 0h.004M12.75 19.5h-.004M15 19.5c.056 0 .11.004.162.012m-.162-.012a2.256 2.256 0 0 1-2.223 2.223M4.5 10.5v-1.5a2.25 2.25 0 0 1 2.25-2.25H8.25a2.25 2.25 0 0 1 2.25 2.25v1.5m3.75 0h.004M12.75 10.5h-.004M4.5 10.5c.056 0 .11.004.162.012M4.5 10.5a2.256 2.256 0 0 0-2.223 2.223M19.5 10.5v-1.5a2.25 2.25 0 0 0-2.25-2.25H15.75a2.25 2.25 0 0 0-2.25 2.25v1.5m3.75 0h.004M12.75 10.5h-.004M19.5 10.5c.056 0 .11.004.162.012M19.5 10.5a2.256 2.256 0 0 0-2.223 2.223M4.5 19.5v-1.5a2.25 2.25 0 0 1 2.25-2.25H8.25a2.25 2.25 0 0 1 2.25 2.25v1.5m3.75 0h.004M12.75 19.5h-.004M4.5 19.5c.056 0 .11.004.162.012M4.5 19.5a2.256 2.256 0 0 0-2.223 2.223" />
      </svg>
    ),
    passoCompleto: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25Z" />
      </svg>
    ),
    multiplasFontes: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375" />
      </svg>
    ),
    ferramentasExclusivas: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z" />
      </svg>
    ),
    suporteTecnico: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.83-5.83M11.42 15.17A3 3 0 0 1 6.344 12.16l-4.128-1.252A.972.972 0 0 1 2.992 9.408l1.252-4.128A3 3 0 0 1 6.344 2.82l7.119 7.119a3 3 0 0 1 2.526 5.03l.043.043L11.42 15.17Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="m11.42 15.17-.379-.379a2.625 2.625 0 0 1 0-3.712l2.69-2.69a2.625 2.625 0 0 1 0-3.712l.379-.379M11.42 15.17l2.69 2.69" />
      </svg>
    ),
    atualizacoesConstantes: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 11.667 0l3.181-3.183m-4.991-4.992v4.992m0 0H9.345m0 0-3.181-3.183a8.25 8.25 0 0 1 11.667 0l3.181 3.183" />
      </svg>
    )
  };

  {/* Replaced emoji icons with SVGs for a modern look */}
  const differentiators = [
    {
      icon: svgIcons.focoResultados,
      title: "Foco em Resultados Reais",
      description: "Enquanto outros cursos prometem milhões da noite para o dia, nós nos concentramos em estratégias comprovadas que geram resultados reais e consistentes."
    },
    {
      icon: svgIcons.passoCompleto,
      title: "Passo a Passo Completo",
      description: "Cada estratégia é explicada em detalhes, desde o absoluto zero até a monetização avançada, sem deixar lacunas de conhecimento."
    },
    {
      icon: svgIcons.multiplasFontes,
      title: "Múltiplas Fontes de Renda",
      description: "Em vez de apostar tudo em um único método, você aprenderá 8 fontes diferentes para diversificar sua renda e minimizar riscos."
    },
    {
      icon: svgIcons.ferramentasExclusivas,
      title: "Acesso a Ferramentas Exclusivas",
      description: "Fornecemos acesso a softwares, templates e recursos que automatizam processos e potencializam seus resultados."
    },
    {
      icon: svgIcons.suporteTecnico,
      title: "Suporte Técnico e Estratégico",
      description: "Nossa equipe de especialistas está disponível para responder dúvidas e ajudar a superar obstáculos em sua jornada."
    },
    {
      icon: svgIcons.atualizacoesConstantes,
      title: "Atualizações Constantes",
      description: "O mercado digital evolui rapidamente, e nosso conteúdo é regularmente atualizado para incluir as mais recentes estratégias."
    }
  ];

  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Responsive: Adjusted headline font sizes and margin */}
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
              Por que o <span className="text-green-500">Lucro Automático</span> é diferente?
            </h2>
            <p className="text-lg sm:text-xl text-gray-300">
              Existem muitos cursos por aí, mas nenhum com nossa abordagem completa
            </p>
          </div>
          
          {/* Responsive: Grid gap and bottom margin adjusted */}
          <div className="grid md:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-10">
            {differentiators.map((item, index) => (
              // Responsive: Differentiator card padding and flex alignment
              <div key={index} className="bg-gray-800 p-4 sm:p-6 rounded-lg flex items-start">
                {/* SVG icon size is fixed (w-10 h-10), mr adjusted */}
                <div className="mr-3 sm:mr-4 flex-shrink-0">{item.icon}</div>
                <div>
                  {/* Responsive: Title and description font sizes */}
                  <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2 text-green-400">{item.title}</h3>
                  <p className="text-sm sm:text-base text-gray-300">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Responsive: "A Diferença" box padding, margins, and text sizes */}
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-4 sm:p-6 rounded-lg shadow-lg">
            {/* Layout is already flex-col md:flex-row items-center */}
            <div className="flex flex-col md:flex-row items-center">
              {/* Responsive: Trophy icon container margin */}
              <div className="w-full md:w-1/4 mb-4 sm:mb-6 md:mb-0 flex justify-center">
                {/* Replaced trophy emoji with SVG for a modern look. Size is already w-16 h-16 */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-16 h-16 text-yellow-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-4.5A3.375 3.375 0 0 0 12.75 9H11.25A3.375 3.375 0 0 0 7.5 12.375v4.5m0 0h9" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 21.75H14.25M12 15.75V21.75M12 15.75A3.375 3.375 0 0 1 15.375 12H18.75a3.375 3.375 0 0 1 3.375 3.375M12 15.75A3.375 3.375 0 0 0 8.625 12H5.25A3.375 3.375 0 0 0 1.875 15.375" />
                </svg>
              </div>
              {/* Responsive: Text content alignment and sizes */}
              <div className="w-full md:w-3/4 text-center md:text-left">
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                  A Diferença que Faz Você <span className="text-green-500">Chegar ao Topo</span>
                </h3>
                <p className="text-sm sm:text-lg mb-3 sm:mb-4">
                  Mais de 90% das pessoas que tentam ganhar dinheiro online <strong>falham</strong> porque 
                  seguem métodos dispersos ou desatualizados que não funcionam mais no cenário atual.
                </p>
                <p className="text-sm sm:text-lg">
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