import { useState, useEffect, useCallback } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Router BP полностью изменил безопасность нашей домашней сети. Одна настройка — и все устройства защищены.",
      name: "Михаил Петров",
      role: "Домовладелец",
      initials: "МП"
    },
    {
      quote: "Как удалённая команда, нам нужно было решение, которое защитит все устройства. Router BP дал именно это.",
      name: "Анна Смирнова",
      role: "Основатель стартапа",
      initials: "АС"
    },
    {
      quote: "Скорость невероятная. Я боялся, что VPN замедлит игры и стриминг, но мы не заметили разницы.",
      name: "Дмитрий Козлов",
      role: "Энтузиаст технологий",
      initials: "ДК"
    },
    {
      quote: "Наконец-то VPN-решение, которое мои родители могут использовать без звонков мне за помощью.",
      name: "Елена Волкова",
      role: "Разработчик",
      initials: "ЕВ"
    },
    {
      quote: "Мы перешли с VPN-приложений на Router BP и сократили расходы на безопасность вдвое.",
      name: "Сергей Новиков",
      role: "Владелец бизнеса",
      initials: "СН"
    },
    {
      quote: "Команда поддержки помогла мне всё настроить менее чем за 30 минут. Невероятно полезно.",
      name: "Ольга Белова",
      role: "Фрилансер",
      initials: "ОБ"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Show 3 cards at a time on desktop
  const visibleCards = 3;
  const maxIndex = testimonials.length - visibleCards;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 4000);
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
      
      <div className="relative z-10">
        {/* Section Header */}
        <div className="text-center mb-14 md:mb-16 px-4">
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold">
            отзывы
          </h2>
        </div>

        {/* Full-width Slider Container - extends beyond viewport */}
        <div className="relative">
          {/* Slides - no max-width, full overflow */}
          <div className="overflow-visible px-4 md:px-8">
            <div 
              className="flex transition-transform duration-500 ease-out gap-4 md:gap-6"
              style={{ 
                transform: `translateX(calc(-${currentIndex * (100 / visibleCards)}% - ${currentIndex * 24}px))`,
                marginLeft: 'calc((100vw - 320px * 3 - 48px) / 2)',
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.name}
                  className="w-[280px] md:w-[320px] flex-shrink-0"
                >
                  <div className="p-5 md:p-6 rounded-xl bg-gradient-to-b from-card/70 to-card/30 border border-border/40 backdrop-blur-sm h-full">
                    {/* Quote Icon */}
                    <Quote className="w-6 h-6 text-primary/20 mb-3" />
                    
                    {/* Quote Text */}
                    <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                      "{testimonial.quote}"
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-3">
                      {/* Avatar */}
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center border border-border/40 flex-shrink-0">
                        <span className="font-heading font-semibold text-xs text-primary/80">
                          {testimonial.initials}
                        </span>
                      </div>
                      
                      <div>
                        <p className="font-heading font-semibold text-sm">{testimonial.name}</p>
                        <p className="text-muted-foreground text-xs">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Gradient fades on edges */}
          <div className="absolute inset-y-0 left-0 w-20 md:w-40 bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
          <div className="absolute inset-y-0 right-0 w-20 md:w-40 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-center gap-4 mt-10 px-4">
          <Button
            variant="outline"
            size="icon"
            onClick={() => handleManualNav(prevSlide)}
            className="rounded-full w-10 h-10 border-border/60 hover:border-primary/40 hover:bg-primary/5"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>

          {/* Dots */}
          <div className="flex items-center gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => handleManualNav(() => setCurrentIndex(index))}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? "bg-primary w-5" 
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={() => handleManualNav(nextSlide)}
            className="rounded-full w-10 h-10 border-border/60 hover:border-primary/40 hover:bg-primary/5"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
