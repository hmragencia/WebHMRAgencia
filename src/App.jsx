
import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/sections/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import InstitutionalSection from '@/components/sections/InstitutionalSection';
import ServicesSection from '@/components/sections/ServicesSection';
import WhyChooseUsSection from '@/components/sections/WhyChooseUsSection';
import CallToActionSection from '@/components/sections/CallToActionSection';
import ContactFormSection from '@/components/sections/ContactFormSection';
import Footer from '@/components/sections/Footer';
import { Toaster } from '@/components/ui/toaster';

function App() {
  const pageVariants = {
    initial: { opacity: 0 },
    in: { opacity: 1 },
    out: { opacity: 0 },
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5,
  };

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="font-sans antialiased"
    >
      <Navbar />
      <main>
        <HeroSection />
        <InstitutionalSection />
        <ServicesSection />
        <WhyChooseUsSection />
        <CallToActionSection />
        <ContactFormSection />
      </main>
      <Footer />
      <Toaster />
    </motion.div>
  );
}

export default App;
