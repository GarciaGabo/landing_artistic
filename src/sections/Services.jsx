import { Music, Heart, Video } from "lucide-react"
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/MotionWrappers';

export default function Services() {
    return (
        <section id="sorpresas" className="py-24 bg-white">
            <div className="container mx-auto px-6">

                <FadeIn className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">
                        La Experiencia <span className="text-pink-600">Viral</span>
                    </h2>
                    <p className="text-lg text-slate-600 leading-relaxed">
                        Transformamos una entrega de flores tradicional en un espectáculo lleno de adrenalina, diseñado para ser compartido.
                    </p>
                </FadeIn>

                <StaggerContainer className="grid md:grid-cols-3 gap-10 relative">

                    <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-100 -z-0"></div>

                    {[
                        { icon: <Music className="w-6 h-6" />, title: "1. Selección Musical", desc: "Eliges el soundtrack perfecto. Nosotros llevamos audio profesional de alta fidelidad." },
                        { icon: <Heart className="w-6 h-6" />, title: "2. El Show en Vivo", desc: "Llegamos con energía explosiva, el ramo buchón y la frase dedicatoria que elijas.", highlight: true },
                        { icon: <Video className="w-6 h-6" />, title: "3. Edición & Entrega", desc: "Capturamos las lágrimas y risas en 4K. Recibes un Reel editado listo para postear." }
                    ].map((step, index) => (
                        <StaggerItem key={index} className="h-full">
                            <div className="relative z-10 bg-white p-8 rounded-2xl border border-slate-100 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:shadow-pink-100/50 hover:-translate-y-1 transition-all duration-300 group h-full">
                                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300 ${step.highlight ? 'bg-gradient-to-br from-pink-500 to-purple-600 text-white shadow-lg shadow-pink-500/30' : 'bg-slate-50 text-slate-600 group-hover:bg-pink-50 group-hover:text-pink-600'}`}>
                                    {step.icon}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                                <p className="text-slate-500 leading-relaxed">{step.desc}</p>
                            </div>
                        </StaggerItem>

                    ))}
                </StaggerContainer>
            </div>
        </section>
    )
}
