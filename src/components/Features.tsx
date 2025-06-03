
import React from 'react';
import { MessageCircle, Brain, CheckCheck, Globe, Type, Search } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <MessageCircle className="text-cyber-purple" size={24} />,
      title: "Preserves Exact Meaning",
      description: "Our free AI text clarifier maintains every detail and context from your original text while improving readability for better communication."
    },
    {
      icon: <Brain className="text-cyber-blue" size={24} />,
      title: "Advanced AI-Powered Clarity",
      description: "State-of-the-art artificial intelligence algorithms identify and resolve complex phrasing without changing your intended message."
    },
    {
      icon: <CheckCheck className="text-cyber-green" size={24} />,
      title: "Nothing Omitted",
      description: "Guarantees that no information is left out during the AI clarification process - perfect for academic and professional writing."
    },
    {
      icon: <Search className="text-cyber-cyan" size={24} />,
      title: "Contextual AI Understanding",
      description: "Comprehends the subtle nuances of your text to maintain its original purpose using advanced natural language processing."
    },
    {
      icon: <Type className="text-cyber-magenta" size={24} />,
      title: "Optimized Text Length",
      description: "Our AI writing assistant aims to keep the same length as your original text while dramatically improving clarity and readability."
    },
    {
      icon: <Globe className="text-cyber-orange" size={24} />,
      title: "Multi-Language AI Support",
      description: "Works effectively across various languages and writing styles - one of the most versatile free AI tools available."
    }
  ];

  return (
    <section className="relative py-20 bg-cyber-dark overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(155,135,245,0.15)_0%,_transparent_50%)] z-0"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Why Choose Our Free <span className="text-gradient">AI Tools</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            <strong>AIWEBTOOLS.AI</strong> provides industry-leading free AI tools designed with precision and care to transform unclear text into crystal-clear communication for professionals, students, and content creators.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="glass-card rounded-xl p-6 hover:border-cyber-purple/30 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="mb-4 inline-flex p-3 rounded-lg bg-black/30 border border-white/10">
                {feature.icon}
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
        
        {/* AI Image with SEO alt text */}
        <div className="mt-20 max-w-4xl mx-auto">
          <a 
            href="https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-futuristic-scene-of-an-ai-agent-with-a-halo.jpeg/:/rs=w:1200,cg:true,m" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block relative perspective-container"
          >
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyber-purple via-cyber-blue to-cyber-cyan opacity-0 hover:opacity-20 transition-opacity duration-300 pointer-events-none"></div>
            <div className="absolute inset-0 border border-cyber-purple/30 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none glass-card overflow-hidden"></div>
            <img 
              src="https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-futuristic-scene-of-an-ai-agent-with-a-halo.jpeg/:/rs=w:1200,cg:true,m" 
              alt="Free AI Tools by AIWEBTOOLS.AI - Advanced artificial intelligence technology for text clarification and content optimization" 
              className="w-full h-auto rounded-xl object-cover shadow-lg transform rotate-3d hover:scale-[1.01] transition-transform duration-500"
              style={{ aspectRatio: '16/9' }}
              loading="lazy"
            />
          </a>
        </div>
        
        {/* Additional SEO content */}
        <div className="mt-16 text-center">
          <div className="glass-card rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-white">
              Why AIWEBTOOLS.AI is Your Go-To Source for Free AI Tools
            </h3>
            <p className="text-gray-300 mb-4">
              At <strong className="text-cyber-purple">AIWEBTOOLS.AI</strong>, we specialize in creating powerful, accessible AI tools that enhance productivity and communication. Our flagship tool, Clarity Omni GPT, represents the cutting edge of AI-powered text optimization technology.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mt-6 text-sm">
              <div className="text-center">
                <div className="text-cyber-purple font-bold text-2xl">100%</div>
                <div className="text-gray-400">Free AI Tools</div>
              </div>
              <div className="text-center">
                <div className="text-cyber-blue font-bold text-2xl">24/7</div>
                <div className="text-gray-400">Available Access</div>
              </div>
              <div className="text-center">
                <div className="text-cyber-green font-bold text-2xl">∞</div>
                <div className="text-gray-400">Unlimited Usage</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
