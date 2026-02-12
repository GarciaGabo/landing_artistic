import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { faqData } from '../data/content';
import { FadeIn, StaggerContainer, StaggerItem } from '../components/ui/MotionWrappers';
import { motion, AnimatePresence } from 'framer-motion';

export default function FAQ() {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleFAQ = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        
        <div className="grid md:grid-cols-12 gap-12">
          
          <FadeIn className="md:col-span-4">
            <h2 className="text-3xl font-bold text-slate-900 tracking-tighter mb-4">
              Preguntas<br/>Frecuentes
            </h2>
            <div className="w-12 h-1.5 bg-pink-600 rounded-full mb-6"></div>
            <p className="text-slate-500 text-sm leading-relaxed">
              ¿No encuentras tu respuesta? <br/>
              <a href="#" className="text-pink-600 font-bold hover:underline">Contáctanos al WhatsApp</a>
            </p>
          </FadeIn>

          <StaggerContainer className="md:col-span-8 space-y-2">
            {faqData.map((item, index) => {
              const isActive = activeAccordion === index;
              return (
                <StaggerItem key={index}>
                  <motion.div 
                    layout 
                    className={`rounded-xl transition-colors duration-300 overflow-hidden ${isActive ? 'bg-slate-50' : 'bg-white'}`}
                  >
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full flex justify-between items-start p-5 text-left focus:outline-none group"
                    >
                      <span className={`font-semibold text-lg pr-8 transition-colors ${isActive ? 'text-pink-600' : 'text-slate-800'}`}>
                        {item.q}
                      </span>
                      <span className={`mt-1 transition-transform duration-300 text-pink-600`}>
                        {isActive ? <Minus size={20} /> : <Plus size={20} />}
                      </span>
                    </button>
                    
                    <AnimatePresence>
                        {isActive && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                            >
                                <p className="px-5 pb-5 text-slate-500 leading-relaxed text-base">
                                    {item.a}
                                </p>
                            </motion.div>
                        )}
                    </AnimatePresence>

                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
