import { Sparkles, Heart, Mic2, Play } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem, ScaleOnHover } from '@/components/ui/MotionWrappers';
import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section id="inicio" className="relative pt-32 pb-24 px-6 overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-pink-100/50 via-slate-50 to-white -z-20"></div>
            <div className="absolute top-20 right-0 w-[800px] h-[800px] bg-gradient-to-b from-pink-200/20 to-transparent rounded-full blur-[100px] -z-10"></div>

            <div className="container mx-auto grid md:grid-cols-2 gap-16 items-center">
                
                <div className="space-y-8 text-center md:text-left">
                    
                    <FadeIn delay={0.1}>
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-pink-100 text-pink-600 rounded-full text-xs font-bold tracking-wide shadow-sm uppercase">
                            <Sparkles size={14} />
                            Tendencia Viral #1 en Eventos
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] text-slate-900 tracking-tight">
                            Dilo con flores, <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">
                                grítalo cantando.
                            </span>
                        </h1>
                    </FadeIn>

                    <FadeIn delay={0.3}>
                        <p className="text-lg md:text-xl text-slate-600 md:pr-12 leading-relaxed font-light">
                            Elevamos el estándar de las sorpresas. Creamos momentos cinematográficos diseñados para emocionar y volverse inolvidables en redes sociales.
                        </p>
                    </FadeIn>

                    <StaggerContainer className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start" delay={0.4}>
                        <StaggerItem>
                            <ScaleOnHover>
                                <a href="#precios" className="group flex items-center justify-center gap-3 px-8 py-4 bg-slate-900 text-white text-lg font-semibold rounded-2xl hover:bg-pink-600 transition-all duration-300 shadow-xl shadow-slate-900/10 hover:shadow-pink-600/20">
                                    <Heart className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                    Ver Experiencias
                                </a>
                            </ScaleOnHover>
                        </StaggerItem>

                        <StaggerItem>
                            <ScaleOnHover>
                                <a href="#eventos" className="flex items-center justify-center gap-3 px-8 py-4 bg-white text-slate-700 border border-slate-200 text-lg font-semibold rounded-2xl hover:border-pink-300 hover:shadow-lg hover:shadow-pink-100 transition-all duration-300">
                                    <Mic2 className="w-5 h-5" />
                                    Servicios Eventos
                                </a>
                            </ScaleOnHover>
                        </StaggerItem>
                    </StaggerContainer>

                    <FadeIn delay={0.6} className="pt-4 flex items-center justify-center md:justify-start gap-4 text-sm text-slate-500 font-medium">
                        <div className="flex -space-x-2">
                            {[1, 2, 3, 4].map(i => (
                                <div key={i} className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center text-xs overflow-hidden">
                                    <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i}`} alt="user" />
                                </div>
                            ))}
                        </div>
                        <p>+500 clientes felices este año</p>
                    </FadeIn>
                </div>

                <motion.div 
                    initial={{ opacity: 0, x: 50, rotate: 6 }}
                    animate={{ opacity: 1, x: 0, rotate: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    className="relative group max-w-md mx-auto w-full"
                >
                    <div className="relative z-10 bg-slate-100 rounded-[2.5rem] aspect-[4/5] overflow-hidden shadow-2xl border-[8px] border-white transform md:rotate-3 group-hover:rotate-0 transition-all duration-700 ease-out">
                        <img
                            src="https://images.unsplash.com/photo-1525268771113-32d9e9021a97?auto=format&fit=crop&q=80"
                            alt="Reaction"
                            className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent flex items-end p-6 text-white">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center animate-pulse">
                                    <Play size={18} fill="white" />
                                </div>
                                <div>
                                    <p className="font-black text-base uppercase tracking-tight leading-none">Reacción real</p>
                                    <p className="text-pink-300 text-[10px] font-bold uppercase tracking-widest mt-1">#LaPatronaShow</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-pink-200/30 rounded-full blur-3xl -z-10"></div>
                </motion.div>
            </div>
        </section>
    );
}
