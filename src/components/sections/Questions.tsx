
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const ExampleQuestion = ({ active }) => {
  const questions = [
    {
      category: "Problem Solving",
      text: "If x and y are positive integers such that x + y = 15 and xy = 56, what is the value of x² + y²?",
      difficulty: "700-Level",
      options: ["121", "153", "169", "225", "289"]
    },
    {
      category: "Data Sufficiency",
      text: "Is the integer n divisible by both 2 and 3?",
      difficulty: "650-Level",
      statements: [
        "(1) n is divisible by 6.",
        "(2) n is a multiple of 4."
      ]
    },
    {
      category: "Critical Reasoning",
      text: "Which of the following most logically completes the passage?",
      difficulty: "680-Level",
      passage: "Studies show that people who consume olive oil daily have a lower risk of heart disease than those who rarely consume it. However, this correlation cannot be used to conclude that olive oil consumption reduces heart disease risk, because _______."
    }
  ];

  const current = questions[active % questions.length];
  
  return (
    <Card className="glass-card overflow-hidden border-gmat-purple/20 h-full">
      <CardContent className="p-6">
        <div className="flex justify-between items-center mb-4">
          <span className="bg-gmat-purple/10 text-gmat-purple text-sm font-medium px-3 py-1 rounded-full">
            {current.category}
          </span>
          <span className="text-xs text-muted-foreground">
            {current.difficulty}
          </span>
        </div>
        
        <h4 className="text-lg font-medium mb-4">{current.text}</h4>
        
        {current.passage && (
          <p className="text-muted-foreground mb-4 text-sm">{current.passage}</p>
        )}
        
        {current.options && (
          <div className="space-y-2">
            {current.options.map((option, i) => (
              <div key={i} className="flex items-center p-3 rounded-md hover:bg-accent/50 transition-colors cursor-pointer">
                <div className="w-6 h-6 rounded-full border border-muted-foreground/30 flex items-center justify-center mr-3">
                  {i === 1 && <Check size={14} className="text-gmat-green" />}
                </div>
                <span>{option}</span>
              </div>
            ))}
          </div>
        )}
        
        {current.statements && (
          <div className="space-y-3 mt-4">
            {current.statements.map((statement, i) => (
              <div key={i} className="p-3 rounded-md bg-accent/30">
                {statement}
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

const Questions = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % 3);
    }, 5000);
    
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const features = [
    "Over 2,000+ GMAT-style questions",
    "Categorized by difficulty (600-800 level)",
    "Updated regularly based on latest exam patterns",
    "Detailed explanations with multiple approaches",
    "Custom practice sets based on your performance",
  ];

  return (
    <section id="questions" className="section-container bg-accent/30 rounded-3xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Premium Questions That Mirror Real Exams</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Practice with questions that are indistinguishable from the real GMAT exam. Our team of experts continuously updates our question bank to reflect the latest patterns and trends.
          </p>
          
          <ul className="space-y-3 mb-8">
            {features.map((feature, index) => (
              <motion.li 
                key={index}
                className="flex items-center"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="h-6 w-6 rounded-full bg-gmat-blue/20 flex items-center justify-center mr-3">
                  <Check size={14} className="text-gmat-blue" />
                </div>
                <span>{feature}</span>
              </motion.li>
            ))}
          </ul>
          
          <Button className="group bg-gmat-blue hover:bg-gmat-blue/90">
            Browse Question Bank
            <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="h-[480px] relative"
        >
          <ExampleQuestion active={activeIndex} />

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {[0, 1, 2].map((i) => (
              <button
                key={i}
                onClick={() => {
                  setActiveIndex(i);
                  if (intervalRef.current) clearInterval(intervalRef.current);
                }}
                className={`h-2 rounded-full transition-all ${
                  activeIndex === i ? "w-8 bg-gmat-purple" : "w-2 bg-muted"
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Questions;
