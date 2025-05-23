// src/components/FeatureCarousel.jsx
import React, { useState, useEffect } from 'react';

const FeatureCarousel = () => {
  const features = [
    {
      icon: "📊",
      title: "Módulos Detalhados",
      description: "8 módulos completos com mais de 50 aulas passo a passo para implementar cada fonte de renda passiva.",
      image: "/assets/images/feature-1.webp"
    },
    {
      icon: "🛠️",
      title: "Ferramentas Exclusivas",
      description: "Acesso a softwares, templates e recursos que automatizam processos e potencializam seus resultados.",
      image: "/assets/images/feature-2.webp"
    },
    {
      icon: "📱",
      title: "Aplicativo Mobile",
      description: "Acesse o conteúdo de qualquer lugar, mesmo offline, através do nosso aplicativo exclusivo.",
      image: "/assets/images/feature-3.webp"
    },
    {
      icon: "👥",
      title: "Comunidade VIP",
      description: "Grupo exclusivo para alunos onde você pode tirar dúvidas e fazer networking com outros empreendedores.",
      image: "/assets/images/feature-4.webp"
    },
    {
      icon: "🎓",
      title: "Mentorias em Grupo",
      description: "Sessões mensais ao vivo onde respondemos dúvidas e oferecemos direcionamento estratégico.",
      image: "/assets/images/feature-5.webp"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextFeature = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % features.length);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  const prevFeature = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + features.length) % features.length);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextFeature();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative bg-gray-800 rounded-lg overflow-hidden">
      <div className="p-6">
        <div className={`transition-opacity duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/5 mb-6 md:mb-0">
              <div className="rounded-lg overflow-hidden">
                <img 
                  src={features[currentIndex].image}
                  alt={features[currentIndex].title}
                  className="w-full h-60 object-cover"
                />
              </div>
            </div>
            
            <div className="md:w-3/5 md:pl-8">
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-3">{features[currentIndex].icon}</div>
                <h3 className="text-2xl font-bold text-green-400">{features[currentIndex].title}</h3>
              </div>
              <p className="text-lg mb-4">
                {features[currentIndex].description}
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex justify-between px-4 pb-4">
        <button 
          className="bg-gray-700 hover:bg-gray-600 text-white rounded-full p-2 focus:outline-none"
          onClick={prevFeature}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <div className="flex space-x-2">
          {features.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-green-500' : 'bg-gray-600'}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Ver recurso ${index + 1}`}
            />
          ))}
        </div>
        
        <button 
          className="bg-gray-700 hover:bg-gray-600 text-white rounded-full p-2 focus:outline-none"
          onClick={nextFeature}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default FeatureCarousel;