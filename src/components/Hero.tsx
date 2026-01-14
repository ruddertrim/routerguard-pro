import { ChevronRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0">
        {/* Grid pattern - matching reference exactly */}
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
        
        {/* Subtle vignette/gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50" />
      </div>

      <div className="w-full max-w-[1300px] mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Badge - matching reference style */}
          <a 
            href="#features" 
            className="inline-flex items-center gap-2 pl-1 pr-3 py-1 rounded-full border border-primary/40 bg-primary/5 mb-8 hover:bg-primary/10 transition-colors cursor-pointer group"
          >
            <span className="text-xs font-semibold text-background bg-primary px-2.5 py-1 rounded-full">Новинка</span>
            <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">Лучший VPN для роутера</span>
            <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
          </a>

          {/* Main Headline - large, with period */}
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.1] tracking-tight mb-6 w-full">
            Лучший способ защитить вашу сеть.
          </h1>

          {/* Subtitle - muted, smaller */}
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Router BP обеспечивает VPN-защиту военного уровня на уровне роутера, позволяя защитить все устройства дома или в офисе.
          </p>

          {/* CTA Buttons - matching reference exactly */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            {/* Primary button - white bg, dark text, rounded */}
            <a 
              href="#pricing"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background font-medium text-sm hover:bg-foreground/90 transition-colors group"
            >
              Начать
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            
            {/* Secondary button - just text with arrow */}
            <a 
              href="#about" 
              className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors font-medium text-sm group"
            >
              Узнать больше
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>

          {/* Social proof - avatars + review count */}
          <div className="flex flex-col items-center gap-3">
            {/* Avatar stack */}
            <div className="flex items-center -space-x-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/60 to-primary/30 border-2 border-background" />
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-muted to-muted-foreground/30 border-2 border-background" />
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/40 to-primary/20 border-2 border-background" />
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-muted-foreground/40 to-muted/40 border-2 border-background" />
            </div>
            {/* Review text */}
            <p className="text-sm text-muted-foreground">
              1,200+ отзывов (4.9 из 5)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
