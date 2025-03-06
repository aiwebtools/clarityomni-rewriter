
import React from 'react';
import { Sparkles } from 'lucide-react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
}

const Logo = ({ size = 'md', showSubtitle = true }: LogoProps) => {
  const sizeClasses = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-4xl',
  };

  const subtitleSizeClasses = {
    sm: 'text-[8px]',
    md: 'text-[10px]',
    lg: 'text-xs',
  };

  return (
    <div className="flex items-center relative z-50">
      <div className="relative mr-2">
        <div className="absolute inset-0 bg-gradient-to-r from-cyber-purple to-cyber-blue rounded-full animate-pulse-glow blur-md opacity-70"></div>
        <div className="relative bg-cyber-darker/40 rounded-full p-1.5">
          <Sparkles className="relative z-10 text-white" size={size === 'sm' ? 24 : size === 'md' ? 32 : 40} />
        </div>
      </div>
      <div className="flex flex-col items-start">
        <div className={`font-bold ${sizeClasses[size]} text-gradient animate-neon-glow tracking-wider`}>
          CLARITY OMNI GPT
        </div>
        {showSubtitle && (
          <a 
            href="https://www.aiwebtools.ai" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`${subtitleSizeClasses[size]} text-gray-400 hover:text-cyber-purple transition-colors duration-300`}
          >
            Presented by AiWebTools.Ai
          </a>
        )}
      </div>
    </div>
  );
};

export default Logo;
