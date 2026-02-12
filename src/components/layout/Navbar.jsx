import React, { useState } from 'react';
import { Mic2, Menu, X } from 'lucide-react';
import { getWhatsAppLink } from '../../utils/whatsapp';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { href: "#inicio", label: "INICIO" },
    { href: "#sorpresas", label: "SORPRESAS" },
    { href: "#galeria", label: "GALERÍA" },
    { href: "#precios", label: "PAQUETES" },
  ];

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md border-b border-white/20 shadow-sm z-50 transition-all duration-300">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="bg-pink-600 text-white p-2 rounded-lg transform group-hover:rotate-3 transition duration-300">
            <Mic2 size={24} />
          </div>
          <span className="text-xl md:text-2xl font-bold tracking-tight text-slate-900">
            La <span className="text-pink-600">Patrona</span> Show
          </span>
        </div>

        <div className="hidden md:flex space-x-8 items-center text-sm font-semibold tracking-wide">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="text-slate-600 hover:text-pink-600 transition">
              {link.label}
            </a>
          ))}
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 bg-slate-900 text-white rounded-full hover:bg-pink-600 transition-all hover:-translate-y-0.5"
          >
            Cotizar Ahora
          </a>
        </div>

        <button className="md:hidden text-slate-700" onClick={toggleMenu}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-t p-6 flex flex-col space-y-4 shadow-2xl absolute w-full z-50 h-screen">
          {navLinks.map((link) => (
             <a key={link.label} href={link.href} onClick={toggleMenu} className="text-xl font-medium text-slate-800">
               {link.label}
             </a>
          ))}
          <a href={getWhatsAppLink()} className="block text-center py-4 bg-pink-600 text-white rounded-xl font-bold mt-4">
            Mandar WhatsApp
          </a>
        </div>
      )}
    </nav>
  );
}