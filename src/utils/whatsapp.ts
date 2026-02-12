import { WHATSAPP_NUMBER } from '../data/content';

export const getWhatsAppLink = (paquete = "") => {
  const mensaje = paquete
    ? `¡Hola! Me gustaría cotizar el paquete *${paquete}*.`
    : "¡Hola! Me gustaría cotizar una sorpresa cantada.";
  
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensaje)}`;
};
