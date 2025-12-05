import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(true);

  const plans = [
    {
      name: "Basic",
      description: "Perfect for individuals and small households",
      monthlyPrice: 9.99,
      yearlyPrice: 7.99,
      features: [
        "Up to 5 devices",
        "50+ server locations",
        "256-bit encryption",
        "No-logs policy",
        "Email support",
        "Basic setup guide"
      ],
      popular: false
    },
    {
      name: "Advanced",
      description: "Ideal for families and power users",
      monthlyPrice: 14.99,
      yearlyPrice: 11.99,
      features: [
        "Up to 15 devices",
        "90+ server locations",
        "256-bit encryption",
        "No-logs policy",
        "24/7 live chat support",
        "Remote setup assistance",
        "Split tunneling",
        "Ad & malware blocker"
      ],
      popular: true
    },
    {
      name: "Pro",
      description: "For businesses and advanced users",
      monthlyPrice: 24.99,
      yearlyPrice: 19.99,
      features: [
        "Unlimited devices",
        "90+ server locations",
        "256-bit encryption",
        "No-logs policy",
        "Priority 24/7 support",
        "Dedicated account manager",
        "Split tunneling",
        "Ad & malware blocker",
        "Dedicated IP option",
        "Multi-router support"
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <span className="inline-block text-primary text-sm font-heading font-semibold tracking-wider uppercase mb-4">
            Pricing
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Simple, Transparent <span className="text-primary">Pricing</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            Choose the plan that fits your needs. All plans include our core security features 
            with a 30-day money-back guarantee.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center gap-4 p-1.5 rounded-full bg-secondary border border-border">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                !isYearly 
                  ? "bg-background text-foreground shadow-sm" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                isYearly 
                  ? "bg-background text-foreground shadow-sm" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Yearly
              <span className="text-xs text-primary font-semibold">Save 20%</span>
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
                  ? "bg-gradient-to-b from-primary/10 to-background border-primary/50 scale-105 shadow-xl shadow-primary/10" 
                  : "bg-card border-border hover:border-primary/30"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-xs font-heading font-semibold uppercase tracking-wider">
                    <Star className="w-3 h-3 fill-current" />
                    Most Popular
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
                  <span className="text-muted-foreground">/mo</span>
                </div>
                {isYearly && (
                  <p className="text-xs text-muted-foreground mt-2">
                    Billed annually (${(plan.yearlyPrice * 12).toFixed(0)}/year)
                  </p>
                )}
              </div>

              {/* CTA Button */}
              <Button 
                variant={plan.popular ? "hero" : "outline"} 
                size="lg" 
                className="w-full mb-8"
              >
                Get Started
              </Button>

              {/* Features List */}
              <ul className="space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                      plan.popular ? "text-primary" : "text-muted-foreground"
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
          All plans include a <span className="text-foreground font-medium">30-day money-back guarantee</span>. 
          No questions asked.
        </p>
      </div>
    </section>
  );
};

export default Pricing;
