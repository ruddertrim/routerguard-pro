import { Shield, Eye, Zap, Globe } from "lucide-react";

const About = () => {
  const differentiators = [
    {
      icon: Zap,
      title: "Молниеносная скорость",
      description: "Наши оптимизированные серверы обеспечивают максимальную скорость соединения даже при полном шифровании."
    },
    {
      icon: Shield,
      title: "Надёжная защита",
      description: "256-битное AES-шифрование военного уровня защищает вашу сеть от киберугроз и слежки."
    },
    {
      icon: Eye,
      title: "Без логов",
      description: "Мы никогда не отслеживаем, не храним и не продаём ваши данные. Ваша активность остаётся приватной."
    },
    {
      icon: Globe,
      title: "Глобальное покрытие",
      description: "Доступ к контенту из любой точки мира благодаря сети серверов в 90+ странах."
    }
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-card/30 via-background to-background" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/3 rounded-full blur-[100px]" />
      
      <div className="w-full max-w-[1300px] mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 md:mb-16">
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold">
            о нас
          </h2>
        </div>

        {/* Why Router-Level VPN */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16 max-w-5xl mx-auto">
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <h3 className="font-heading text-2xl md:text-3xl font-bold mb-6">
              Почему VPN на уровне роутера?
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Обычные VPN-приложения защищают только то устройство, на которое установлены. 
                Это значит, что ваш Smart TV, игровая консоль, IoT-устройства и телефоны гостей 
                остаются незащищёнными.
              </p>
              <p>
                С Router BP защита VPN происходит в источнике — вашем роутере. 
                Каждое устройство, подключённое к сети, автоматически защищено 
                без дополнительного ПО или настройки.
              </p>
              <p className="text-foreground font-medium">
                Одна настройка. Полная защита. Никаких хлопот.
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
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {differentiators.map((item, index) => (
            <div
              key={item.title}
              className="group p-6 rounded-2xl bg-gradient-to-b from-card/80 to-card/40 border border-border/40 hover:border-border/60 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center mb-4 group-hover:from-primary/20 group-hover:to-primary/10 transition-colors mx-auto">
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
