
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-accent/30 pt-16 pb-8">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold text-gradient-blue mb-4">GMAT Vision Pro</h3>
            <p className="text-muted-foreground mb-4 max-w-md">
              The most innovative GMAT preparation platform with AI coaching, premium questions, and personalized learning.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Features</h4>
            <ul className="space-y-2">
              <li><a href="#questions" className="text-muted-foreground hover:text-gmat-purple transition-colors">Premium Questions</a></li>
              <li><a href="#ai-coaching" className="text-muted-foreground hover:text-gmat-purple transition-colors">AI Coaching</a></li>
              <li><a href="#features" className="text-muted-foreground hover:text-gmat-purple transition-colors">Learning Path</a></li>
              <li><a href="#analysis" className="text-muted-foreground hover:text-gmat-purple transition-colors">Performance Analysis</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-gmat-purple transition-colors">About Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-gmat-purple transition-colors">Pricing</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-gmat-purple transition-colors">Testimonials</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-gmat-purple transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {new Date().getFullYear()} GMAT Vision Pro. All rights reserved.
          </p>
          
          <div className="flex space-x-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-gmat-purple transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-gmat-purple transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
