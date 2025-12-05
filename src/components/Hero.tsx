import { Button } from "@/components/ui/button";
import { Shield, Lock, Wifi, ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                              linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border/50 mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm text-muted-foreground">Enterprise-grade security for everyone</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Secure Your Entire Network
            <span className="block text-primary text-glow mt-2">With One Router</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Router BP provides military-grade VPN protection at the router level. 
            One setup protects every device in your home or business — no apps required.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button variant="hero" size="xl" className="w-full sm:w-auto group">
              Get Started
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="heroOutline" size="xl" className="w-full sm:w-auto">
              Start Free Trial
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 text-muted-foreground animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-primary" />
              <span className="text-sm">No Logs Policy</span>
            </div>
            <div className="flex items-center gap-2">
              <Lock className="w-5 h-5 text-primary" />
              <span className="text-sm">256-bit Encryption</span>
            </div>
            <div className="flex items-center gap-2">
              <Wifi className="w-5 h-5 text-primary" />
              <span className="text-sm">Unlimited Devices</span>
            </div>
          </div>
        </div>

        {/* Abstract shapes */}
        <div className="absolute top-1/3 left-10 w-20 h-20 border border-primary/20 rounded-lg rotate-45 animate-float hidden lg:block" />
        <div className="absolute bottom-1/3 right-10 w-16 h-16 border border-primary/30 rounded-full animate-float hidden lg:block" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 right-20 w-3 h-3 bg-primary/50 rounded-full animate-pulse hidden lg:block" />
      </div>
    </section>
  );
};

export default Hero;
