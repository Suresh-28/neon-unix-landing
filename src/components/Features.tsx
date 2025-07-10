import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Terminal, Zap, Shield, Layers } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import featureBg from '@/assets/feature-bg.jpg';

const features = [
  {
    icon: Terminal,
    title: 'Command Line Interface',
    description: 'Powerful CLI tools with intuitive commands and extensive documentation.',
    label: 'CLI',
    color: 'neon-cyan'
  },
  {
    icon: Zap,
    title: 'Lightning Fast API',
    description: 'High-performance REST API with sub-100ms response times.',
    label: 'API',
    color: 'neon-magenta'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-grade encryption and compliance with industry standards.',
    label: 'SEC',
    color: 'neon-cyan'
  },
  {
    icon: Layers,
    title: 'Unified Interface',
    description: 'Seamless integration across all your development environments.',
    label: 'UI',
    color: 'neon-magenta'
  }
];

export const Features = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-20 px-6 bg-gradient-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{ backgroundImage: `url(${featureBg})` }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
          <h2 className="text-5xl md:text-6xl font-light mb-6">
            <span className="neon-text">Features</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Built with modern Unix principles and cutting-edge technology stack.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="group relative bg-card/50 backdrop-blur-sm border border-border rounded-lg p-8 hover-lift hover-tilt"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.2,
                ease: [0.4, 0, 0.2, 1]
              }}
            >
              {/* Icon */}
              <motion.div
                className={`inline-flex p-4 rounded-full bg-gradient-neon mb-6`}
                whileHover={{ 
                  scale: 1.1,
                  rotate: [0, -5, 5, 0],
                  transition: { duration: 0.3 }
                }}
              >
                <feature.icon className="h-8 w-8 text-charcoal" />
              </motion.div>

              {/* Badge */}
              <motion.div
                className="absolute top-4 right-4"
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.2 + 0.4, type: "spring", stiffness: 200 }}
              >
                <Badge 
                  variant="outline" 
                  className={`neon-border text-${feature.color} font-mono text-xs`}
                >
                  {feature.label}
                </Badge>
              </motion.div>

              {/* Content */}
              <h3 className="text-2xl font-semibold mb-4 text-light-text">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-neon opacity-0 group-hover:opacity-5 rounded-lg transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};