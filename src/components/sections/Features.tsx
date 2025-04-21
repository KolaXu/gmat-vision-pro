
import { motion } from 'framer-motion';
import { Book, Brain, LineChart, Compass } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const FeatureCard = ({ icon, title, description, delay, color }) => {
  const isMobile = useIsMobile();

  return (
    <motion.div 
      className="glass-card p-6 sm:p-8"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: isMobile ? "-100px" : "-200px" }}
      transition={{ duration: 0.6, delay }}
    >
      <div className={`h-12 w-12 rounded-full flex items-center justify-center mb-6 ${color}`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </motion.div>
  );
};

const Features = () => {
  const features = [
    {
      icon: <Book className="text-white" size={24} />,
      title: "Premium Questions Mirror Real Exams",
      description: "Practice with authentic questions meticulously designed to match the format, difficulty, and complexity of the actual GMAT exam.",
      color: "bg-gmat-blue",
      delay: 0.2
    },
    {
      icon: <Brain className="text-white" size={24} />,
      title: "Real-time AI Coaching",
      description: "Receive step-by-step guidance and personalized feedback from our advanced AI coach that adapts to your learning style.",
      color: "bg-gmat-purple",
      delay: 0.4
    },
    {
      icon: <Compass className="text-white" size={24} />,
      title: "Dynamic Learning Path",
      description: "Experience a continuously evolving study plan that adapts to your progress, focusing on improving your weaknesses.",
      color: "bg-gmat-green",
      delay: 0.6
    },
    {
      icon: <LineChart className="text-white" size={24} />,
      title: "Comprehensive Analysis",
      description: "Gain deep insights into your performance with detailed analytics that help you maximize your study efficiency.",
      color: "bg-gmat-orange",
      delay: 0.8
    }
  ];

  return (
    <section id="features" className="section-container">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience the Vision Pro Advantage</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Our innovative platform combines cutting-edge technology with proven learning methods to maximize your GMAT preparation.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            delay={feature.delay}
            color={feature.color}
          />
        ))}
      </div>
    </section>
  );
};

export default Features;
