import { Star, Quote } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/MotionWrappers';
import { reviews } from '@/data/content';

export default function Testimonials() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-20 left-0 w-64 h-64 bg-pink-200/30 rounded-full blur-[80px] -z-10"></div>
      
      <div className="container mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
            Lo que dicen nuestros clientes
          </h2>
          <div className="flex justify-center items-center gap-2 mb-4">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
            </div>
            <span className="text-slate-600 font-medium">4.9/5 en Redes Sociales</span>
          </div>
        </FadeIn>

        <StaggerContainer className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <StaggerItem key={index} className="h-full">
              <div className="bg-white p-8 rounded-2xl shadow-lg shadow-slate-200/50 border border-slate-100 hover:border-pink-200 transition-colors h-full flex flex-col">
                <Quote className="text-pink-200 mb-4 w-10 h-10" />
                
                <p className="text-slate-600 mb-6 flex-grow italic leading-relaxed">
                  "{review.content}"
                </p>
                
                <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                  <div>
                    <h4 className="font-bold text-slate-900">{review.name}</h4>
                    <span className="text-xs text-pink-600 font-semibold uppercase tracking-wider">{review.role}</span>
                  </div>
                  <span className="text-xs text-slate-400">{review.date}</span>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}