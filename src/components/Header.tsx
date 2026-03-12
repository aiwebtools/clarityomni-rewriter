
import React, { useState, useEffect, useCallback } from 'react';
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
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-2 sm:py-3 bg-cyber-darker/95 backdrop-blur-lg shadow-lg' 
          : 'py-3 sm:py-5 bg-cyber-darker/80 backdrop-blur-md'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between relative">
        <Logo size={isScrolled ? 'sm' : 'md'} />
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
          <a href="#how-it-works" className="text-gray-300 hover:text-cyber-purple transition-colors text-sm lg:text-base">
            How It Works
          </a>
          <a href="#faq" className="text-gray-300 hover:text-cyber-purple transition-colors text-sm lg:text-base">
            FAQ
          </a>
          <a href="#disclaimer" className="text-gray-300 hover:text-cyber-purple transition-colors text-sm lg:text-base">
            Disclaimer
          </a>
          <a 
            href="https://aiwebtools.lovable.app/?via=aiwebtools" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-300 hover:text-cyber-purple transition-colors text-sm lg:text-base"
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
          className="md:hidden text-white hover:text-cyber-purple transition-colors p-2 -mr-2 active:scale-90 transition-transform"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu with smooth transition */}
      <div 
        className={`md:hidden fixed inset-x-0 bg-cyber-darker/98 backdrop-blur-xl shadow-2xl border-t border-white/10 z-50 transition-all duration-300 ease-in-out ${
          isMobileMenuOpen 
            ? 'opacity-100 translate-y-0 pointer-events-auto' 
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
        style={{ top: 'var(--header-height, 56px)' }}
      >
        <nav className="flex flex-col py-4 px-6 space-y-1 max-h-[calc(100vh-60px)] overflow-y-auto">
          <a 
            href="#how-it-works" 
            className="text-gray-300 hover:text-cyber-purple active:text-cyber-purple transition-colors py-3 text-lg border-b border-white/5"
            onClick={closeMobileMenu}
          >
            How It Works
          </a>
          <a 
            href="#faq" 
            className="text-gray-300 hover:text-cyber-purple active:text-cyber-purple transition-colors py-3 text-lg border-b border-white/5"
            onClick={closeMobileMenu}
          >
            FAQ
          </a>
          <a 
            href="#disclaimer" 
            className="text-gray-300 hover:text-cyber-purple active:text-cyber-purple transition-colors py-3 text-lg border-b border-white/5"
            onClick={closeMobileMenu}
          >
            Disclaimer
          </a>
          <a 
            href="https://aiwebtools.lovable.app/?via=aiwebtools" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-300 hover:text-cyber-purple active:text-cyber-purple transition-colors py-3 text-lg border-b border-white/5"
            onClick={closeMobileMenu}
          >
            More AI Tools
          </a>
          <div className="pt-3">
            <GlowingButton 
              href="https://chatgpt.com/g/g-kwfUgztcs-clarity-omni-gpt" 
              target="_blank" 
              rel="noopener noreferrer"
              color="purple"
              className="w-full justify-center"
            >
              USE CLARITY OMNI
            </GlowingButton>
          </div>
        </nav>
      </div>
      
      {/* Backdrop overlay */}
      {isMobileMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/50 z-40"
          onClick={closeMobileMenu}
          aria-hidden="true"
        />
      )}
    </header>
  );
};

export default Header;
