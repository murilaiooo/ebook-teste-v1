// src/components/CountdownTimer.jsx
import React, { useState, useEffect } from 'react';
import { calculateTimeLeft } from '../utils/countdownUtils';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    
    return () => clearTimeout(timer);
  });
  
  const timerComponents = [
    {
      label: 'Horas',
      value: timeLeft.hours
    },
    {
      label: 'Minutos',
      value: timeLeft.minutes
    },
    {
      label: 'Segundos',
      value: timeLeft.seconds
    }
  ];
  
  return (
    <div className="flex justify-center">
      <div className="flex space-x-4">
        {timerComponents.map((component, index) => (
          <div key={index} className="text-center">
            <div className="bg-black border-2 border-red-500 rounded-lg p-3 min-w-[80px]">
              <div className="text-3xl md:text-4xl font-bold text-white">
                {String(component.value).padStart(2, '0')}
              </div>
            </div>
            <div className="text-sm mt-1 text-gray-400">{component.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountdownTimer;