import { Mic2, Music, Star, Award } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem, ScaleOnHover } from '../components/ui/MotionWrappers';

export default function ArtistProfile() {
    return (
        <section id="artista" className="py-24 bg-slate-50 relative overflow-hidden">
            
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-pink-50 to-transparent -z-10"></div>
            <div className="absolute bottom-20 left-20 w-72 h-72 bg-purple-200/20 rounded-full blur-[80px] -z-10"></div>

            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    
                    <FadeIn className="relative mx-auto lg:mx-0 max-w-md w-full">
                        <ScaleOnHover>
                            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-900/10 border-8 border-white aspect-[3/4] group">
                                <img 
                                    src="https://wallpapercave.com/wp/wp9386284.jpg"
                                    alt="Cantante Profesional" 
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                
                                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    
                                </div>
                            </div>
                        </ScaleOnHover>

                        <div className="absolute -bottom-6 -right-6 z-20 bg-white p-6 rounded-2xl shadow-xl shadow-slate-200 border border-slate-100 hidden md:block animate-bounce-slow">
                            <div className="flex items-center gap-4">
                                <div className="bg-pink-100 p-3 rounded-full text-pink-600">
                                    <Award size={24} />
                                </div>
                                <div>
                                    <p className="text-2xl font-bold text-slate-900 leading-none">10+ Años</p>
                                    <p className="text-xs text-slate-500 font-medium uppercase tracking-wider mt-1">Trayectoria</p>
                                </div>
                            </div>
                        </div>

                        <div className="absolute -top-10 -left-10 w-32 h-32 bg-[radial-gradient(#cbd5e1_2px,transparent_2px)] [background-size:16px_16px] -z-10"></div>
                    </FadeIn>

                    <div>
                        <FadeIn>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-100 text-pink-700 text-xs font-bold uppercase tracking-wider mb-6">
                                <Mic2 size={14} />
                                La Voz Principal
                            </div>
                            
                            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                                Más que una voz, <br/>
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">
                                    creamos emociones.
                                </span>
                            </h2>
                            
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                Hola, soy <span className="font-bold text-slate-800">[Nombre]</span>. He dedicado mi vida a interpretar las canciones que marcan historias. 
                                Mi estilo fusiona la elegancia vocal con la energía necesaria para hacer de tu sorpresa un momento viral.
                            </p>
                        </FadeIn>

                        <StaggerContainer className="grid sm:grid-cols-2 gap-6 mb-10">
                            {[
                                { icon: <Music className="text-purple-500" />, title: "Repertorio Versátil", desc: "Desde Luis Miguel hasta Banda y Pop actual." },
                                { icon: <Star className="text-yellow-500" />, title: "Calidad de Estudio", desc: "Técnica vocal profesional, sin desafines." },
                            ].map((item, idx) => (
                                <StaggerItem key={idx}>
                                    <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                                        <div className="mb-3">{item.icon}</div>
                                        <h3 className="font-bold text-slate-900 mb-1">{item.title}</h3>
                                        <p className="text-sm text-slate-500">{item.desc}</p>
                                    </div>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>

                        <FadeIn delay={0.4}>
                            <div className="p-6 bg-slate-900 rounded-2xl text-slate-300 italic relative">
                                <div className="absolute top-4 left-4 text-slate-700">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21L14.017 18C14.017 16.896 14.325 16.053 14.941 15.471C15.557 14.889 16.516 14.598 17.817 14.598L19.502 14.598L19.502 8.00195L15.302 8.00195C14.475 8.00195 13.843 8.35195 13.407 9.05295C12.971 9.75395 12.752 10.903 12.752 12.502L12.752 21L14.017 21ZM5.00293 21L5.00293 18C5.00293 16.896 5.31093 16.053 5.92693 15.471C6.54293 14.889 7.50293 14.598 8.80393 14.598L10.489 14.598L10.489 8.00195L6.28893 8.00195C5.46193 8.00195 4.82993 8.35195 4.39393 9.05295C3.95793 9.75395 3.73893 10.903 3.73893 12.502L3.73893 21L5.00293 21Z" /></svg>
                                </div>
                                <p className="pl-6 relative z-10">
                                    "No canto para que me escuchen, canto para que sientan. Tu mensaje llegará directo al corazón."
                                </p>
                            </div>
                        </FadeIn>
                    </div>

                </div>
            </div>
        </section>
    );
}
