import React from 'react';
import { Instagram, Camera, ArrowUpRight } from 'lucide-react';
import { galleryContent } from '@/data/content';
import { FadeIn, StaggerContainer, StaggerItem, ScaleOnHover } from '@/components/ui/MotionWrappers';

export default function Gallery() {
  const { title, subtitle, instagramUrl, featured, gridImages } = galleryContent;

  return (
    <section id="galeria" className="py-24 bg-slate-950 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-pink-900/20 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

      <div className="container mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6 border-b border-slate-800 pb-8">
          <FadeIn className="w-full md:w-auto">
            <span className="text-pink-500 font-bold tracking-widest text-xs uppercase mb-2 block">
              {subtitle}
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
              {title}
            </h2>
          </FadeIn>

          <FadeIn delay={0.2} className="w-full md:w-auto">
            <ScaleOnHover>
              <a
                href={instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3 text-slate-400 hover:text-white transition-colors duration-300"
              >
                <span className="font-medium text-sm">Seguir en Instagram</span>
                <div className="bg-slate-800 p-2.5 rounded-full group-hover:bg-gradient-to-tr group-hover:from-pink-500 group-hover:to-purple-600 transition-all duration-300 shadow-lg group-hover:shadow-pink-500/20">
                  <Instagram size={18} />
                </div>
              </a>
            </ScaleOnHover>
          </FadeIn>
        </div>

        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4 md:h-[600px] grid-rows-[300px_300px] md:grid-rows-1">

          <StaggerItem className="col-span-2 row-span-2 relative group rounded-[2rem] overflow-hidden border border-slate-800 hover:border-pink-500/30 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10"></div>

            <img
              src={featured.image}
              alt={featured.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            <div className="absolute bottom-0 left-0 p-8 z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
              <span className="bg-pink-600/90 backdrop-blur-sm text-white text-[10px] font-bold px-3 py-1 rounded-full mb-3 inline-block tracking-wider shadow-lg">
                VIRAL
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-1 leading-tight">
                {featured.title}
              </h3>
              <p className="text-slate-300 font-medium flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                {featured.stats}
              </p>
            </div>
          </StaggerItem>

          <StaggerItem className="col-span-2 md:col-span-1 flex flex-col gap-4 h-full">
            {gridImages.map((img, index) => (
              <div key={index} className="flex-1 relative group rounded-[2rem] overflow-hidden border border-slate-800">
                <img
                  src={img}
                  alt="Gallery"
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                  <Instagram className="text-white drop-shadow-lg" size={32} />
                </div>
              </div>
            ))}
          </StaggerItem>

          <StaggerItem className="col-span-2 md:col-span-1 h-full">
            <ScaleOnHover className="h-full">
                <div className="bg-gradient-to-br from-pink-600 to-purple-700 rounded-[2rem] p-8 flex flex-col items-center justify-center text-center relative group overflow-hidden shadow-2xl shadow-purple-900/20 cursor-pointer h-full">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>

                <div className="relative z-10 transition-transform duration-300 group-hover:-translate-y-1">
                    <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6 mx-auto backdrop-blur-md border border-white/20 group-hover:rotate-6 transition-transform duration-300">
                    <Camera className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-bold text-2xl leading-tight mb-2">
                    ¿Quieres ser viral?
                    </h3>
                    <p className="text-pink-100 text-sm mb-6">
                    Creamos el contenido perfecto para tus redes.
                    </p>
                    <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest bg-white text-pink-700 px-4 py-2 rounded-full shadow-lg">
                    Reserva hoy <ArrowUpRight size={14} />
                    </div>
                </div>
                </div>
            </ScaleOnHover>
          </StaggerItem>

        </StaggerContainer>
      </div>
    </section>
  );
}
