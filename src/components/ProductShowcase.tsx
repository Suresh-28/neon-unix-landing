import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Badge } from '@/components/ui/badge';
import productShowcase from '@/assets/product-showcase.jpg';

const commands = [
  { command: 'npm install -g nexus-cli', description: 'Install globally' },
  { command: 'nexus init --template=react', description: 'Initialize project' },
  { command: 'nexus deploy --env=production', description: 'Deploy to production' },
];

export const ProductShowcase = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-20 px-6 bg-background relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
          <h2 className="text-5xl md:text-6xl font-light mb-6">
            <span className="neon-text">In Action</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how developers are using our tools to build amazing projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Product Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50, scale: 0.95 }}
            animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="relative group">
              <img
                src={productShowcase}
                alt="Product Dashboard"
                className="w-full rounded-lg shadow-card hover-lift"
              />
              
              {/* Animated Labels */}
              <motion.div
                className="absolute top-4 left-4"
                initial={{ opacity: 0, scale: 0, y: -20 }}
                animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
                whileHover={{ scale: 1.1, rotate: [0, -2, 2, 0] }}
              >
                <Badge className="bg-gradient-neon text-charcoal font-mono animate-glow-pulse">
                  <motion.span
                    animate={{ opacity: [1, 0.7, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    ● Live Dashboard
                  </motion.span>
                </Badge>
              </motion.div>

              <motion.div
                className="absolute bottom-4 right-4"
                initial={{ opacity: 0, scale: 0, y: 20 }}
                animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{ delay: 1.0, type: "spring", stiffness: 200 }}
                whileHover={{ scale: 1.1, rotate: [0, 2, -2, 0] }}
              >
                <Badge variant="outline" className="neon-border text-neon-cyan font-mono">
                  <motion.span
                    animate={{ x: [0, 2, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    ⚡ Real-time Data
                  </motion.span>
                </Badge>
              </motion.div>

              {/* Pulsing indicators */}
              <motion.div
                className="absolute top-8 right-8 w-3 h-3 bg-neon-cyan rounded-full"
                animate={{ 
                  scale: [1, 1.5, 1], 
                  opacity: [0.8, 0.3, 0.8] 
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              
              <motion.div
                className="absolute bottom-8 left-8 w-2 h-2 bg-neon-blue rounded-full"
                animate={{ 
                  scale: [1, 1.8, 1], 
                  opacity: [0.6, 0.2, 0.6] 
                }}
                transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
              />

              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-neon opacity-0 group-hover:opacity-10 rounded-lg transition-opacity duration-500" />
            </div>
          </motion.div>

          {/* Command Examples */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="mb-8">
              <h3 className="text-3xl font-semibold mb-4 neon-text">
                Simple Commands
              </h3>
              <p className="text-muted-foreground text-lg">
                Get started with just a few keystrokes. Our CLI is designed for developers who value efficiency.
              </p>
            </div>

            {commands.map((cmd, index) => (
              <motion.div
                key={index}
                className="group bg-card/30 backdrop-blur-sm border border-border rounded-lg p-6 hover-lift"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.4 + (index * 0.1),
                  ease: [0.4, 0, 0.2, 1]
                }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center justify-between mb-2">
                  <code className="text-neon-cyan font-mono bg-muted/20 px-3 py-1 rounded text-sm">
                    $ {cmd.command}
                  </code>
                  <Badge variant="secondary" className="text-xs">
                    {index + 1}
                  </Badge>
                </div>
                <p className="text-muted-foreground text-sm">
                  {cmd.description}
                </p>
                
                {/* Hover indicator */}
                <motion.div
                  className="h-0.5 bg-gradient-neon mt-3 rounded-full"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};