// src/utils/countdownUtils.js
export const calculateTimeLeft = () => {
  // Set a fixed deadline for the countdown (e.g., 24 hours from whenever the user loads the page)
  // Save it in localStorage so it persists between page refreshes
  if (!localStorage.getItem('countdownDeadline')) {
    const now = new Date();
    const deadline = new Date(now.getTime() + 24 * 60 * 60 * 1000); // 24 hours from now
    localStorage.setItem('countdownDeadline', deadline.toISOString());
  }
  
  const deadline = new Date(localStorage.getItem('countdownDeadline'));
  const now = new Date();
  const difference = deadline - now;
  
  if (difference <= 0) {
    // If the countdown has ended, reset it for another 24 hours
    const newDeadline = new Date(now.getTime() + 24 * 60 * 60 * 1000);
    localStorage.setItem('countdownDeadline', newDeadline.toISOString());
    return {
      hours: 23,
      minutes: 59,
      seconds: 59
    };
  }
  
  let timeLeft = {
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60)
  };
  
  return timeLeft;
};