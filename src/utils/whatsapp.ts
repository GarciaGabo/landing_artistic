import { WHATSAPP_NUMBER } from '../data/content';

export const getWhatsAppLink = (messageOrPackage = "") => {
  let finalMessage = "";

  if (messageOrPackage.startsWith("Hola") || messageOrPackage.includes("http")) {
    finalMessage = messageOrPackage;
  } 
  else if (messageOrPackage) {
    finalMessage = `¡Hola! Me gustaría cotizar el paquete *${messageOrPackage}*.`;
  } 
  else {
    finalMessage = "¡Hola! Me gustaría más información sobre las sorpresas cantadas.";
  }
  
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(finalMessage)}`;
};
