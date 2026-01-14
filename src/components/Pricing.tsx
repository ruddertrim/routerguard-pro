import { Check, ArrowRight } from "lucide-react";

const Pricing = () => {
  const features = [
    "Доступ ко всем сайтам и сервисам",
    "Выборочная маршрутизация",
    "Безлимитный трафик",
    "Блокировка рекламы на YouTube",
    "Для всех устройств в доме",
    "Поддерживает Smart TV, Apple TV, Android TV и другие"
  ];

  const plans = [
    {
      name: "1 месяц",
      price: 990,
      period: "₽/мес",
      buttonText: "Выбрать",
      popular: false
    },
    {
      name: "3 месяца",
      price: 790,
      period: "₽/мес",
      buttonText: "Выбрать",
      popular: true
    },
    {
      name: "6 месяцев",
      price: 590,
      period: "₽/мес",
      buttonText: "Выбрать",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background with soft gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary/3 rounded-full blur-[120px]" />
      
      <div className="w-full max-w-[1300px] mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-left mb-10 md:mb-14">
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold">
            тарифы
          </h2>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="relative flex flex-col p-6 md:p-8 rounded-2xl bg-card/60 border border-border/40 backdrop-blur-sm min-h-[600px]"
            >
              {/* Plan Header */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-heading font-semibold text-xl">{plan.name}</h3>
                {plan.popular && (
                  <span className="px-3 py-1 rounded-full border border-border/60 text-xs font-medium text-muted-foreground">
                    Популярный
                  </span>
                )}
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-6xl md:text-7xl font-heading font-bold tracking-tight">
                  {plan.price}
                </span>
                <span className="text-muted-foreground">{plan.period}</span>
              </div>

              {/* CTA Button */}
              <button 
                className="w-full py-3.5 rounded-full bg-[hsl(142,76%,36%)] text-white font-medium text-sm hover:bg-[hsl(142,76%,30%)] transition-colors mb-8"
              >
                {plan.buttonText}
              </button>

              {/* Features List */}
              <ul className="space-y-3 flex-grow">
                {features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-4 h-4 flex-shrink-0 mt-0.5 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Money-back guarantee */}
        <p className="text-left text-muted-foreground text-sm mt-12">
          Все планы включают <span className="text-foreground font-medium">30-дневную гарантию возврата</span>. 
          Без лишних вопросов.
        </p>

        {/* VPN for devices link */}
        <a 
          href="#" 
          className="inline-flex items-center gap-2 mt-4 text-sm text-muted-foreground hover:text-[#3CFF00] transition-colors group"
        >
          <span>VPN для ПК, мобильных устройств и TV</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </section>
  );
};

export default Pricing;
