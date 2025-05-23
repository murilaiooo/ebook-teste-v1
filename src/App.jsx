// src/App.jsx
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Problems from './components/Problems';
import Solution from './components/Solution';
import Expert from './components/Expert';
import Testimonials from './components/Testimonials';
import Features from './components/Features';
import WhyDifferent from './components/WhyDifferent';
import TargetAudience from './components/TargetAudience';
import ComparisonTable from './components/ComparisonTable';
import Guarantee from './components/Guarantee';
import CallToAction from './components/CallToAction';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);

  // Throttled scroll handler to improve performance
  function throttle(func, limit) {
    let inThrottle;
    return function() {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    }
  }
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    const throttledScrollHandler = throttle(handleScroll, 150);
    
    window.addEventListener('scroll', throttledScrollHandler);
    
    return () => {
      window.removeEventListener('scroll', throttledScrollHandler);
    };
  }, []);

  return (
    <div className="font-sans bg-gradient-to-b from-black to-[#111] min-h-screen text-white">
      <Header scrollPosition={scrollPosition} />
      <main>
        <HeroSection />
        <Problems />
        <Solution />
        <Expert />
        <Testimonials />
        <Features />
        <WhyDifferent />
        <TargetAudience />
        <ComparisonTable />
        <Guarantee />
        <CallToAction />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;