import { useEffect } from 'react';

const ScrollAnimation = () => {
  useEffect(() => {
    const animateOnScroll = () => {
      const elements = document.querySelectorAll(
        '.fade-in, .slide-in-left, .slide-in-right, .scale-up, .stagger-item'
      );
      
      elements.forEach((element) => {
        // Get element position relative to viewport
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        
        // Check if element is in viewport (with some buffer)
        const isInViewport = rect.top <= windowHeight * 0.85;
        
        if (isInViewport) {
          element.classList.add('visible');
        }
      });
    };
    
    // Run once on initial load
    animateOnScroll();
    
    // Add scroll event listener
    window.addEventListener('scroll', animateOnScroll);
    
    // Clean up
    return () => window.removeEventListener('scroll', animateOnScroll);
  }, []);
  
  return null; // This component doesn't render anything
};

export default ScrollAnimation;