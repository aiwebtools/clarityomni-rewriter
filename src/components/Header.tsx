
import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import GlowingButton from './GlowingButton';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-3 bg-cyber-darker/95 backdrop-blur-lg shadow-lg' 
          : 'py-5 bg-cyber-darker/80 backdrop-blur-md'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between relative">
        <Logo size={isScrolled ? 'sm' : 'md'} />
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#how-it-works" className="text-gray-300 hover:text-cyber-purple transition-colors">
            How It Works
          </a>
          <a href="#faq" className="text-gray-300 hover:text-cyber-purple transition-colors">
            FAQ
          </a>
          <a href="#disclaimer" className="text-gray-300 hover:text-cyber-purple transition-colors">
            Disclaimer
          </a>
          <a 
            href="https://www.aiwebtools.ai" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-300 hover:text-cyber-purple transition-colors"
          >
            More AI Tools
          </a>
          <GlowingButton 
            href="https://chatgpt.com/g/g-kwfUgztcs-clarity-omni-gpt" 
            target="_blank" 
            rel="noopener noreferrer"
            color="purple"
          >
            USE CLARITY OMNI
          </GlowingButton>
        </nav>
        
        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white hover:text-cyber-purple transition-colors"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-cyber-darker/95 backdrop-blur-lg shadow-lg py-4 px-4 space-y-4 border-t border-white/10 animate-fade-in z-50">
          <a 
            href="#how-it-works" 
            className="block text-gray-300 hover:text-cyber-purple transition-colors py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            How It Works
          </a>
          <a 
            href="#faq" 
            className="block text-gray-300 hover:text-cyber-purple transition-colors py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            FAQ
          </a>
          <a 
            href="#disclaimer" 
            className="block text-gray-300 hover:text-cyber-purple transition-colors py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Disclaimer
          </a>
          <a 
            href="https://www.aiwebtools.ai" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="block text-gray-300 hover:text-cyber-purple transition-colors py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            More AI Tools
          </a>
          <GlowingButton 
            href="https://chatgpt.com/g/g-kwfUgztcs-clarity-omni-gpt" 
            target="_blank" 
            rel="noopener noreferrer"
            color="purple"
            className="w-full"
          >
            USE CLARITY OMNI
          </GlowingButton>
        </div>
      )}
    </header>
  );
};

export default Header;
