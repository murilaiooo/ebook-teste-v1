// src/components/Problems.jsx
import React from 'react';

const Problems = () => {
  const svgIcons = {
    horasInterminaveis: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
    salarioInsuficiente: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
      </svg>
    ),
    instabilidadeFinanceira: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6 9 12.75l4.5-4.5L21.75 18" />
      </svg>
    ),
    sonhosAdiados: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-2.666-5.43a4.5 4.5 0 0 0-8.332-1.51A4.5 4.5 0 0 0 2.25 15Z" />
      </svg>
    )
  };

  {/* Replaced emoji icons with SVGs for a modern look */}
  const commonProblems = [
    {
      title: "Trabalhando Horas Intermináveis",
      description: "Você trabalha de 8 a 12 horas por dia e sente que está trocando seu tempo por dinheiro, sem liberdade para viver como realmente quer.",
      icon: svgIcons.horasInterminaveis
    },
    {
      title: "Salário Insuficiente",
      description: "Mesmo trabalhando muito, seu salário mal cobre as despesas básicas, e parece impossível economizar ou investir.",
      icon: svgIcons.salarioInsuficiente
    },
    {
      title: "Instabilidade Financeira",
      description: "Vive com medo de perder seu emprego ou de enfrentar uma emergência que desestabilize completamente suas finanças.",
      icon: svgIcons.instabilidadeFinanceira
    },
    {
      title: "Sonhos Adiados",
      description: "Aquela viagem internacional, a casa própria ou o carro novo parecem cada vez mais distantes, apesar de todo seu esforço.",
      icon: svgIcons.sonhosAdiados
    }
  ];

  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Responsive: Adjusted headline font size and margin */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 sm:mb-12 text-center">
            Você se identifica com algum desses <span className="text-red-500">problemas?</span>
          </h2>
          
          {/* Responsive: Adjusted gap for mobile */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {commonProblems.map((problem, index) => (
              // Responsive: Adjusted padding for problem cards
              <div key={index} className="bg-gray-800 p-4 sm:p-6 rounded-lg shadow-lg">
                {/* SVG icon size is fixed (w-10 h-10), mb-4 is fine */}
                <div className="mb-4">{problem.icon}</div> 
                {/* Responsive: Title font size */}
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{problem.title}</h3>
                {/* Responsive: Description font size */}
                <p className="text-sm sm:text-base text-gray-300">{problem.description}</p>
              </div>
            ))}
          </div>
          
          {/* Responsive: Adjusted margin and padding for the "truth" box */}
          <div className="mt-10 sm:mt-12 bg-black p-4 sm:p-6 rounded-lg border border-red-500">
            {/* Responsive: Headline font size */}
            <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-center">
              A verdade sobre o mercado de trabalho tradicional
            </h3>
            {/* Responsive: Paragraph font sizes */}
            <p className="text-sm sm:text-lg mb-3 sm:mb-4">
              O modelo de trabalhar 8 horas por dia, 5 dias por semana, para ganhar um único salário está 
              <span className="text-red-500 font-bold"> ultrapassado e quebrado</span>.
            </p>
            <p className="text-sm sm:text-lg mb-3 sm:mb-4">
              Milhões de pessoas continuam nesse ciclo vicioso de trocar tempo por dinheiro, enquanto os verdadeiros vencedores do jogo financeiro descobriram o segredo: 
              <span className="text-green-500 font-bold"> fontes de renda passiva</span>.
            </p>
            <p className="text-sm sm:text-lg">
              Se você continuar dependendo apenas do seu emprego ou de um único negócio que exige sua presença constante, 
              <span className="text-red-500 font-bold"> nunca alcançará verdadeira liberdade financeira</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problems;