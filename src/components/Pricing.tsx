import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(true);

  const plans = [
    {
      name: "Базовый",
      description: "Идеален для отдельных пользователей и небольших домохозяйств",
      monthlyPrice: 9.99,
      yearlyPrice: 7.99,
      features: [
        "До 5 устройств",
        "50+ локаций серверов",
        "256-битное шифрование",
        "Политика без логов",
        "Email-поддержка",
        "Базовое руководство"
      ],
      popular: false
    },
    {
      name: "Расширенный",
      description: "Идеален для семей и продвинутых пользователей",
      monthlyPrice: 14.99,
      yearlyPrice: 11.99,
      features: [
        "До 15 устройств",
        "90+ локаций серверов",
        "256-битное шифрование",
        "Политика без логов",
        "Чат-поддержка 24/7",
        "Удалённая настройка",
        "Раздельное туннелирование",
        "Блокировка рекламы и вирусов"
      ],
      popular: true
    },
    {
      name: "Про",
      description: "Для бизнеса и продвинутых пользователей",
      monthlyPrice: 24.99,
      yearlyPrice: 19.99,
      features: [
        "Безлимит устройств",
        "90+ локаций серверов",
        "256-битное шифрование",
        "Политика без логов",
        "Приоритетная поддержка 24/7",
        "Персональный менеджер",
        "Раздельное туннелирование",
        "Блокировка рекламы и вирусов",
        "Выделенный IP",
        "Поддержка нескольких роутеров"
      ],
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
        <div className="max-w-3xl mx-auto text-center mb-10 md:mb-14">
          <span className="inline-block text-primary/80 text-sm font-heading font-semibold tracking-wider uppercase mb-4">
            Тарифы
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Простые и прозрачные <span className="text-primary">цены</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            Выберите план, который подходит вашим потребностям. Все планы включают 
            основные функции безопасности с 30-дневной гарантией возврата денег.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center gap-1 p-1.5 rounded-full bg-secondary/60 border border-border/40 backdrop-blur-sm">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                !isYearly 
                  ? "bg-card text-foreground shadow-md" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Ежемесячно
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                isYearly 
                  ? "bg-card text-foreground shadow-md" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Ежегодно
              <span className="text-xs text-primary/80 font-semibold">-20%</span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative p-8 rounded-2xl border transition-all duration-300 ${
                plan.popular 
                  ? "bg-gradient-to-b from-primary/8 to-card/60 border-primary/30 scale-105 shadow-2xl backdrop-blur-sm" 
                  : "bg-gradient-to-b from-card/70 to-card/30 border-border/40 hover:border-border/60 shadow-lg hover:shadow-xl hover:-translate-y-1"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-xs font-heading font-semibold uppercase tracking-wider shadow-lg">
                    <Star className="w-3 h-3 fill-current" />
                    Популярный
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="font-heading font-bold text-2xl mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mb-6">{plan.description}</p>
                
                {/* Price */}
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl md:text-5xl font-heading font-bold">
                    ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-muted-foreground">/мес</span>
                </div>
                {isYearly && (
                  <p className="text-xs text-muted-foreground mt-2">
                    Оплата раз в год (${(plan.yearlyPrice * 12).toFixed(0)}/год)
                  </p>
                )}
              </div>

              {/* CTA Button */}
              <Button 
                variant={plan.popular ? "hero" : "outline"} 
                size="lg" 
                className="w-full mb-8"
              >
                Начать
              </Button>

              {/* Features List */}
              <ul className="space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                      plan.popular ? "text-primary/80" : "text-muted-foreground"
                    }`} />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Money-back guarantee */}
        <p className="text-center text-muted-foreground text-sm mt-12">
          Все планы включают <span className="text-foreground font-medium">30-дневную гарантию возврата</span>. 
          Без лишних вопросов.
        </p>
      </div>
    </section>
  );
};

export default Pricing;
