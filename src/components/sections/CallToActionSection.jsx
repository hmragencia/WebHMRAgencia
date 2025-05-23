
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { CheckCircle, Zap } from 'lucide-react';

const additionalCards = [
  { title: 'Resultados Comprobados', description: 'Nuestro portafolio habla por sí mismo. Entregamos proyectos que no solo cumplen, sino que superan las expectativas.', icon: <CheckCircle className="h-8 w-8 text-hmr-green mr-3" /> },
  { title: 'Innovación Constante', description: 'Nos mantenemos a la vanguardia de las últimas tendencias y tecnologías para ofrecerte soluciones creativas y efectivas.', icon: <Zap className="h-8 w-8 text-hmr-purple mr-3" /> },
];

const CallToActionSection = () => {
  const scrollToContact = () => {
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-hmr-blue-dark to-hmr-blue-light text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Tienes un Proyecto en Mente?</h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Nos encantaría conocerlo. Desde la conceptualización hasta la ejecución, estamos listos para convertir tu visión en realidad.
          </p>
          <Button 
            size="lg" 
            className="bg-hmr-orange text-white hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 px-10 py-3 text-lg mb-12"
            onClick={scrollToContact}
          >
            Solicitar Propuesta
          </Button>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {additionalCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.2 * index }}
            >
              <Card className="bg-white/10 backdrop-blur-sm text-white border-white/20 h-full">
                <CardHeader className="flex flex-row items-center">
                  {card.icon}
                  <CardTitle className="text-xl">{card.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-200">{card.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
