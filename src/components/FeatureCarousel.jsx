// src/components/FeatureCarousel.jsx
import React, { useState, useEffect } from 'react';

const FeatureCarousel = () => {
  {/* Placeholders used for feature images. Original paths were /assets/images/feature-N.webp */}
  const features = [
    {
      icon: "📊",
      title: "Módulos Detalhados",
      description: "8 módulos completos com mais de 50 aulas passo a passo para implementar cada fonte de renda passiva.",
      image: "https://placehold.co/600x400?text=Feature+1"
    },
    {
      icon: "🛠️",
      title: "Ferramentas Exclusivas",
      description: "Acesso a softwares, templates e recursos que automatizam processos e potencializam seus resultados.",
      image: "https://placehold.co/600x400?text=Feature+2"
    },
    {
      icon: "📱",
      title: "Aplicativo Mobile",
      description: "Acesse o conteúdo de qualquer lugar, mesmo offline, através do nosso aplicativo exclusivo.",
      image: "https://placehold.co/600x400?text=Feature+3"
    },
    {
      icon: "👥",
      title: "Comunidade VIP",
      description: "Grupo exclusivo para alunos onde você pode tirar dúvidas e fazer networking com outros empreendedores.",
      image: "https://placehold.co/600x400?text=Feature+4"
    },
    {
      icon: "🎓",
      title: "Mentorias em Grupo",
      description: "Sessões mensais ao vivo onde respondemos dúvidas e oferecemos direcionamento estratégico.",
      image: "https://placehold.co/600x400?text=Feature+5"
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
      {/* Responsive: Main content padding adjusted */}
      <div className="p-4 sm:p-6">
        <div className={`transition-opacity duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
          {/* Layout already flex-col md:flex-row items-center, which is good */}
          <div className="flex flex-col md:flex-row items-center">
            {/* Responsive: Image container margin adjusted */}
            <div className="w-full md:w-2/5 mb-4 sm:mb-6 md:mb-0">
              <div className="rounded-lg overflow-hidden">
                {/* Responsive: Image height adjusted */}
                <img 
                  src={features[currentIndex].image}
                  alt={features[currentIndex].title}
                  className="w-full h-48 sm:h-52 md:h-60 object-cover" // Adjusted height for mobile
                />
              </div>
            </div>
            
            {/* Responsive: Text content padding and text sizes adjusted */}
            <div className="w-full md:w-3/5 md:pl-6 text-center md:text-left"> {/* Added text-center for mobile */}
              <div className="flex items-center justify-center md:justify-start mb-2 sm:mb-4">
                {/* Responsive: Emoji icon size */}
                <div className="text-3xl sm:text-4xl mr-2 sm:mr-3">{features[currentIndex].icon}</div>
                {/* Responsive: Title font size */}
                <h3 className="text-xl sm:text-2xl font-bold text-green-400">{features[currentIndex].title}</h3>
              </div>
              {/* Responsive: Description font size and margin */}
              <p className="text-sm sm:text-base md:text-lg mb-3 sm:mb-4">
                {features[currentIndex].description}
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Responsive: Navigation controls padding adjusted */}
      <div className="flex justify-between px-3 sm:px-4 pb-3 sm:pb-4">
        {/* Responsive: Button padding and SVG size */}
        <button 
          className="bg-gray-700 hover:bg-gray-600 text-white rounded-full p-1.5 sm:p-2 focus:outline-none"
          onClick={prevFeature}
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        {/* Responsive: Dots container spacing */}
        <div className="flex items-center space-x-1.5 sm:space-x-2">
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