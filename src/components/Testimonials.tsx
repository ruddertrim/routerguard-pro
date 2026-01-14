import { useState, useEffect, useCallback } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Router BP полностью изменил безопасность нашей домашней сети. Одна настройка — и все устройства защищены, включая планшеты детей и умный дом.",
      name: "Михаил Петров",
      role: "Домовладелец",
      initials: "МП"
    },
    {
      quote: "Как удалённая команда, нам нужно было решение, которое защитит все офисные устройства без сложных настроек. Router BP дал именно это.",
      name: "Анна Смирнова",
      role: "Основатель стартапа",
      initials: "АС"
    },
    {
      quote: "Скорость невероятная. Я боялся, что VPN замедлит игры и стриминг, но мы вообще не заметили разницы.",
      name: "Дмитрий Козлов",
      role: "Энтузиаст технологий",
      initials: "ДК"
    },
    {
      quote: "Наконец-то VPN-решение, которое мои родители могут использовать без звонков мне за технической помощью. Настроил один раз — и забыл.",
      name: "Елена Волкова",
      role: "Разработчик",
      initials: "ЕВ"
    },
    {
      quote: "Мы перешли с индивидуальных VPN-приложений на Router BP и сократили расходы на безопасность вдвое, улучшив покрытие.",
      name: "Сергей Новиков",
      role: "Владелец малого бизнеса",
      initials: "СН"
    },
    {
      quote: "Команда поддержки 24/7 помогла мне всё настроить менее чем за 30 минут. Профессионально, терпеливо и невероятно полезно.",
      name: "Ольга Белова",
      role: "Фрилансер",
      initials: "ОБ"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  const handleManualNav = (action: () => void) => {
    setIsAutoPlaying(false);
    action();
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section id="testimonials" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/40 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/3 rounded-full blur-[120px]" />
      
      <div className="w-full max-w-[1300px] mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 md:mb-16">
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold">
            отзывы
          </h2>
        </div>

        {/* Slider Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Slides */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.name}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="p-8 md:p-12 rounded-2xl bg-gradient-to-b from-card/70 to-card/30 border border-border/40 backdrop-blur-sm text-center">
                    {/* Quote Icon */}
                    <Quote className="w-10 h-10 text-primary/20 mb-6 mx-auto" />
                    
                    {/* Quote Text */}
                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
                      "{testimonial.quote}"
                    </p>

                    {/* Author */}
                    <div className="flex flex-col items-center gap-3">
                      {/* Avatar */}
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center border border-border/40">
                        <span className="font-heading font-semibold text-base text-primary/80">
                          {testimonial.initials}
                        </span>
                      </div>
                      
                      <div className="text-center">
                        <p className="font-heading font-semibold">{testimonial.name}</p>
                        <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={() => handleManualNav(prevSlide)}
              className="rounded-full w-12 h-12 border-border/60 hover:border-primary/40 hover:bg-primary/5"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleManualNav(() => setCurrentIndex(index))}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? "bg-primary w-6" 
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={() => handleManualNav(nextSlide)}
              className="rounded-full w-12 h-12 border-border/60 hover:border-primary/40 hover:bg-primary/5"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
