import { Check, Plus } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Hobby",
      price: 99,
      buttonText: "Get Hobby",
      features: [
        "Доступ к базовым отчётам",
        "До 10,000 точек данных в месяц",
        "Email-поддержка",
        "Доступ к сообществу",
        "Отмена в любое время"
      ],
      includedPlans: [],
      popular: false
    },
    {
      name: "Starter",
      price: 299,
      buttonText: "Get Starter",
      features: [
        "Расширенная аналитика",
        "Настраиваемые отчёты и графики",
        "Отслеживание в реальном времени",
        "Интеграция со сторонними инструментами"
      ],
      includedPlans: ["Hobby Plan"],
      popular: true
    },
    {
      name: "Pro",
      price: 1490,
      buttonText: "Get Pro",
      features: [
        "Безлимитное хранение данных",
        "Настраиваемые дашборды",
        "Продвинутая сегментация данных",
        "Обработка в реальном времени",
        "AI-аналитика и рекомендации"
      ],
      includedPlans: ["Hobby Plan", "Starter Plan"],
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
              className="relative flex flex-col p-6 md:p-8 rounded-2xl bg-card/60 border border-border/40 backdrop-blur-sm"
            >
              {/* Plan Header */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-heading font-semibold text-xl">{plan.name}</h3>
                {plan.popular && (
                  <span className="px-3 py-1 rounded-full border border-border/60 text-xs font-medium text-muted-foreground">
                    Featured
                  </span>
                )}
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-lg text-muted-foreground align-top">$</span>
                <span className="text-6xl md:text-7xl font-heading font-bold tracking-tight">
                  {plan.price}
                </span>
                <span className="text-muted-foreground">/month</span>
              </div>

              {/* CTA Button */}
              <button 
                className="w-full py-3.5 rounded-lg bg-[hsl(195,100%,50%)] text-background font-medium text-sm hover:bg-[hsl(195,100%,45%)] transition-colors mb-8"
              >
                {plan.buttonText}
              </button>

              {/* Features List */}
              <ul className="space-y-3 flex-grow">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-4 h-4 flex-shrink-0 mt-0.5 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Included Plans */}
              {plan.includedPlans.length > 0 && (
                <div className="mt-6 pt-6 border-t border-border/40">
                  <div className="flex items-center gap-2 mb-4">
                    <Plus className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <ul className="space-y-2">
                    {plan.includedPlans.map((includedPlan) => (
                      <li key={includedPlan} className="flex items-center gap-3">
                        <div className="w-4 h-4 rounded-full bg-[hsl(195,100%,50%)] flex items-center justify-center">
                          <Check className="w-2.5 h-2.5 text-background" />
                        </div>
                        <span className="text-sm text-[hsl(195,100%,50%)]">Everything in {includedPlan}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Money-back guarantee */}
        <p className="text-left text-muted-foreground text-sm mt-12">
          Все планы включают <span className="text-foreground font-medium">30-дневную гарантию возврата</span>. 
          Без лишних вопросов.
        </p>
      </div>
    </section>
  );
};

export default Pricing;
