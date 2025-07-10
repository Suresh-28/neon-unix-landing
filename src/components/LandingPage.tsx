import { useEffect } from 'react';
import { Hero } from './Hero';
import { Features } from './Features';
import { ProductShowcase } from './ProductShowcase';
import { Specifications } from './Specifications';
import { Testimonials } from './Testimonials';
import { Pricing } from './Pricing';
import { Footer } from './Footer';

export const LandingPage = () => {
  useEffect(() => {
    // Optimize for 60fps animations
    document.documentElement.style.setProperty('--transition-smooth', 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)');
    
    // Add smooth scrolling
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 text-foreground overflow-x-hidden relative">
      {/* Animated background mesh */}
      <div className="fixed inset-0 opacity-30 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-mesh animate-float" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-radial animate-float" style={{ animationDelay: '2s' }} />
      </div>
      
      <div className="relative z-10">
        {/* Hero Section */}
        <Hero />
        
        {/* W-Shape SVG Divider */}
        <div className="relative">
          <svg
            className="absolute top-0 left-0 w-full h-16 fill-background"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path d="M0,0 L300,60 L600,0 L900,60 L1200,0 L1200,120 L0,120 Z" />
          </svg>
        </div>
        
        {/* Features Section */}
        <Features />
        
        {/* W-Shape SVG Divider */}
        <div className="relative">
          <svg
            className="absolute top-0 left-0 w-full h-16 fill-gradient-dark"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path d="M0,0 L300,60 L600,0 L900,60 L1200,0 L1200,120 L0,120 Z" />
          </svg>
        </div>
        
        {/* Product Showcase Section */}
        <ProductShowcase />
        
        {/* W-Shape SVG Divider */}
        <div className="relative">
          <svg
            className="absolute top-0 left-0 w-full h-16 fill-background"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path d="M0,0 L300,60 L600,0 L900,60 L1200,0 L1200,120 L0,120 Z" />
          </svg>
        </div>
        
        {/* Specifications Section */}
        <Specifications />
        
        {/* W-Shape SVG Divider */}
        <div className="relative">
          <svg
            className="absolute top-0 left-0 w-full h-16 fill-gradient-subtle"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path d="M0,0 L300,60 L600,0 L900,60 L1200,0 L1200,120 L0,120 Z" />
          </svg>
        </div>
        
        {/* Testimonials Section */}
        <Testimonials />
        
        {/* W-Shape SVG Divider */}
        <div className="relative">
          <svg
            className="absolute top-0 left-0 w-full h-16 fill-background"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path d="M0,0 L300,60 L600,0 L900,60 L1200,0 L1200,120 L0,120 Z" />
          </svg>
        </div>
        
        {/* Pricing Section */}
        <Pricing />
        
        {/* W-Shape SVG Divider */}
        <div className="relative">
          <svg
            className="absolute top-0 left-0 w-full h-16 fill-gradient-dark"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path d="M0,0 L300,60 L600,0 L900,60 L1200,0 L1200,120 L0,120 Z" />
          </svg>
        </div>
        
        {/* Footer Section */}
        <Footer />
      </div>
    </div>
  );
};