
import React from 'react';
import { MessageSquare, Sparkles, CheckCheck } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <MessageSquare className="text-cyber-purple" size={28} />,
      title: "Input Your Text",
      description: "Paste any text that needs clarity improvement without worrying about losing information or context."
    },
    {
      icon: <Sparkles className="text-cyber-blue" size={28} />,
      title: "AI Processing",
      description: "Our advanced AI analyzes your text, identifying ways to improve clarity while preserving every detail."
    },
    {
      icon: <CheckCheck className="text-cyber-green" size={28} />,
      title: "Perfect Clarity",
      description: "Receive your rewritten text with enhanced clarity, maintaining the exact same information and context."
    }
  ];

  return (
    <section id="how-it-works" className="relative py-20 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-cyber-darker z-0">
        <div className="absolute top-0 left-1/3 w-64 h-64 bg-cyber-blue/10 rounded-full filter blur-[80px]"></div>
        <div className="absolute bottom-0 right-1/3 w-64 h-64 bg-cyber-purple/10 rounded-full filter blur-[80px]"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            How <span className="text-gradient">Clarity Omni</span> Works
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Experience the power of perfect clarity with our simple three-step process, designed to make your text shine without changing its meaning.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyber-purple/50 to-transparent"></div>
          
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="glass-card rounded-xl p-8 hover:border-cyber-purple/30 transition-all duration-300 group relative"
            >
              {/* Step number */}
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-cyber-darker flex items-center justify-center border border-cyber-purple/30 z-10">
                <span className="text-cyber-purple font-bold">{index + 1}</span>
              </div>
              
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center bg-cyber-darker border border-white/10 group-hover:border-cyber-purple/30 transition-all duration-300">
                  {step.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-white">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
            </div>
          ))}
        </div>
        
        {/* Example */}
        <div className="mt-20 glass-card rounded-xl p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-white text-center">See It In Action</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="text-sm font-medium text-cyber-purple">Original Text:</div>
              <div className="p-4 bg-black/30 rounded-lg border border-white/10 text-gray-300">
                The sys has functionality that lets users to input data and it moves it to a place for storage and the UI shows status updates when this is happening so users know whats going on with their data.
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="text-sm font-medium text-cyber-green">Clarity Omni Output:</div>
              <div className="p-4 bg-black/30 rounded-lg border border-white/10 text-gray-300">
                The system has functionality that allows users to input data, which it transfers to storage. The UI displays status updates during this process, so users know what's happening with their data.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
