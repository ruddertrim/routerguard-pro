import { Shield, Eye, Zap, Globe } from "lucide-react";

const About = () => {
  const differentiators = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Our optimized servers ensure your connection speed remains blazing fast, even with full encryption enabled."
    },
    {
      icon: Shield,
      title: "Rock-Solid Security",
      description: "Military-grade 256-bit AES encryption protects your entire network from cyber threats and surveillance."
    },
    {
      icon: Eye,
      title: "Zero Logs",
      description: "We never track, store, or sell your data. Your online activity remains completely private."
    },
    {
      icon: Globe,
      title: "Global Coverage",
      description: "Access content from anywhere with our network of servers spanning 90+ countries worldwide."
    }
  ];

  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-card/30 via-background to-background" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/3 rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <span className="inline-block text-primary/80 text-sm font-heading font-semibold tracking-wider uppercase mb-4">
            About Router BP
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Privacy Is a Right, <span className="text-primary">Not a Privilege</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Router BP was founded with a single mission: to make enterprise-grade network security 
            accessible to everyone. We believe that your digital privacy shouldn't depend on 
            technical expertise or expensive solutions.
          </p>
        </div>

        {/* Why Router-Level VPN */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="order-2 lg:order-1">
            <h3 className="font-heading text-2xl md:text-3xl font-bold mb-6">
              Why Router-Level VPN?
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Traditional VPN apps only protect the device they're installed on. That means 
                your smart TV, gaming console, IoT devices, and guest phones remain exposed.
              </p>
              <p>
                With Router BP, your VPN protection happens at the source — your router. 
                Every single device that connects to your network is automatically protected, 
                without any additional software or configuration.
              </p>
              <p className="text-foreground font-medium">
                One setup. Complete protection. Zero hassle.
              </p>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            {/* Abstract visual representation with glassmorphism */}
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Central shield - glass effect */}
              <div className="absolute inset-1/4 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl rounded-2xl border border-border/50 flex items-center justify-center shadow-xl">
                <Shield className="w-16 h-16 text-primary/80" />
              </div>
              
              {/* Orbiting elements with softer styling */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-14 h-14 bg-gradient-to-br from-secondary to-secondary/60 rounded-xl flex items-center justify-center border border-border/40 shadow-lg">
                <span className="text-xs font-mono text-muted-foreground">TV</span>
              </div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-14 h-14 bg-gradient-to-br from-secondary to-secondary/60 rounded-xl flex items-center justify-center border border-border/40 shadow-lg">
                <span className="text-xs font-mono text-muted-foreground">IoT</span>
              </div>
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-14 h-14 bg-gradient-to-br from-secondary to-secondary/60 rounded-xl flex items-center justify-center border border-border/40 shadow-lg">
                <span className="text-xs font-mono text-muted-foreground">PC</span>
              </div>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-14 h-14 bg-gradient-to-br from-secondary to-secondary/60 rounded-xl flex items-center justify-center border border-border/40 shadow-lg">
                <span className="text-xs font-mono text-muted-foreground">Phone</span>
              </div>
              
              {/* Connection lines - softer */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                <line x1="50" y1="14" x2="50" y2="28" stroke="hsl(var(--primary) / 0.25)" strokeWidth="1" strokeDasharray="3,3" />
                <line x1="50" y1="72" x2="50" y2="86" stroke="hsl(var(--primary) / 0.25)" strokeWidth="1" strokeDasharray="3,3" />
                <line x1="14" y1="50" x2="28" y2="50" stroke="hsl(var(--primary) / 0.25)" strokeWidth="1" strokeDasharray="3,3" />
                <line x1="72" y1="50" x2="86" y2="50" stroke="hsl(var(--primary) / 0.25)" strokeWidth="1" strokeDasharray="3,3" />
              </svg>
            </div>
          </div>
        </div>

        {/* Differentiators Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {differentiators.map((item, index) => (
            <div
              key={item.title}
              className="group p-6 rounded-2xl bg-gradient-to-b from-card/80 to-card/40 border border-border/40 hover:border-border/60 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center mb-4 group-hover:from-primary/20 group-hover:to-primary/10 transition-colors">
                <item.icon className="w-6 h-6 text-primary/80" />
              </div>
              <h4 className="font-heading font-semibold text-lg mb-2">{item.title}</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;