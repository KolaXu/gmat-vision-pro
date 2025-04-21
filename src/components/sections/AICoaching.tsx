
import { motion } from 'framer-motion';
import { MessageSquare, Sparkles, User } from 'lucide-react';

const AICoachingMessage = ({ type, content, delay = 0 }) => {
  return (
    <motion.div
      className={`flex ${type === 'user' ? 'justify-end' : 'justify-start'} mb-4`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <div
        className={`max-w-xs sm:max-w-sm md:max-w-md rounded-2xl p-4 ${
          type === 'user'
            ? 'bg-gmat-blue text-white rounded-tr-none'
            : 'glass-card rounded-tl-none'
        }`}
      >
        <div className="flex items-center mb-2">
          {type === 'user' ? (
            <User size={18} className="mr-2" />
          ) : (
            <Sparkles size={18} className="mr-2 text-gmat-purple" />
          )}
          <span className="font-medium">{type === 'user' ? 'You' : 'AI Coach'}</span>
        </div>
        <p className={type === 'user' ? 'text-white' : 'text-foreground'}>{content}</p>
      </div>
    </motion.div>
  );
};

const AICoaching = () => {
  const conversation = [
    {
      type: 'user',
      content: "I'm struggling with Data Sufficiency questions related to number properties. Can you help?",
      delay: 0.2
    },
    {
      type: 'ai',
      content: "I notice you miss patterns in divisibility problems. Let's work through this step by step with a targeted approach.",
      delay: 0.6
    },
    {
      type: 'user',
      content: "How do I know when to combine both statements in Data Sufficiency?",
      delay: 1.0
    },
    {
      type: 'ai',
      content: "Great question! When evaluating statements together, first check if they provide different types of information. Let me show you with an example...",
      delay: 1.4
    }
  ];

  return (
    <section id="ai-coaching" className="section-container">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          className="order-2 lg:order-1"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="glass-card p-6 rounded-3xl overflow-hidden">
            <div className="flex items-center border-b border-border pb-3 mb-4">
              <div className="h-10 w-10 rounded-full bg-gradient-to-r from-gmat-blue to-gmat-purple flex items-center justify-center mr-3">
                <MessageSquare size={20} className="text-white" />
              </div>
              <div>
                <h4 className="font-medium">AI Coach</h4>
                <p className="text-xs text-muted-foreground">Online • Responds instantly</p>
              </div>
            </div>
            
            <div className="max-h-96 overflow-y-auto pr-3">
              {conversation.map((message, index) => (
                <AICoachingMessage
                  key={index}
                  type={message.type}
                  content={message.content}
                  delay={message.delay}
                />
              ))}
            </div>
          </div>
        </motion.div>
        
        <motion.div
          className="order-1 lg:order-2"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Real-Time AI Coaching For Each Question</h2>
          <p className="text-lg text-muted-foreground mb-6">
            Our advanced AI coach provides personalized guidance tailored to your learning style and current abilities.
          </p>
          
          <div className="space-y-6">
            <div className="flex">
              <div className="h-12 w-12 rounded-full bg-gradient-to-r from-gmat-blue to-gmat-purple flex items-center justify-center mr-4">
                <span className="text-white font-bold">01</span>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">Personalized Approach</h4>
                <p className="text-muted-foreground">The AI adapts to your learning style and focuses on your specific weaknesses.</p>
              </div>
            </div>
            
            <div className="flex">
              <div className="h-12 w-12 rounded-full bg-gradient-to-r from-gmat-purple to-gmat-purple-light flex items-center justify-center mr-4">
                <span className="text-white font-bold">02</span>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">Step-by-Step Guidance</h4>
                <p className="text-muted-foreground">Get detailed explanations that break down complex problems into manageable steps.</p>
              </div>
            </div>
            
            <div className="flex">
              <div className="h-12 w-12 rounded-full bg-gradient-to-r from-gmat-green to-gmat-blue flex items-center justify-center mr-4">
                <span className="text-white font-bold">03</span>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">Available 24/7</h4>
                <p className="text-muted-foreground">Get help whenever you need it, without scheduling or waiting for responses.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AICoaching;
