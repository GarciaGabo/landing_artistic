// src/components/ui/MotionWrappers.jsx
import { motion } from 'framer-motion';

// 1. Para Títulos o Elementos individuales (aparecen suavemente hacia arriba)
export const FadeIn = ({ children, delay = 0, className = "" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// 2. Contenedor para Listas o Grids (Controla el orden de aparición)
export const StaggerContainer = ({ children, className = "", delay = 0 }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Tiempo entre cada elemento
        delayChildren: delay
      }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// 3. El Elemento dentro de la lista (Hijo del StaggerContainer)
export const StaggerItem = ({ children, className = "" }) => {
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: "easeOut" } 
    }
  };

  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
};

// 4. Efecto de Escala para botones o tarjetas al hacer Hover (Opcional)
export const ScaleOnHover = ({ children, className = "" }) => {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            className={className}
        >
            {children}
        </motion.div>
    )
}