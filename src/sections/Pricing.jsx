import { Check } from 'lucide-react';
import { getWhatsAppLink } from '../utils/whatsapp';
import { FadeIn, StaggerContainer, StaggerItem, ScaleOnHover } from '../components/ui/MotionWrappers';

export default function Pricing() {
    return (
        <section id="precios" className="py-24 bg-slate-50 overflow-hidden">
            <div className="container mx-auto px-6">
                
                <FadeIn className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
                        Elige tu Impacto
                    </h2>
                    <p className="text-slate-600">
                        Precios transparentes para momentos invaluables.
                    </p>
                </FadeIn>

                <StaggerContainer className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
                    
                    <StaggerItem>
                        <div className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100 hover:border-slate-300 transition-all duration-300 hover:-translate-y-2 h-full">
                            <h3 className="text-xl font-bold text-slate-800 mb-2">Serenata Express</h3>
                            <p className="text-slate-400 text-sm mb-6">Detalle íntimo y romántico.</p>
                            <div className="text-3xl font-bold text-slate-900 mb-8">$1,XXX</div>
                            <ul className="space-y-4 mb-8 text-sm text-slate-600">
                                <li className="flex items-center gap-3"><Check size={18} className="text-green-500" /> 2 Canciones acústicas</li>
                                <li className="flex items-center gap-3"><Check size={18} className="text-green-500" /> Entrega protocolaria</li>
                                <li className="flex items-center gap-3"><Check size={18} className="text-green-500" /> Audio portátil</li>
                            </ul>
                            <ScaleOnHover className="w-full">
                                <a href={getWhatsAppLink("Serenata Express")} className="w-full block text-center py-3 rounded-xl border border-slate-200 text-slate-700 font-bold hover:bg-slate-50 transition-colors">
                                    Cotizar
                                </a>
                            </ScaleOnHover>
                        </div>
                    </StaggerItem>

                    <StaggerItem>
                        <div className="bg-white rounded-3xl p-10 shadow-2xl shadow-pink-200/50 border border-pink-100 relative transform md:-translate-y-4 md:scale-105 z-10 transition-transform duration-300 hover:scale-[1.08]">
                            <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-pink-500 to-purple-600 rounded-t-3xl"></div>
                            <div className="inline-block bg-pink-100 text-pink-700 text-xs font-bold px-3 py-1 rounded-full mb-4">MÁS POPULAR</div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-1">Show Viral VIP</h3>
                            <p className="text-slate-500 text-sm mb-6">La experiencia completa estilo "El Patrón".</p>
                            <div className="text-4xl font-extrabold text-slate-900 mb-8 tracking-tight">$2,XXX</div>
                            <ul className="space-y-4 mb-10 text-slate-700 font-medium">
                                <li className="flex items-center gap-3"><div className="bg-pink-100 p-1 rounded-full"><Check size={14} className="text-pink-600" /></div> Entrada con Show & Gritos</li>
                                <li className="flex items-center gap-3"><div className="bg-pink-100 p-1 rounded-full"><Check size={14} className="text-pink-600" /></div> 3 Canciones Dedicadas</li>
                                <li className="flex items-center gap-3"><div className="bg-pink-100 p-1 rounded-full"><Check size={14} className="text-pink-600" /></div> <strong>Disparo de Confeti</strong></li>
                                <li className="flex items-center gap-3"><div className="bg-pink-100 p-1 rounded-full"><Check size={14} className="text-pink-600" /></div> Video Reels 4K Editado</li>
                                <li className="flex items-center gap-3"><div className="bg-pink-100 p-1 rounded-full"><Check size={14} className="text-pink-600" /></div> Ramo de 50 Rosas</li>
                            </ul>
                             <ScaleOnHover className="w-full">
                                <a href={getWhatsAppLink("Show Viral VIP")} className="w-full block text-center py-4 rounded-xl bg-gradient-to-r from-slate-900 to-slate-800 text-white font-bold transition-transform hover:shadow-lg">
                                    ¡Lo quiero!
                                </a>
                            </ScaleOnHover>
                        </div>
                    </StaggerItem>

                    <StaggerItem>
                         <div className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100 hover:border-slate-300 transition-all duration-300 hover:-translate-y-2 h-full">
                            <h3 className="text-xl font-bold text-slate-800 mb-2">Cantante Pro</h3>
                            <p className="text-slate-400 text-sm mb-6">Para bodas y eventos formales.</p>
                            <div className="text-3xl font-bold text-slate-900 mb-8">$3,XXX <span className="text-lg text-slate-400 font-normal">/hr</span></div>
                            <ul className="space-y-4 mb-8 text-sm text-slate-600">
                                <li className="flex items-center gap-3"><Check size={18} className="text-slate-400" /> Sets de 45 minutos</li>
                                <li className="flex items-center gap-3"><Check size={18} className="text-slate-400" /> Repertorio Versátil</li>
                                <li className="flex items-center gap-3"><Check size={18} className="text-slate-400" /> Equipo de Audio Incluido</li>
                            </ul>
                            <ScaleOnHover className="w-full">
                                <a href={getWhatsAppLink("Cantante para Evento")} className="w-full block text-center py-3 rounded-xl border border-slate-200 text-slate-700 font-bold hover:bg-slate-50 transition-colors">
                                    Consultar
                                </a>
                            </ScaleOnHover>
                        </div>
                    </StaggerItem>

                </StaggerContainer>
            </div>
        </section>
    );
}
