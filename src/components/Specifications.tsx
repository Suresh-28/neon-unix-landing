import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { CheckCircle, Cpu, Database, Globe } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

const specs = [
  { label: 'Performance', value: 98, icon: Cpu },
  { label: 'Reliability', value: 99, icon: Database },
  { label: 'Global Reach', value: 95, icon: Globe },
];

const features = [
  'Sub-100ms API response times',
  '99.9% uptime SLA guarantee',
  'Global CDN with 50+ edge locations',
  'Enterprise-grade security',
  'Real-time monitoring & analytics',
  'Automatic scaling & load balancing'
];

export const Specifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-20 px-6 bg-gradient-subtle relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
          <h2 className="text-5xl md:text-6xl font-light mb-6">
            <span className="neon-text">Specifications</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Built for scale, designed for performance, optimized for developers.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Performance Metrics */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50, scale: 0.95 }}
            animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="mb-8">
              <h3 className="text-3xl font-semibold mb-4 neon-text">
                Performance Metrics
              </h3>
              <p className="text-muted-foreground text-lg">
                Industry-leading performance across all key metrics.
              </p>
            </div>

            {specs.map((spec, index) => (
              <motion.div
                key={spec.label}
                className="relative space-y-3"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.2 + (index * 0.1),
                  ease: [0.4, 0, 0.2, 1]
                }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <spec.icon className="h-5 w-5 text-neon-cyan" />
                    <span className="font-semibold text-light-text">{spec.label}</span>
                  </div>
                  <span className="text-neon-cyan font-mono text-lg">{spec.value}%</span>
                </div>
                
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: "100%" } : {}}
                  transition={{ duration: 1, delay: 0.5 + (index * 0.2) }}
                >
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : {}}
                    transition={{ duration: 1.2, delay: 0.8 + (index * 0.3), ease: "easeOut" }}
                    className="origin-left"
                  >
                    <Progress 
                      value={spec.value} 
                      className="h-3 bg-muted overflow-hidden"
                    />
                  </motion.div>
                </motion.div>
                
                {/* Animated counter */}
                <motion.div
                  className="absolute top-0 right-0"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 1.2 + (index * 0.3), type: "spring" }}
                >
                  <div className="w-2 h-2 bg-neon-cyan rounded-full animate-glow-pulse" />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Feature List */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="mb-8">
              <h3 className="text-3xl font-semibold mb-4 neon-text">
                Key Features
              </h3>
              <p className="text-muted-foreground text-lg">
                Everything you need for modern development workflows.
              </p>
            </div>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-4 p-4 bg-card/30 backdrop-blur-sm border border-border rounded-lg hover-lift"
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ 
                    duration: 0.5, 
                    delay: 0.6 + (index * 0.1),
                    ease: [0.4, 0, 0.2, 1]
                  }}
                  whileHover={{ scale: 1.02 }}
                >
                  <motion.div
                    whileHover={{ 
                      rotate: 360,
                      transition: { duration: 0.5 }
                    }}
                  >
                    <CheckCircle className="h-5 w-5 text-neon-cyan flex-shrink-0" />
                  </motion.div>
                  <span className="text-light-text">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};