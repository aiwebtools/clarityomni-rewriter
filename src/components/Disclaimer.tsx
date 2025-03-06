
import React from 'react';

const Disclaimer = () => {
  return (
    <section id="disclaimer" className="relative py-20 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-cyber-dark z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(155,135,245,0.1)_0%,_transparent_70%)]"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Legal <span className="text-gradient">Disclaimer</span>
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto glass-card rounded-xl p-8">
          <div className="space-y-6 text-gray-300">
            <section>
              <h3 className="text-xl font-semibold mb-3 text-white">Terms of Use</h3>
              <p className="mb-2">
                By using Clarity Omni GPT ("the Service"), you agree to these terms and conditions. If you do not agree, please do not use the Service.
              </p>
              <p>
                The Service is provided "as is" without warranties of any kind, either express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, or non-infringement.
              </p>
            </section>
            
            <section>
              <h3 className="text-xl font-semibold mb-3 text-white">Limitation of Liability</h3>
              <p className="mb-2">
                AI Web Tools LLC, its affiliates, partners, and licensors shall not be liable for any direct, indirect, incidental, special, consequential, or exemplary damages resulting from your use of the Service.
              </p>
              <p>
                This includes, but is not limited to, damages for loss of profits, goodwill, use, data, or other intangible losses, even if we have been advised of the possibility of such damages.
              </p>
            </section>
            
            <section>
              <h3 className="text-xl font-semibold mb-3 text-white">Content Responsibility</h3>
              <p className="mb-2">
                You are solely responsible for the content you submit to Clarity Omni GPT. We do not claim ownership of your content, but you grant us a license to use it for providing and improving the Service.
              </p>
              <p>
                You must not submit content that is illegal, offensive, or violates the rights of others, including intellectual property rights.
              </p>
            </section>
            
            <section>
              <h3 className="text-xl font-semibold mb-3 text-white">No Guarantee of Results</h3>
              <p>
                While Clarity Omni GPT strives to maintain the exact meaning and context of your submitted text, we cannot guarantee that the rewritten content will be error-free, completely accurate, or suitable for your specific needs. Users should always review the output for appropriateness before use.
              </p>
            </section>
            
            <section>
              <h3 className="text-xl font-semibold mb-3 text-white">Third-Party Services</h3>
              <p>
                Clarity Omni GPT is built on OpenAI's technology. By using our Service, you also agree to OpenAI's terms of service and privacy policy. For more information, please visit <a href="https://openai.com/policies" target="_blank" rel="noopener noreferrer" className="text-cyber-purple hover:underline">OpenAI's Policies</a>.
              </p>
            </section>
            
            <section>
              <h3 className="text-xl font-semibold mb-3 text-white">Changes to Terms</h3>
              <p>
                We reserve the right to modify these terms at any time. Your continued use of the Service after such changes constitutes your acceptance of the new terms.
              </p>
            </section>
            
            <div className="pt-6 border-t border-white/10">
              <p className="text-sm text-gray-400">
                By using Clarity Omni GPT, you acknowledge that you have read, understood, and agree to be bound by these terms. For questions about these terms, please contact <a href="mailto:contact@ai-webtools.com" className="text-cyber-purple hover:underline">contact@ai-webtools.com</a>.
              </p>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center space-x-8 mt-12">
          <a 
            href="https://openai.com/policies/privacy-policy/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-cyber-purple transition-colors"
          >
            Privacy Policy
          </a>
          <a 
            href="https://aiwebtools.ai/terms-of-services" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-cyber-purple transition-colors"
          >
            Terms of Service
          </a>
        </div>
      </div>
    </section>
  );
};

export default Disclaimer;
