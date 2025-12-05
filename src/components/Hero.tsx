import { Button } from "@/components/ui/button";
import { Shield, Lock, Wifi, ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects - Softer gradients */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Soft gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-primary/8 to-transparent rounded-full blur-[100px]" />
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-gradient-to-tl from-primary/5 to-transparent rounded-full blur-[80px]" />
        
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-card/50" />
        
        {/* Grid pattern - more subtle */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                              linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
            backgroundSize: '80px 80px'
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/60 border border-border/40 mb-8 animate-fade-in backdrop-blur-sm" style={{ animationDelay: '0.1s' }}>
            <div className="w-2 h-2 bg-primary/80 rounded-full" />
            <span className="text-sm text-muted-foreground">Enterprise-grade security for everyone</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Secure Your Entire Network
            <span className="block text-primary mt-2">With One Router</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Router BP provides military-grade VPN protection at the router level. 
            One setup protects every device in your home or business — no apps required.
          </p>

          {/* Glassmorphism CTA Container */}
          <div 
            className="inline-block p-8 rounded-3xl bg-card/30 backdrop-blur-xl border border-border/30 shadow-2xl shadow-background/50 mb-16 animate-fade-in"
            style={{ animationDelay: '0.4s' }}
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="xl" className="w-full sm:w-auto group">
                Get Started
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="heroOutline" size="xl" className="w-full sm:w-auto">
                Start Free Trial
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-4">No credit card required • 30-day money-back guarantee</p>
          </div>

          {/* Trust indicators - in glass cards */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-secondary/40 border border-border/30 backdrop-blur-sm">
              <Shield className="w-4 h-4 text-primary/80" />
              <span className="text-sm text-muted-foreground">No Logs Policy</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-secondary/40 border border-border/30 backdrop-blur-sm">
              <Lock className="w-4 h-4 text-primary/80" />
              <span className="text-sm text-muted-foreground">256-bit Encryption</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-secondary/40 border border-border/30 backdrop-blur-sm">
              <Wifi className="w-4 h-4 text-primary/80" />
              <span className="text-sm text-muted-foreground">Unlimited Devices</span>
            </div>
          </div>
        </div>

        {/* Abstract shapes - softer */}
        <div className="absolute top-1/3 left-10 w-24 h-24 border border-primary/10 rounded-2xl rotate-12 animate-float hidden lg:block" />
        <div className="absolute bottom-1/3 right-10 w-20 h-20 border border-primary/15 rounded-full animate-float hidden lg:block" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 right-24 w-2 h-2 bg-primary/30 rounded-full hidden lg:block" />
        <div className="absolute bottom-1/2 left-24 w-3 h-3 bg-primary/20 rounded-full hidden lg:block" />
      </div>
    </section>
  );
};

export default Hero;