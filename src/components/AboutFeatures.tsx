import { Shield, Globe, Gauge, Wifi, Lock, Zap } from "lucide-react";

const AboutFeatures = () => {
  const features = [
    {
      icon: Shield,
      title: "Полная защита сети",
      description: "Защитите все устройства в вашей сети одной настройкой роутера. Без отдельных приложений."
    },
    {
      icon: Globe,
      title: "Глобальный доступ",
      description: "Подключайтесь к серверам в 90+ странах и получайте доступ к любому контенту без ограничений."
    },
    {
      icon: Gauge,
      title: "Максимальная скорость",
      description: "Оптимизированные серверы и протокол WireGuard обеспечивают скорость без потерь."
    },
    {
      icon: Wifi,
      title: "Для всех устройств",
      description: "Smart TV, игровые консоли, IoT-устройства и гаджеты гостей — всё под защитой."
    },
    {
      icon: Lock,
      title: "Без логов и слежки",
      description: "Мы не храним и не продаём ваши данные. Полная конфиденциальность гарантирована."
    },
    {
      icon: Zap,
      title: "Быстрая настройка",
      description: "Настройте VPN на роутере за 5 минут по нашей инструкции. Поддержка 24/7."
    }
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative overflow-hidden">
      
      <div className="w-full max-w-[1300px] mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-left mb-14 md:mb-16">
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold">
            о нас
          </h2>
        </div>

        {/* Features Grid - 6 cards in 2 rows of 3 */}
        <div className="space-y-6">
          {/* First row */}
          <div className="grid md:grid-cols-3 gap-6">
            {features.slice(0, 3).map((feature) => (
              <FeatureCard key={feature.title} feature={feature} />
            ))}
          </div>
          
          {/* Second row */}
          <div className="grid md:grid-cols-3 gap-6">
            {features.slice(3, 6).map((feature) => (
              <FeatureCard key={feature.title} feature={feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

interface Feature {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

const FeatureCard = ({ feature }: { feature: Feature }) => {
  const Icon = feature.icon;
  
  return (
    <div className="group relative p-6 rounded-2xl bg-gradient-to-b from-card/90 to-card/50 border border-border/40 hover:border-[#3CFF00]/30 transition-all duration-300 overflow-hidden">
      {/* Green glow on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#3CFF00]/0 to-[#3CFF00]/0 group-hover:from-[#3CFF00]/5 group-hover:to-transparent transition-all duration-500" />
      
      {/* Decorative top border glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-[#3CFF00]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10">
        {/* Icon with green accent */}
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#3CFF00]/15 to-[#3CFF00]/5 border border-[#3CFF00]/20 flex items-center justify-center mb-5 group-hover:from-[#3CFF00]/25 group-hover:to-[#3CFF00]/10 group-hover:border-[#3CFF00]/40 transition-all duration-300">
          <Icon className="w-6 h-6 text-[#3CFF00]" />
        </div>
        
        {/* Content */}
        <div className="flex items-center gap-2 mb-3">
          <div className="w-1.5 h-1.5 rounded-full bg-[#3CFF00]/60" />
          <h3 className="font-heading font-semibold text-lg text-foreground">
            {feature.title}
          </h3>
        </div>
        
        <p className="text-muted-foreground text-sm leading-relaxed">
          {feature.description}
        </p>
      </div>
    </div>
  );
};

export default AboutFeatures;
