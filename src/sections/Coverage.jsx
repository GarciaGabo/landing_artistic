import { useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import { MapPin, ArrowRight, Loader2, Crosshair } from 'lucide-react';

import { FALLBACK_COORDS, MAP_ZOOM } from '@/utils/mapConfig';
import LocationFinder from '@/components/map/LocationFinder';
import DraggableMarker from '@/components/map/DraggableMarker';
import { getWhatsAppLink } from '@/utils/whatsapp';
import { FadeIn } from '@/components/ui/MotionWrappers';

export default function Coverage() {
    const [position, setPosition] = useState(FALLBACK_COORDS);
    const [userLocationFound, setUserLocationFound] = useState(false);
    const [isLocating, setIsLocating] = useState(false);

    const handleLocateClick = () => setIsLocating(true);
    const mapsLink = `https://www.google.com/maps/search/?api=1&query=${position.lat},${position.lng}`;

    return (
        <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-800 to-slate-950 -z-20"></div>

            <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

                <FadeIn>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-pink-400 text-xs font-bold uppercase tracking-wider mb-6">
                        <MapPin size={14} /> Zona de Cobertura
                    </div>

                    <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                        Llevamos la fiesta <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">hasta tu puerta.</span>
                    </h2>

                    <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                        {userLocationFound
                            ? "¡Ubicación detectada! Ajusta el pin si es necesario."
                            : "Usa el botón para detectar tu ubicación o arrastra el pin manualmente."}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <button
                            onClick={handleLocateClick}
                            disabled={isLocating}
                            className="flex items-center justify-center gap-2 px-6 py-4 rounded-xl border border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white transition-colors disabled:opacity-50"
                        >
                            {isLocating ? <Loader2 className="animate-spin" size={18} /> : <Crosshair size={18} />}
                            {userLocationFound ? "Actualizar GPS" : "Detectar ubicación"}
                        </button>

                        <div className="flex-1">
                            <a
                                href={getWhatsAppLink(userLocationFound
                                    ? `Hola, cotiza mi evento aquí: ${mapsLink}`
                                    : "Hola, quiero cotizar un evento cerca de Ixmiquilpan"
                                )}
                                target="_blank" rel="noopener noreferrer"
                                className="group flex items-center justify-center gap-3 bg-white text-slate-900 px-8 py-4 rounded-xl font-bold hover:bg-pink-50 transition-colors w-full"
                            >
                                Confirmar Cobertura
                                <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                            </a>
                        </div>
                    </div>
                </FadeIn>

                <FadeIn delay={0.2} className="h-[400px] w-full relative z-10">
                    <div className="w-full h-full rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-800 bg-white">
                        <MapContainer
                            center={FALLBACK_COORDS}
                            zoom={MAP_ZOOM}
                            scrollWheelZoom={true}
                            style={{ height: "100%", width: "100%" }}
                        >
                            <TileLayer
                                attribution='© OpenStreetMap'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />

                            <LocationFinder
                                setPosition={setPosition}
                                setUserLocationFound={setUserLocationFound}
                                isLocating={isLocating}
                                setIsLocating={setIsLocating}
                            />

                            <DraggableMarker
                                position={position}
                                setPosition={setPosition}
                                setUserLocationFound={setUserLocationFound}
                            />
                        </MapContainer>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}