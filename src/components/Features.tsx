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
      title: "VPN для всего дома",
      description: "Одна настройка роутера защищает весь дом. Каждое устройство, каждая комната, каждое подключение.",
      highlights: ["Единая конфигурация", "Без приложений", "Автозащита"]
    },
    {
      icon: Smartphone,
      title: "Автозащита устройств",
      description: "Каждое устройство, подключённое к сети, автоматически защищено без каких-либо действий.",
      highlights: ["Smart TV и консоли", "IoT-устройства", "Гостевые устройства"]
    },
    {
      icon: Zap,
      title: "Быстрый шифрованный трафик",
      description: "Наши протоколы нового поколения обеспечивают высокую скорость даже при полном шифровании.",
      highlights: ["Протокол WireGuard", "Оптимизированные серверы", "Без ограничений"]
    }
  ];

  return (
    <section id="features" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/40 to-background" />
      <div className="absolute top-1/2 -translate-y-1/2 right-0 w-1/3 h-2/3 bg-primary/3 rounded-l-full blur-[80px]" />
      <div className="absolute top-1/4 left-0 w-1/4 h-1/2 bg-primary/2 rounded-r-full blur-[60px]" />
      
      <div className="w-full max-w-[1300px] mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 md:mb-16">
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold">
            преимущества
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-8 rounded-2xl bg-gradient-to-b from-card/70 to-card/30 border border-border/40 hover:border-border/60 transition-all duration-500 shadow-lg hover:shadow-xl hover:-translate-y-1 backdrop-blur-sm"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center mb-6 group-hover:from-primary/20 group-hover:to-primary/10 transition-all duration-300 mx-auto">
                <feature.icon className="w-7 h-7 text-primary/80" />
              </div>

              {/* Content */}
              <h3 className="font-heading font-semibold text-xl mb-3 text-center">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5 text-center">
                {feature.description}
              </p>

              {/* Highlights */}
              <ul className="space-y-2">
                {feature.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-center justify-center gap-2 text-sm">
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
