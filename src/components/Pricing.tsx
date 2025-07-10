import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Check, CreditCard, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';

const pricingPlans = [
  {
    name: 'Starter',
    description: 'Perfect for individual developers',
    monthlyPrice: 29,
    yearlyPrice: 290,
    features: [
      'CLI access',
      '10K API calls/month',
      'Community support',
      'Basic documentation',
      'Standard SLA'
    ],
    popular: false
  },
  {
    name: 'Professional',
    description: 'For growing development teams',
    monthlyPrice: 99,
    yearlyPrice: 990,
    features: [
      'Everything in Starter',
      '100K API calls/month',
      'Priority support',
      'Advanced documentation',
      'Custom integrations',
      '99.9% SLA guarantee'
    ],
    popular: true
  },
  {
    name: 'Enterprise',
    description: 'For large organizations',
    monthlyPrice: 299,
    yearlyPrice: 2990,
    features: [
      'Everything in Professional',
      'Unlimited API calls',
      'Dedicated support team',
      'Custom training',
      'On-premise deployment',
      'Custom SLA'
    ],
    popular: false
  }
];

export const Pricing = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section ref={ref} className="py-20 px-6 bg-gradient-dark relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
          <h2 className="text-5xl md:text-6xl font-light mb-6">
            <span className="neon-text">Pricing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Choose the perfect plan for your development needs.
          </p>

          {/* Billing Toggle */}
          <motion.div
            className="flex items-center justify-center gap-4 bg-card/30 backdrop-blur-sm border border-border rounded-full p-2 inline-flex"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <span className={`text-sm ${!isYearly ? 'text-neon-cyan' : 'text-muted-foreground'}`}>
              Monthly
            </span>
            <Switch
              checked={isYearly}
              onCheckedChange={setIsYearly}
              className="data-[state=checked]:bg-gradient-neon"
            />
            <span className={`text-sm ${isYearly ? 'text-neon-cyan' : 'text-muted-foreground'}`}>
              Yearly
            </span>
            {isYearly && (
              <Badge className="bg-gradient-neon text-charcoal text-xs font-mono">
                Save 20%
              </Badge>
            )}
          </motion.div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`relative bg-card/50 backdrop-blur-sm border rounded-2xl p-8 hover-lift ${
                plan.popular ? 'border-primary shadow-glow' : 'border-border'
              }`}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.2,
                ease: [0.4, 0, 0.2, 1]
              }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <motion.div
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: index * 0.2 + 0.4, type: "spring", stiffness: 200 }}
                >
                  <Badge className="bg-gradient-neon text-charcoal font-semibold px-4 py-1">
                    Most Popular
                  </Badge>
                </motion.div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold text-light-text mb-2">
                  {plan.name}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {plan.description}
                </p>
                
                {/* Price */}
                <div className="mb-6">
                  <motion.span
                    key={isYearly ? 'yearly' : 'monthly'}
                    className="text-5xl font-light neon-text"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                  </motion.span>
                  <span className="text-muted-foreground">
                    /{isYearly ? 'year' : 'month'}
                  </span>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <motion.div
                    key={feature}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ 
                      duration: 0.4, 
                      delay: index * 0.2 + featureIndex * 0.1 + 0.5
                    }}
                  >
                    <Check className="h-5 w-5 text-neon-cyan flex-shrink-0" />
                    <span className="text-light-text">{feature}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTA Button */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  className={`w-full ${
                    plan.popular 
                      ? 'bg-gradient-neon hover:shadow-glow text-charcoal font-semibold' 
                      : 'neon-border bg-transparent hover:bg-primary/10 text-light-text'
                  }`}
                  size="lg"
                >
                  {plan.popular ? (
                    <>
                      <CreditCard className="mr-2 h-5 w-5" />
                      Start Free Trial
                    </>
                  ) : (
                    <>
                      <Clock className="mr-2 h-5 w-5" />
                      Get Started
                    </>
                  )}
                </Button>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <p className="text-muted-foreground">
            All plans include 14-day free trial. No credit card required.
          </p>
        </motion.div>
      </div>
    </section>
  );
};