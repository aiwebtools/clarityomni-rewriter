
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Clarity Omni transformed my academic papers, making them easier to understand without sacrificing any of the technical information. A game-changer for my research communication.",
      name: "Dr. Alex Chen",
      title: "University Professor",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      quote: "As a non-native English speaker, I struggled with making my reports clear. Clarity Omni helped me maintain my exact message while making my writing more professional and precise.",
      name: "Maria Rodriguez",
      title: "Marketing Analyst",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      quote: "My legal documents need to be precise but understandable. Clarity Omni strikes that perfect balance, keeping every detail intact while making the language more accessible.",
      name: "James Wilson",
      title: "Corporate Attorney",
      avatar: "https://randomuser.me/api/portraits/men/85.jpg"
    },
    {
      quote: "Our customer emails are now clearer and more effective thanks to Clarity Omni. It maintains our brand voice while ensuring our message is crystal clear. Support tickets have decreased by 23%!",
      name: "Sarah Johnson",
      title: "Customer Success Manager",
      avatar: "https://randomuser.me/api/portraits/women/29.jpg"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-cyber-darker z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(155,135,245,0.1)_0%,_transparent_70%)]"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            What Our <span className="text-gradient">Users Say</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Join thousands of professionals who trust Clarity Omni GPT to enhance their communication.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Testimonial Card */}
            <div className="glass-card rounded-xl p-8 md:p-10 relative">
              <div className="absolute -top-6 left-10 text-cyber-purple">
                <Quote size={48} />
              </div>
              
              <div className="pt-6">
                <blockquote className="text-xl md:text-2xl text-gray-200 mb-8">
                  "{testimonials[activeIndex].quote}"
                </blockquote>
                
                <div className="flex items-center">
                  <img 
                    src={testimonials[activeIndex].avatar} 
                    alt={testimonials[activeIndex].name} 
                    className="w-14 h-14 rounded-full border-2 border-cyber-purple mr-4 object-cover"
                    loading="lazy"
                  />
                  <div>
                    <div className="font-bold text-white">{testimonials[activeIndex].name}</div>
                    <div className="text-cyber-purple">{testimonials[activeIndex].title}</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Navigation */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeIndex 
                      ? 'bg-cyber-purple w-6' 
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            {/* Arrow Controls */}
            <button 
              className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-full md:-translate-x-1/2 bg-cyber-darker p-2 rounded-full border border-white/10 hover:border-cyber-purple/50 transition-colors duration-300 hidden md:block"
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="text-white" />
            </button>
            
            <button 
              className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-full md:translate-x-1/2 bg-cyber-darker p-2 rounded-full border border-white/10 hover:border-cyber-purple/50 transition-colors duration-300 hidden md:block"
              onClick={nextTestimonial}
              aria-label="Next testimonial"
            >
              <ChevronRight className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
