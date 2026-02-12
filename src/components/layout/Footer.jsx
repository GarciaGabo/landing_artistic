import { Mic2, Instagram, Facebook, MessageCircle } from "lucide-react"
import { getWhatsAppLink } from "../../utils/whatsapp"

export default function Footer() {
    return (
        <footer className="bg-slate-950 text-slate-500 py-12 border-t border-slate-900">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="text-center md:text-left">
                        <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                            <Mic2 className="text-slate-700" size={20} />
                            <span className="text-xl font-bold tracking-tight text-white">
                                La <span className="text-pink-600">Patrona</span> Show
                            </span>
                        </div>
                        <p className="text-sm text-slate-600">Creando memorias virales desde 2024.</p>
                    </div>
                    <div className="flex gap-6">
                        <a href="#" className="p-3 bg-slate-900 rounded-full hover:bg-pink-600 hover:text-white transition duration-300"><Instagram size={20} /></a>
                        <a href="#" className="p-3 bg-slate-900 rounded-full hover:bg-pink-600 hover:text-white transition duration-300"><Facebook size={20} /></a>
                        <a href={getWhatsAppLink()} className="p-3 bg-slate-900 rounded-full hover:bg-green-500 hover:text-white transition duration-300"><MessageCircle size={20} /></a>
                    </div>
                </div>
                <div className="mt-12 text-center text-xs text-slate-700 pt-8 border-t border-slate-900">
                    © 2024 La Patrona Show. Todos los derechos reservados.
                </div>
            </div>
        </footer>
    )
}