
import React, { useEffect, useRef } from 'react';
import GlowingButton from './GlowingButton';
import { Sparkle, ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const orbitRef = useRef<HTMLDivElement>(null);
  
  // Simulate 3D effect with mouse movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!orbitRef.current) return;
      
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      
      const deltaX = (clientX - centerX) / centerX;
      const deltaY = (clientY - centerY) / centerY;
      
      orbitRef.current.style.transform = `rotateX(${deltaY * -5}deg) rotateY(${deltaX * 5}deg) rotateZ(0)`;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  return (
    <section className="relative min-h-screen pt-20 pb-16 overflow-hidden flex items-center justify-center">
      {/* Background gradient and effects */}
      <div className="absolute inset-0 bg-cyber-darker z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(155,135,245,0.15)_0%,_transparent_70%)]"></div>
        <div className="absolute top-10 left-10 w-72 h-72 bg-cyber-purple/20 rounded-full filter blur-[100px]"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-cyber-blue/20 rounded-full filter blur-[100px]"></div>
      </div>
      
      {/* Grid overlay effect */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDUwIEwgNTAgNTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PHBhdGggZD0iTSA1MCAwIEwgNTAgNTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIiAvPjwvc3ZnPg==')] opacity-30 z-0"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-20">
        {/* Text content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <div className="inline-flex items-center px-2.5 py-1 mb-4 rounded-full bg-cyber-purple/10 border border-cyber-purple/20">
            <Sparkle className="text-cyber-purple mr-2" size={16} />
            <span className="text-xs text-white">Next-Gen AI Text Clarifier</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
            Rewrite With <span className="text-gradient">Perfect Clarity</span>
          </h1>
          
          <p className="text-lg text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0">
            Clarity Omni GPT rewrites your text with perfect clarity, preserving every detail and context while making it easier to understand.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <GlowingButton
              href="https://chatgpt.com/g/g-kwfUgztcs-clarity-omni-gpt"
              target="_blank"
              rel="noopener noreferrer"
              color="purple"
              size="lg"
            >
              Try Clarity Omni Now
            </GlowingButton>
            
            <a href="#how-it-works" className="flex items-center text-white hover:text-cyber-purple transition-colors">
              <span>How it works</span>
              <ArrowRight size={16} className="ml-2" />
            </a>
          </div>
        </div>
        
        {/* 3D Orbit Animation */}
        <div className="lg:w-1/2 perspective-container">
          <div 
            ref={orbitRef}
            className="relative w-full max-w-md mx-auto rotate-3d"
            style={{ transformStyle: 'preserve-3d', transition: 'transform 0.2s ease' }}
          >
            {/* Center sphere */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full bg-gradient-to-tr from-cyber-purple to-cyber-blue animate-pulse-glow"></div>
            
            {/* Orbiting elements */}
            {[...Array(6)].map((_, i) => (
              <div 
                key={i}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full"
                style={{ 
                  transform: `rotateY(${i * 60}deg) rotateX(${i % 2 * 40}deg)`, 
                  transformStyle: 'preserve-3d'
                }}
              >
                <div 
                  className="absolute w-5 h-5 rounded-full bg-cyber-cyan"
                  style={{ 
                    transformStyle: 'preserve-3d',
                    transform: `translateZ(150px) translateX(${Math.sin(i) * 20}px)`,
                    animation: `float ${5 + i}s ease-in-out infinite`,
                    animationDelay: `${i * 0.5}s`,
                    boxShadow: '0 0 15px rgba(77, 234, 255, 0.7)'
                  }}
                ></div>
              </div>
            ))}
            
            {/* Animated rings */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full border border-cyber-purple/30 animate-rotate-slow"></div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 rounded-full border border-cyber-blue/30 animate-rotate-slow" style={{ animationDirection: 'reverse' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
