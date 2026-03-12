
import React from 'react';
import Logo from './Logo';
import GlowingButton from './GlowingButton';
import { Mail, Phone, ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative bg-cyber-darker pt-16 pb-8 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(155,135,245,0.1)_0%,_transparent_70%)]"></div>
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyber-purple/30 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Logo and Info */}
          <div className="lg:col-span-1">
            <Logo size="md" />
            <p className="mt-4 text-gray-400 max-w-xs">
              Rewrite any text with perfect clarity, preserving every detail while making it easier to understand.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#how-it-works" className="text-gray-400 hover:text-cyber-purple transition-colors">How It Works</a></li>
              <li><a href="#faq" className="text-gray-400 hover:text-cyber-purple transition-colors">FAQ</a></li>
              <li><a href="#disclaimer" className="text-gray-400 hover:text-cyber-purple transition-colors">Disclaimer</a></li>
              <li>
                <a 
                  href="https://aiwebtools.lovable.app/?via=aiwebtools" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyber-purple transition-colors flex items-center"
                >
                  More AI Tools
                  <ExternalLink size={14} className="ml-1" />
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-white font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="tel:+14758008096" 
                  className="text-gray-400 hover:text-cyber-purple transition-colors flex items-center"
                >
                  <Phone size={16} className="mr-2" />
                  (475) 800-8096
                </a>
              </li>
              <li>
                <a 
                  href="mailto:Contact@ai-webtools.com" 
                  className="text-gray-400 hover:text-cyber-purple transition-colors flex items-center"
                >
                  <Mail size={16} className="mr-2" />
                  Contact@ai-webtools.com
                </a>
              </li>
            </ul>
          </div>
          
          {/* CTA */}
          <div>
            <h3 className="text-white font-bold mb-4">Try It Now</h3>
            <GlowingButton 
              href="https://chatgpt.com/g/g-kwfUgztcs-clarity-omni-gpt" 
              target="_blank" 
              rel="noopener noreferrer"
              color="purple"
              className="w-full justify-center mb-4"
            >
              USE CLARITY OMNI
            </GlowingButton>
            <a 
              href="https://www.aiwebtools.ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full block text-center px-6 py-3 rounded-lg border border-cyber-purple/50 text-cyber-purple hover:bg-cyber-purple/10 transition-colors duration-300"
            >
              Discover More AI Tools
            </a>
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <a 
              href="https://www.aiwebtools.ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyber-purple transition-colors"
            >
              © {currentYear} AI WEB TOOLS LLC. All rights reserved.
            </a>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://openai.com/policies/privacy-policy/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyber-purple transition-colors text-sm"
            >
              Privacy Policy
            </a>
            <a 
              href="https://aiwebtools.ai/terms-of-services" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyber-purple transition-colors text-sm"
            >
              Terms of Service
            </a>
          </div>
        </div>
        
        {/* Oval button */}
        <div className="fixed bottom-6 right-6 z-50">
          <a 
            href="https://www.aiwebtools.ai" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center px-6 py-3 bg-gradient-to-r from-cyber-purple to-cyber-blue rounded-full text-white shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <span>More AI Tools</span>
            <ExternalLink size={16} className="ml-2" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
