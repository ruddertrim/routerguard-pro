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
    <section id="features" className="py-24 md:py-32 bg-card/50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 -translate-y-1/2 right-0 w-1/3 h-2/3 bg-primary/5 rounded-l-full blur-[100px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <span className="inline-block text-primary text-sm font-heading font-semibold tracking-wider uppercase mb-4">
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
              className="group p-8 rounded-2xl bg-background border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-lg hover:shadow-primary/5"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7 text-primary" />
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
                    <Check className="w-4 h-4 text-primary flex-shrink-0" />
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
