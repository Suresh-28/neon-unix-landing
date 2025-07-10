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
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
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
  );
};