import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const testimonials = [
  {
    quote: "This CLI tool has revolutionized our development workflow. The performance improvements are incredible.",
    author: "Sarah Chen",
    role: "Senior DevOps Engineer",
    company: "TechCorp",
    tag: "Linux User",
    avatar: "SC",
    color: "neon-cyan"
  },
  {
    quote: "The API integration was seamless. Documentation is top-notch and the support team is fantastic.",
    author: "Marcus Rodriguez",
    role: "Full Stack Developer",
    company: "StartupXYZ",
    tag: "API Developer",
    avatar: "MR",
    color: "neon-magenta"
  },
  {
    quote: "Best developer experience I've had in years. The unified interface makes everything so much simpler.",
    author: "Jennifer Kim",
    role: "Lead Engineer",
    company: "BigTech Inc",
    tag: "Unix Expert",
    avatar: "JK",
    color: "neon-cyan"
  }
];

export const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section ref={ref} className="py-20 px-6 bg-background relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
          <h2 className="text-5xl md:text-6xl font-light mb-6">
            <span className="neon-text">Testimonials</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See what developers are saying about our tools.
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="bg-card/30 backdrop-blur-sm border border-border rounded-2xl p-8 md:p-12 text-center relative"
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -50, scale: 0.95 }}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            >
              {/* Quote Icon */}
              <motion.div
                className="absolute -top-6 left-1/2 transform -translate-x-1/2"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              >
                <div className="bg-gradient-neon p-4 rounded-full">
                  <Quote className="h-6 w-6 text-charcoal" />
                </div>
              </motion.div>

              {/* Quote Text */}
              <motion.blockquote
                className="text-2xl md:text-3xl font-light text-light-text mb-8 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                "{testimonials[currentIndex].quote}"
              </motion.blockquote>

              {/* Author Info */}
              <motion.div
                className="flex items-center justify-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Avatar className="h-16 w-16 border-2 border-primary">
                    <AvatarFallback className="bg-gradient-neon text-charcoal font-bold text-lg">
                      {testimonials[currentIndex].avatar}
                    </AvatarFallback>
                  </Avatar>
                </motion.div>

                <div className="text-left">
                  <h4 className="font-semibold text-light-text text-lg">
                    {testimonials[currentIndex].author}
                  </h4>
                  <p className="text-muted-foreground">
                    {testimonials[currentIndex].role}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonials[currentIndex].company}
                  </p>
                </div>
              </motion.div>

              {/* Tag Badge */}
              <motion.div
                className="absolute top-6 right-6"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
              >
                <Badge 
                  variant="outline" 
                  className={`neon-border text-${testimonials[currentIndex].color} font-mono`}
                >
                  {testimonials[currentIndex].tag}
                </Badge>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="sm"
              onClick={prevTestimonial}
              className="neon-border hover-lift bg-transparent"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-neon-cyan w-8' 
                      : 'bg-muted-foreground hover:bg-neon-cyan/50'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={nextTestimonial}
              className="neon-border hover-lift bg-transparent"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};