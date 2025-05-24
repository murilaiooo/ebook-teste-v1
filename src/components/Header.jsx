// src/components/Header.jsx
import React, { useState, useEffect } from 'react';

const Header = ({ scrollPosition }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isScrolled = scrollPosition > 50;
  
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black bg-opacity-90 py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          {/* Placeholder for /assets/images/logo.webp */}
          <img 
            src="https://placehold.co/100x100?text=Logo" 
            alt="Lucro Automático Logo" 
            className="h-12 mr-2"
          />
          <span className="text-2xl font-bold text-green-500">Lucro Automático</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-6">
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#beneficios" className="hover:text-green-500 transition-colors">Benefícios</a></li>
              <li><a href="#depoimentos" className="hover:text-green-500 transition-colors">Depoimentos</a></li>
              <li><a href="#faq" className="hover:text-green-500 transition-colors">FAQ</a></li>
            </ul>
          </nav>
          <a 
            href="#comprar" 
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-full transition-colors"
          >
            Comprar Agora
          </a>
        </div>
        
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-95 z-50 md:hidden">
          <div className="flex justify-end p-4">
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="text-white"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex flex-col items-center justify-center h-full">
            <nav className="text-center">
              <ul className="space-y-8">
                <li><a href="#beneficios" onClick={() => setIsMenuOpen(false)} className="text-2xl hover:text-green-500 transition-colors">Benefícios</a></li>
                <li><a href="#depoimentos" onClick={() => setIsMenuOpen(false)} className="text-2xl hover:text-green-500 transition-colors">Depoimentos</a></li>
                <li><a href="#faq" onClick={() => setIsMenuOpen(false)} className="text-2xl hover:text-green-500 transition-colors">FAQ</a></li>
                <li className="mt-12">
                  <a 
                    href="#comprar" 
                    onClick={() => setIsMenuOpen(false)}
                    className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full transition-colors text-xl"
                  >
                    Comprar Agora
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;