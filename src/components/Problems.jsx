// src/components/Problems.jsx
import React from 'react';

const Problems = () => {
  const commonProblems = [
    {
      title: "Trabalhando Horas Intermináveis",
      description: "Você trabalha de 8 a 12 horas por dia e sente que está trocando seu tempo por dinheiro, sem liberdade para viver como realmente quer.",
      icon: "⏰"
    },
    {
      title: "Salário Insuficiente",
      description: "Mesmo trabalhando muito, seu salário mal cobre as despesas básicas, e parece impossível economizar ou investir.",
      icon: "💸"
    },
    {
      title: "Instabilidade Financeira",
      description: "Vive com medo de perder seu emprego ou de enfrentar uma emergência que desestabilize completamente suas finanças.",
      icon: "📉"
    },
    {
      title: "Sonhos Adiados",
      description: "Aquela viagem internacional, a casa própria ou o carro novo parecem cada vez mais distantes, apesar de todo seu esforço.",
      icon: "💭"
    }
  ];

  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Você se identifica com algum desses <span className="text-red-500">problemas?</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {commonProblems.map((problem, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <div className="text-4xl mb-4">{problem.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{problem.title}</h3>
                <p className="text-gray-300">{problem.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 bg-black p-6 rounded-lg border border-red-500">
            <h3 className="text-2xl font-semibold mb-4 text-center">
              A verdade sobre o mercado de trabalho tradicional
            </h3>
            <p className="text-lg mb-4">
              O modelo de trabalhar 8 horas por dia, 5 dias por semana, para ganhar um único salário está 
              <span className="text-red-500 font-bold"> ultrapassado e quebrado</span>.
            </p>
            <p className="text-lg mb-4">
              Milhões de pessoas continuam nesse ciclo vicioso de trocar tempo por dinheiro, enquanto os verdadeiros vencedores do jogo financeiro descobriram o segredo: 
              <span className="text-green-500 font-bold"> fontes de renda passiva</span>.
            </p>
            <p className="text-lg">
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