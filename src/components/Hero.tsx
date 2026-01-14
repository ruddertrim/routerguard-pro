import { ChevronRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background Grid */}
      <div className="absolute inset-0">
        {/* Grid pattern with blur */}
        <div 
          className="absolute inset-0 backdrop-blur-[1px]"
          style={{
            backgroundImage: `
              linear-gradient(to right, hsl(var(--foreground) / 0.03) 1px, transparent 1px),
              linear-gradient(to bottom, hsl(var(--foreground) / 0.03) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }}
        />
        
        {/* Green glow accent */}
        <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-[#3CFF00]/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/3 w-[200px] h-[200px] bg-[#3CFF00]/5 rounded-full blur-[100px]" />
        
        {/* Circular background effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-[#3CFF00]/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-[#3CFF00]/8" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-[#3CFF00]/10" />
        
        {/* Smooth gradient fade at bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
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
          <div className="flex flex-col sm:flex-row items-start gap-4">
            {/* Primary button - green */}
            <a 
              href="#pricing"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-xl bg-[#3CFF00] text-black font-medium text-base hover:bg-[#35e600] hover:scale-105 transition-all duration-200"
            >
              Начать
            </a>
            
            {/* Secondary button - outline */}
            <a 
              href="#about" 
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-transparent text-muted-foreground font-medium text-base border border-border/50 hover:border-[#3CFF00]/50 hover:text-[#3CFF00] transition-all duration-200"
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
