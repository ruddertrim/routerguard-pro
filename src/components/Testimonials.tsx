import { Quote } from "lucide-react";

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
    },
    {
      quote: "Защита всей семьи одним устройством — это именно то, что нам было нужно. Спасибо Router BP!",
      name: "Алексей Морозов",
      role: "Отец семейства",
      initials: "АМ"
    },
    {
      quote: "Интерфейс настолько простой, что даже бабушка разобралась за 5 минут.",
      name: "Ирина Соколова",
      role: "Блогер",
      initials: "ИС"
    },
    {
      quote: "Работаю из разных стран — Router BP везде обеспечивает стабильное и безопасное соединение.",
      name: "Павел Лебедев",
      role: "Цифровой кочевник",
      initials: "ПЛ"
    },
    {
      quote: "После установки забыл о проблемах с безопасностью. Всё работает автоматически.",
      name: "Наталья Крылова",
      role: "Дизайнер",
      initials: "НК"
    }
  ];

  // Duplicate for seamless loop
  const duplicatedTestimonials = [...testimonials, ...testimonials];

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

        {/* Infinite Slider */}
        <div className="relative overflow-hidden">
          {/* Sliding track */}
          <div 
            className="flex gap-5 animate-scroll"
            style={{
              width: 'max-content',
            }}
          >
            {duplicatedTestimonials.map((testimonial, index) => (
              <div
                key={`${testimonial.name}-${index}`}
                className="w-[300px] md:w-[340px] flex-shrink-0"
              >
                <div className="p-6 md:p-7 rounded-xl bg-gradient-to-b from-card/70 to-card/30 border border-border/40 backdrop-blur-sm h-full min-h-[220px] flex flex-col">
                  {/* Quote Icon */}
                  <Quote className="w-6 h-6 text-primary/20 mb-4" />
                  
                  {/* Quote Text */}
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-grow">
                    "{testimonial.quote}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3 mt-auto">
                    {/* Avatar */}
                    <div className="w-11 h-11 rounded-full bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center border border-border/40 flex-shrink-0">
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

          {/* Gradient fades on edges */}
          <div className="absolute inset-y-0 left-0 w-20 md:w-40 bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
          <div className="absolute inset-y-0 right-0 w-20 md:w-40 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
