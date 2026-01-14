import { ChevronRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background Grid */}
      <div className="absolute inset-0">
        {/* Grid pattern */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, hsl(var(--foreground) / 0.03) 1px, transparent 1px),
              linear-gradient(to bottom, hsl(var(--foreground) / 0.03) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }}
        />
        
        {/* Circular background effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-muted-foreground/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-muted-foreground/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-muted-foreground/10" />
        
        {/* Subtle vignette/gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50" />
      </div>

      <div className="w-full max-w-[1300px] mx-auto px-4 relative z-10">
        <div className="flex flex-col items-start text-left">
          {/* Main Headline */}
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.1] tracking-tight mb-6 w-full">
            Лучший способ защитить вашу сеть.
          </h1>

          {/* Subtitle */}
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mb-10 leading-relaxed">
            Router BP обеспечивает VPN-защиту военного уровня на уровне роутера, позволяя защитить все устройства дома или в офисе.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-start gap-5">
            {/* Primary button - dark bg */}
            <a 
              href="#pricing"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-secondary text-foreground font-medium text-base hover:bg-secondary/80 transition-colors border border-border/30"
            >
              Начать
            </a>
            
            {/* Secondary button - outline with accent */}
            <a 
              href="#about" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-transparent text-primary font-medium text-base border border-primary/30 hover:bg-primary/10 transition-colors"
            >
              Узнать больше
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
