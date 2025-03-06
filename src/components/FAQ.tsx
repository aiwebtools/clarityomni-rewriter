
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
  const faqs = [
    {
      question: "How does Clarity Omni GPT maintain the original meaning?",
      answer: "Clarity Omni GPT uses advanced AI to analyze your text's structure, meaning, and context. It preserves every detail while reorganizing and clarifying the language, ensuring that nothing is omitted or altered in meaning."
    },
    {
      question: "Can I use Clarity Omni GPT for technical or specialized content?",
      answer: "Absolutely! Clarity Omni GPT is designed to handle specialized terminology across various fields including technical, legal, medical, and academic writing. It maintains the precise terminology while improving overall readability."
    },
    {
      question: "Does Clarity Omni change the tone or style of my writing?",
      answer: "No, Clarity Omni preserves your unique voice and style. It focuses solely on improving clarity without altering your tone, personality, or writing style characteristics."
    },
    {
      question: "Is there a character limit for text submissions?",
      answer: "Clarity Omni works with both short snippets and longer texts. For optimal results with very long documents, we recommend processing them in sections of up to 4,000 characters at a time."
    },
    {
      question: "Can I use Clarity Omni for languages other than English?",
      answer: "Yes, Clarity Omni supports multiple languages. While it performs best with English, it can effectively process and clarify text in many other languages as well."
    },
    {
      question: "How is Clarity Omni different from other rewriting tools?",
      answer: "Unlike other tools that paraphrase or summarize, Clarity Omni has a singular focus: improving clarity while strictly preserving your original message. It doesn't attempt to shorten, expand, or substantially alter your text—only to make it clearer."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-20 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-cyber-darker z-0">
        <div className="absolute right-0 top-20 w-64 h-64 bg-cyber-purple/10 rounded-full filter blur-[80px]"></div>
        <div className="absolute left-0 bottom-20 w-64 h-64 bg-cyber-blue/10 rounded-full filter blur-[80px]"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Everything you need to know about Clarity Omni GPT and how it can help improve your writing.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="mb-4 glass-card rounded-xl overflow-hidden"
            >
              <button 
                className="w-full px-6 py-4 flex items-center justify-between text-left"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="font-medium text-white">{faq.question}</span>
                <span className="ml-4 flex-shrink-0">
                  {openIndex === index ? (
                    <Minus className="text-cyber-purple" size={20} />
                  ) : (
                    <Plus className="text-cyber-purple" size={20} />
                  )}
                </span>
              </button>
              
              <div 
                id={`faq-answer-${index}`}
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 pb-6' : 'max-h-0'
                }`}
              >
                <p className="text-gray-400">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
