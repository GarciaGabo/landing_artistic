import { Music, Heart, Video } from 'lucide-react';

export const WHATSAPP_NUMBER = "5215618616466";

export const faqData = [
  {
    q: "¿Ustedes ponen el ramo o yo lo llevo?",
    a: "¡Nosotros nos encargamos! Todos nuestros paquetes virales incluyen un ramo estándar de 24 rosas. Si quieres un ramo 'Buchón' de 100 o más rosas, lo cotizamos como extra."
  },
  {
    q: "¿Con cuánto tiempo debo reservar?",
    a: "Para fines de semana recomendamos al menos 2 semanas de anticipación. Entre semana podemos tener disponibilidad con 3 días de aviso."
  },
  {
    q: "¿Puedo elegir cualquier canción?",
    a: "¡Claro! Tienes derecho a elegir la canción principal de la entrada."
  },
  {
    q: "¿Viajan a otras ciudades?",
    a: "Nuestra base es [Tu Ciudad]. Vamos a zonas aledañas con un costo extra de viáticos."
  }
];

export const servicesData = [
  { icon: Music, title: "1. Selección Musical", desc: "Eliges el soundtrack perfecto. Nosotros llevamos audio profesional." },
  { icon: Heart, title: "2. El Show en Vivo", desc: "Llegamos con energía explosiva, el ramo buchón y la frase dedicatoria.", highlight: true },
  { icon: Video, title: "3. Edición & Entrega", desc: "Capturamos las lágrimas y risas en 4K. Recibes un Reel editado." }
];

export const galleryContent = {
  title: "Momentos Reales",
  subtitle: "Social Proof",
  instagramUrl: "https://instagram.com",
  featured: {
    title: "Pedida de Mano Viral",
    stats: "2.4M de vistas en TikTok",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80"
  },
  gridImages: [
    "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&sig=1",
    "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&sig=2",
    "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&sig=3",
  ]
};

export const reviews = [
  {
    name: "Andrea M.",
    role: "Novia Sorprendida",
    content: "¡Fue increíble! No me lo esperaba para nada. El cantante tiene una voz espectacular y el video quedó para llorar de emoción. 100% recomendado.",
    stars: 5,
    date: "Hace 2 semanas"
  },
  {
    name: "Carlos R.",
    role: "Cliente (Aniversario)",
    content: "Contraté el paquete VIP para mi esposa. La reacción de ella no tiene precio. El equipo fue súper puntual y profesionales.",
    stars: 5,
    date: "Hace 1 mes"
  },
  {
    name: "Sofía L.",
    role: "Cumpleaños de Mamá",
    content: "Mi mamá no paraba de llorar. Gracias por hacer su día tan especial. El ramo de rosas estaba precioso.",
    stars: 5,
    date: "Hace 3 días"
  }
];
