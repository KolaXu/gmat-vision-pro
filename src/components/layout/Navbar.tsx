
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 transition-all duration-300 ${
        scrolled ? 'py-3 glass-card' : 'py-5'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <motion.div
            className="text-xl font-bold text-gradient-blue"
            whileHover={{ scale: 1.05 }}
          >
            GMAT <span className="text-gradient-purple">Vision Pro</span>
          </motion.div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-foreground hover:text-gold-500 transition-colors">Features</a>
          <a href="#questions" className="text-foreground hover:text-gold-500 transition-colors">Questions</a>
          <a href="#ai-coaching" className="text-foreground hover:text-gold-500 transition-colors">AI Coaching</a>
          <a href="#analysis" className="text-foreground hover:text-gold-500 transition-colors">Analysis</a>
        </div>

        {/* CTA Button */}
        <div className="flex items-center space-x-4">
          <Button variant="outline" className="hidden sm:inline-flex hover:text-gold-500">
            Sign In
          </Button>
          <Button className="bg-gradient-to-r from-black to-gold-500 text-white hover:opacity-90 transition-opacity">
            Start Free Trial
          </Button>
        </div>
      </nav>
    </motion.header>
  );
};

export default Navbar;
