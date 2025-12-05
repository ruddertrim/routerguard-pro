import { 
  Home, 
  Smartphone, 
  Zap, 
  ShieldOff, 
  Headphones, 
  Router,
  Check
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Home,
      title: "Full-Home VPN",
      description: "One router setup protects your entire household. Every device, every room, every connection.",
      highlights: ["Single configuration", "No per-device apps", "Automatic protection"]
    },
    {
      icon: Smartphone,
      title: "Auto-Protection",
      description: "Every device that connects to your network is automatically secured without any action required.",
      highlights: ["Smart TVs & consoles", "IoT devices", "Guest devices"]
    },
    {
      icon: Zap,
      title: "High-Speed Encrypted Traffic",
      description: "Our next-gen protocols ensure your connection stays fast even with full encryption enabled.",
      highlights: ["WireGuard protocol", "Optimized servers", "No throttling"]
    },
    {
      icon: ShieldOff,
      title: "No Logs, No Tracking",
      description: "We operate under a strict no-logs policy. Your browsing history stays yours — always.",
      highlights: ["Zero activity logs", "No connection logs", "Anonymous browsing"]
    },
    {
      icon: Headphones,
      title: "24/7 Expert Support",
      description: "Our dedicated team is available around the clock to help you with setup and troubleshooting.",
      highlights: ["Live chat support", "Remote assistance", "Knowledge base"]
    },
    {
      icon: Router,
      title: "Universal Compatibility",
      description: "Works with all major router brands including ASUS, Netgear, Linksys, TP-Link, and more.",
      highlights: ["Pre-configured routers", "Easy setup guides", "Firmware support"]
    }
  ];

  return (
    <section id="features" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/40 to-background" />
      <div className="absolute top-1/2 -translate-y-1/2 right-0 w-1/3 h-2/3 bg-primary/3 rounded-l-full blur-[80px]" />
      <div className="absolute top-1/4 left-0 w-1/4 h-1/2 bg-primary/2 rounded-r-full blur-[60px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <span className="inline-block text-primary/80 text-sm font-heading font-semibold tracking-wider uppercase mb-4">
            Features
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Everything You Need for <span className="text-primary">Complete Protection</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Router BP combines enterprise-grade security features with consumer-friendly 
            simplicity. No technical expertise required.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-8 rounded-2xl bg-gradient-to-b from-card/70 to-card/30 border border-border/40 hover:border-border/60 transition-all duration-500 shadow-lg hover:shadow-xl hover:-translate-y-1 backdrop-blur-sm"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center mb-6 group-hover:from-primary/20 group-hover:to-primary/10 transition-all duration-300">
                <feature.icon className="w-7 h-7 text-primary/80" />
              </div>

              {/* Content */}
              <h3 className="font-heading font-semibold text-xl mb-3">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                {feature.description}
              </p>

              {/* Highlights */}
              <ul className="space-y-2">
                {feature.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-center gap-2 text-sm">
                    <Check className="w-4 h-4 text-primary/70 flex-shrink-0" />
                    <span className="text-muted-foreground">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;