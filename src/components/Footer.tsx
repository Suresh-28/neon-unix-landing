import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github, Twitter, Linkedin, Terminal, Code, Database, Settings } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
];

const unixIcons = [
  { icon: Terminal, delay: 0 },
  { icon: Code, delay: 0.1 },
  { icon: Database, delay: 0.2 },
  { icon: Settings, delay: 0.3 },
];

export const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <footer ref={ref} className="py-16 px-6 bg-charcoal border-t border-border relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 text-neon-cyan">
          <Terminal size={120} />
        </div>
        <div className="absolute bottom-10 right-10 text-neon-magenta">
          <Code size={100} />
        </div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="flex items-center gap-3">
              <div className="bg-gradient-neon p-2 rounded-lg">
                <Terminal className="h-8 w-8 text-charcoal" />
              </div>
              <span className="text-2xl font-bold neon-text font-mono">NEXUS</span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Revolutionary CLI tools and APIs for the modern Unix ecosystem. 
              Built by developers, for developers.
            </p>
            
            {/* Unix Icons */}
            <div className="flex gap-4">
              {unixIcons.map((item, index) => (
                <motion.div
                  key={index}
                  className="text-neon-cyan/50 hover:text-neon-cyan transition-colors cursor-pointer"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ 
                    delay: item.delay + 0.3, 
                    type: "spring", 
                    stiffness: 200 
                  }}
                  whileHover={{ 
                    scale: 1.2, 
                    rotate: 360,
                    transition: { duration: 0.3 }
                  }}
                >
                  <item.icon size={24} />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Links Section */}
          <motion.div
            className="grid grid-cols-2 gap-8"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
          >
            <div>
              <h4 className="font-semibold text-light-text mb-4">Product</h4>
              <ul className="space-y-3">
                {['Features', 'Pricing', 'Documentation', 'API Reference'].map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.4 }}
                  >
                    <a 
                      href="#" 
                      className="text-muted-foreground hover:text-neon-cyan transition-colors"
                    >
                      {item}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-light-text mb-4">Company</h4>
              <ul className="space-y-3">
                {['About', 'Blog', 'Careers', 'Contact'].map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
                  >
                    <a 
                      href="#" 
                      className="text-muted-foreground hover:text-neon-cyan transition-colors"
                    >
                      {item}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Social Section */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
          >
            <h4 className="font-semibold text-light-text">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="group bg-card/30 backdrop-blur-sm border border-border p-3 rounded-lg hover-lift"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ 
                    delay: 0.6 + index * 0.1, 
                    type: "spring", 
                    stiffness: 200 
                  }}
                  whileHover={{ 
                    scale: 1.1,
                    boxShadow: "0 0 20px hsl(var(--neon-cyan) / 0.3)"
                  }}
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5 text-muted-foreground group-hover:text-neon-cyan transition-colors" />
                </motion.a>
              ))}
            </div>
            
            <div className="text-muted-foreground text-sm">
              <p>Subscribe to our newsletter for updates</p>
              <div className="flex gap-2 mt-3">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="bg-muted/20 border border-border rounded px-3 py-2 text-sm flex-1 focus:outline-none focus:border-neon-cyan transition-colors"
                />
                <button className="bg-gradient-neon text-charcoal px-4 py-2 rounded text-sm font-semibold hover:shadow-glow transition-shadow">
                  Subscribe
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <p className="text-muted-foreground text-sm">
            © 2024 NEXUS. All rights reserved. Built with ❤️ for developers.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-neon-cyan transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-neon-cyan transition-colors">
              Terms of Service
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};