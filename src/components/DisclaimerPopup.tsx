
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, CheckCircle } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import GlowingButton from './GlowingButton';

const DisclaimerPopup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Check if user has already agreed to the disclaimer
    const hasAgreed = localStorage.getItem('clarityOmniDisclaimerAgreed');
    
    if (!hasAgreed) {
      // Show popup after a slight delay for better UX
      const timer = setTimeout(() => {
        setShowPopup(true);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAgree = () => {
    // Save agreement to localStorage
    localStorage.setItem('clarityOmniDisclaimerAgreed', 'true');
    setShowPopup(false);
    
    // Show confirmation toast
    toast({
      title: "Welcome to Clarity Omni GPT!",
      description: "Thank you for agreeing to our terms. You're all set!",
      variant: "default",
    });
  };

  return (
    <AnimatePresence>
      {showPopup && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={() => setShowPopup(false)}
          />
          
          {/* Popup */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 15 }}
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-[90%] max-w-md max-h-[85vh] overflow-auto"
          >
            <div className="relative neo-blur rounded-xl overflow-hidden">
              {/* Glowing border effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyber-purple/50 via-cyber-blue/30 to-cyber-magenta/50 opacity-50 animate-pulse-glow"></div>
              
              {/* Content */}
              <div className="relative p-4 sm:p-6 glass-card rounded-xl">
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-cyber-darker p-3 rounded-full border border-cyber-purple/50">
                  <Shield className="w-8 h-8 text-cyber-purple" />
                </div>
                
                <div className="flex justify-between items-center mt-6 mb-4">
                  <h2 className="text-xl sm:text-2xl font-bold text-gradient">
                    DISCLAIMER
                  </h2>
                  
                  <button
                    onClick={handleAgree}
                    className="group relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-cyber-purple via-cyber-blue to-cyber-magenta opacity-70 group-hover:opacity-90 animate-shimmer bg-[length:200%_100%] rounded-lg"></div>
                    <div className="relative bg-cyber-darker/40 backdrop-blur-sm flex items-center justify-center py-1.5 sm:py-2 px-2 sm:px-3 rounded-lg border border-white/10 group-hover:border-white/20 transition-colors">
                      <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 text-cyber-green group-hover:animate-pulse" />
                      <span className="font-bold text-white group-hover:text-glow tracking-wider text-xs sm:text-sm">I AGREE</span>
                    </div>
                  </button>
                </div>
                
                <div className="space-y-3 text-xs sm:text-sm text-gray-300 overflow-y-auto max-h-[50vh]">
                  <p>
                    By using Clarity Omni GPT, you acknowledge and agree that:
                  </p>
                  
                  <ul className="list-disc pl-5 space-y-1.5 sm:space-y-2">
                    <li>This tool aims to rewrite text for clarity without changing context or omitting information.</li>
                    <li>We cannot guarantee 100% accuracy in all cases or for all types of content.</li>
                    <li>You are responsible for reviewing all output for accuracy and appropriateness.</li>
                    <li>This service is provided "as is" without warranties of any kind.</li>
                    <li>You agree to our <a href="https://aiwebtools.ai/terms-of-services" className="text-cyber-purple hover:underline">Terms of Service</a> and <a href="https://openai.com/policies/privacy-policy" className="text-cyber-purple hover:underline">Privacy Policy</a>.</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default DisclaimerPopup;
