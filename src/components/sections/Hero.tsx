
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToFeatures = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero-height relative flex items-center">
      <div className="section-container relative z-10">
        <div className="max-w-3xl">
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            Master the GMAT with 
            <span className="text-gradient-blue block"> Vision Pro</span>
          </motion.h1>
          
          <motion.p 
            className="text-lg sm:text-xl text-muted-foreground mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            Experience the next level of GMAT preparation with AI-powered coaching, premium exam-like questions, and personalized learning paths designed just for you.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          >
            <Button size="lg" className="bg-gradient-to-r from-gmat-blue to-gmat-purple text-white hover:opacity-90 transition-opacity">
              Start Your Free Trial
            </Button>
            <Button size="lg" variant="outline">
              View Demo
            </Button>
          </motion.div>
          
          <motion.div 
            className="mt-16 flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 2 }}
          >
            <button 
              onClick={scrollToFeatures}
              className="flex flex-col items-center text-muted-foreground hover:text-gmat-purple transition-colors"
            >
              <span className="mb-2">Discover</span>
              <ChevronDown className="animate-bounce" />
            </button>
          </motion.div>
        </div>
      </div>

      {/* 3D Scene is rendered behind this content via the canvas-container styling */}
      {/* The floating elements are in a separate scene component */}
    </section>
  );
};

export default Hero;
