import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Play, Settings, Terminal, Code } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';

export const Hero = () => {
  const [typewriterText, setTypewriterText] = useState('');
  const fullText = 'Launch Your Next-Gen Product';

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setTypewriterText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Animated Background Overlay */}
      <div className="absolute inset-0 bg-gradient-subtle opacity-80" />
      
      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-20 text-neon-cyan opacity-20"
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <Terminal size={60} />
      </motion.div>
      
      <motion.div
        className="absolute bottom-20 right-20 text-neon-magenta opacity-20"
        animate={{ y: [10, -10, 10] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <Code size={80} />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* Typewriter Headline */}
          <h1 className="text-6xl md:text-8xl font-light mb-6 leading-tight">
            <span className="neon-text font-mono">
              {typewriterText}
              <span className="animate-pulse">|</span>
            </span>
          </h1>

          {/* Subheadline */}
          <motion.p
            className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Revolutionary CLI tools and APIs that transform your development workflow.
            Built for the modern Unix ecosystem.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <Button 
              size="lg" 
              className="group relative overflow-hidden bg-gradient-neon hover:shadow-glow text-charcoal font-semibold px-8 py-4 text-lg"
            >
              <Play className="mr-2 h-5 w-5 group-hover:animate-pulse" />
              Get Started
              <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="group neon-border hover-lift bg-transparent hover:bg-primary/10 text-light-text px-8 py-4 text-lg"
            >
              <Settings className="mr-2 h-5 w-5 group-hover:rotate-90 transition-transform duration-300" />
              Configuration
            </Button>
          </motion.div>
        </motion.div>

        {/* Floating Badge */}
        <motion.div
          className="absolute -top-10 right-0 bg-card border neon-border px-4 py-2 rounded-full"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
        >
          <span className="text-sm neon-text font-mono">CLI v2.0</span>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [-5, 5, -5] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-neon-cyan rounded-full mt-2 animate-pulse" />
        </div>
      </motion.div>
    </section>
  );
};