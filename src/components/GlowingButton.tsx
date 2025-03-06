
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface GlowingButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  color?: 'purple' | 'blue' | 'cyan' | 'green' | 'yellow' | 'orange' | 'red';
  size?: 'sm' | 'md' | 'lg';
  variant?: 'solid' | 'outline' | 'ghost';
  target?: string;
  rel?: string;
}

const GlowingButton = ({
  children,
  href,
  onClick,
  className,
  color = 'purple',
  size = 'md',
  variant = 'solid',
  target,
  rel,
}: GlowingButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const colorClasses = {
    purple: {
      solid: 'bg-cyber-purple text-white hover:bg-cyber-purple/90',
      outline: 'border border-cyber-purple text-cyber-purple hover:bg-cyber-purple/10',
      ghost: 'text-cyber-purple hover:bg-cyber-purple/10',
      glow: 'rgba(155, 135, 245, 0.7)',
    },
    blue: {
      solid: 'bg-cyber-blue text-white hover:bg-cyber-blue/90',
      outline: 'border border-cyber-blue text-cyber-blue hover:bg-cyber-blue/10',
      ghost: 'text-cyber-blue hover:bg-cyber-blue/10',
      glow: 'rgba(14, 165, 233, 0.7)',
    },
    cyan: {
      solid: 'bg-cyber-cyan text-black hover:bg-cyber-cyan/90',
      outline: 'border border-cyber-cyan text-cyber-cyan hover:bg-cyber-cyan/10',
      ghost: 'text-cyber-cyan hover:bg-cyber-cyan/10',
      glow: 'rgba(77, 234, 255, 0.7)',
    },
    green: {
      solid: 'bg-cyber-green text-black hover:bg-cyber-green/90',
      outline: 'border border-cyber-green text-cyber-green hover:bg-cyber-green/10',
      ghost: 'text-cyber-green hover:bg-cyber-green/10',
      glow: 'rgba(59, 255, 136, 0.7)',
    },
    yellow: {
      solid: 'bg-cyber-yellow text-black hover:bg-cyber-yellow/90',
      outline: 'border border-cyber-yellow text-cyber-yellow hover:bg-cyber-yellow/10',
      ghost: 'text-cyber-yellow hover:bg-cyber-yellow/10',
      glow: 'rgba(240, 255, 59, 0.7)',
    },
    orange: {
      solid: 'bg-cyber-orange text-white hover:bg-cyber-orange/90',
      outline: 'border border-cyber-orange text-cyber-orange hover:bg-cyber-orange/10',
      ghost: 'text-cyber-orange hover:bg-cyber-orange/10',
      glow: 'rgba(249, 115, 22, 0.7)',
    },
    red: {
      solid: 'bg-cyber-red text-white hover:bg-cyber-red/90',
      outline: 'border border-cyber-red text-cyber-red hover:bg-cyber-red/10',
      ghost: 'text-cyber-red hover:bg-cyber-red/10',
      glow: 'rgba(255, 85, 85, 0.7)',
    },
  };

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const buttonStyle = {
    boxShadow: isHovered 
      ? `0 0 10px ${colorClasses[color].glow}, 0 0 20px ${colorClasses[color].glow}` 
      : 'none',
    transition: 'all 0.3s ease',
  };

  const ButtonContent = () => (
    <span className="relative z-10 flex items-center justify-center gap-2">
      {children}
    </span>
  );

  if (href) {
    return (
      <a
        href={href}
        className={cn(
          'rounded-md font-medium relative overflow-hidden transition-all duration-300',
          colorClasses[color][variant],
          sizeClasses[size],
          className
        )}
        style={buttonStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        target={target}
        rel={rel}
      >
        <ButtonContent />
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={cn(
        'rounded-md font-medium relative overflow-hidden transition-all duration-300',
        colorClasses[color][variant],
        sizeClasses[size],
        className
      )}
      style={buttonStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <ButtonContent />
    </button>
  );
};

export default GlowingButton;
