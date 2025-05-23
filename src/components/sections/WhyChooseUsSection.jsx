
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Users, BarChart3, MessageCircle, Settings2 } from 'lucide-react';

const reasons = [
  { title: 'Equipo Experto', description: 'Profesionales apasionados y con amplia experiencia en cada área de servicio.', icon: <Users className="h-10 w-10 text-hmr-orange mb-4" />, color: 'text-hmr-orange' },
  { title: 'Resultados Comprobados', description: 'Estrategias efectivas que generan impacto medible y superan tus objetivos.', icon: <BarChart3 className="h-10 w-10 text-hmr-green mb-4" />, color: 'text-hmr-green' },
  { title: 'Comunicación Transparente', description: 'Mantenemos un diálogo abierto y constante, involucrándote en cada etapa.', icon: <MessageCircle className="h-10 w-10 text-hmr-blue-light mb-4" />, color: 'text-hmr-blue-light' },
  { title: 'Soluciones a Medida', description: 'Adaptamos nuestros servicios a tus necesidades específicas para garantizar el éxito.', icon: <Settings2 className="h-10 w-10 text-hmr-purple mb-4" />, color: 'text-hmr-purple' },
];

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
      type: "spring",
      stiffness: 100
    },
  }),
};

const WhyChooseUsSection = () => {
  return (
    <section id="porque-elegirnos" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-hmr-blue-dark">¿Por Qué Elegirnos?</h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">Comprometidos con tu éxito, ofrecemos valor diferencial en cada proyecto.</p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.custom
              key={reason.title}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="h-full"
            >
              <Card className="h-full flex flex-col text-center p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white">
                <div className="flex justify-center mb-4">
                  {React.cloneElement(reason.icon, { className: `h-12 w-12 ${reason.color}`})}
                </div>
                <CardTitle className="text-xl font-semibold text-hmr-blue-dark mb-2">{reason.title}</CardTitle>
                <CardDescription className="text-gray-600 text-sm leading-relaxed flex-grow">{reason.description}</CardDescription>
              </Card>
            </motion.custom>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
