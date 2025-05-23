// src/components/TestimonialCarousel.jsx
import React, { useState, useEffect } from 'react';

const TestimonialCarousel = () => {
  {/* Placeholders used for testimonial images. Original paths were /assets/images/testimonial-N.webp */}
  const testimonials = [
    {
      name: "Carlos Silva",
      location: "São Paulo, SP",
      occupation: "Ex-Gerente de Vendas",
      image: "https://placehold.co/128x128?text=Person+1",
      text: "Antes do Guia Definitivo do Lucro Automático, eu trabalhava 12 horas por dia como gerente de vendas. Hoje, ganho mais do que ganhava no meu antigo emprego, trabalhando apenas 3 horas por dia com minhas lojas de dropshipping automáticas.",
      earnings: "R$ 12.500 / mês",
      source: "Dropshipping Otimizado"
    },
    {
      name: "Mariana Costa",
      location: "Rio de Janeiro, RJ",
      occupation: "Ex-Professora",
      image: "https://placehold.co/128x128?text=Person+2",
      text: "Comecei a implementar as estratégias do curso enquanto ainda dava aulas. Em 3 meses, minha renda com produtos digitais já superava meu salário como professora. Hoje tenho liberdade geográfica e de tempo para cuidar da minha família.",
      earnings: "R$ 8.700 / mês",
      source: "Produtos Digitais"
    },
    {
      name: "Rafael Mendes",
      location: "Florianópolis, SC",
      occupation: "Estudante Universitário",
      image: "https://placehold.co/128x128?text=Person+3",
      text: "Comecei a aplicar o sistema enquanto ainda estava na faculdade. Em 5 meses, já estava ganhando mais do que muitos profissionais formados. O mais incrível é que agora ganho dinheiro mesmo enquanto durmo!",
      earnings: "R$ 5.300 / mês",
      source: "Marketing de Afiliados"
    },
    {
      name: "Juliana Ferreira",
      location: "Belo Horizonte, MG",
      occupation: "Ex-Contadora",
      image: "https://placehold.co/128x128?text=Person+4",
      text: "Depois de 15 anos trabalhando como contadora, estava cansada da rotina. Com o Lucro Automático, consegui montar meu blog e canal do YouTube que hoje geram uma renda mensal maior do que eu jamais imaginei possível.",
      earnings: "R$ 15.200 / mês",
      source: "Blogs e YouTube"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="relative">
      {/* Responsive: Main card padding adjusted */}
      <div className="bg-gray-800 rounded-lg p-4 sm:p-6 shadow-lg">
        {/* Responsive: Layout explicitly defined for mobile (flex-col) and md+ (flex-row) */}
        <div className="mb-6 sm:mb-8 flex flex-col md:flex-row items-center text-center md:text-left">
          {/* Responsive: Image container margin adjusted */}
          <div className="md:w-1/3 mb-4 sm:mb-6 md:mb-0">
            <div className="relative inline-block"> {/* inline-block to contain badge correctly */}
              {/* Responsive: Image size adjusted for smaller screens */}
              <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden mx-auto border-4 border-green-500">
                <img 
                  src={currentTestimonial.image}
                  alt={`Foto de ${currentTestimonial.name}`}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Responsive: Badge text size and padding adjusted */}
              <div className="absolute bottom-0 right-0 bg-green-500 text-black px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-bold">
                {currentTestimonial.earnings}
              </div>
            </div>
          </div>
          
          {/* Responsive: Text content padding and text sizes adjusted */}
          <div className="md:w-2/3 md:pl-6"> {/* Reduced padding on md for slightly tighter layout if needed */}
            <div className="mb-3 sm:mb-4">
              <p className="text-base sm:text-lg mb-3 sm:mb-4 italic"> {/* Quote text size and margin */}
                "{currentTestimonial.text}"
              </p>
              <div className="mb-1 font-semibold text-base sm:text-lg">{currentTestimonial.name}</div>
              <div className="mb-1 text-xs sm:text-sm text-gray-400">{currentTestimonial.location}</div>
              <div className="mb-2 text-xs sm:text-sm text-gray-400">{currentTestimonial.occupation}</div>
              <div className="text-green-500 font-medium text-xs sm:text-sm">
                Fonte de Renda: {currentTestimonial.source}
              </div>
            </div>
          </div>
        </div>
        
        {/* Responsive: Dots spacing */}
        <div className="flex justify-center space-x-2 sm:space-x-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-green-500' : 'bg-gray-600'}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Ver depoimento ${index + 1}`}
            />
          ))}
        </div>
      </div>
      
      <button 
        className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-green-500 rounded-full p-2 text-black hover:bg-green-600 focus:outline-none hidden md:block"
        onClick={prevTestimonial}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button 
        className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-green-500 rounded-full p-2 text-black hover:bg-green-600 focus:outline-none hidden md:block"
        onClick={nextTestimonial}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default TestimonialCarousel;