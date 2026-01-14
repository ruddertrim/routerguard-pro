import { Quote } from "lucide-react";

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

  return (
    <section id="testimonials" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/40 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/3 rounded-full blur-[120px]" />
      
      <div className="w-full max-w-[1300px] mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 md:mb-16">
          <span className="inline-block text-primary/80 text-sm font-heading font-semibold tracking-wider uppercase mb-4">
            Отзывы
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Нам доверяют <span className="text-primary">тысячи</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Присоединяйтесь к растущему сообществу домов и компаний, которые доверяют Router BP 
            свою сетевую безопасность.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="group p-6 md:p-8 rounded-2xl bg-gradient-to-b from-card/70 to-card/30 border border-border/40 hover:border-border/60 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 backdrop-blur-sm"
            >
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-primary/20 mb-4" />
              
              {/* Quote Text */}
              <p className="text-muted-foreground leading-relaxed mb-6">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                {/* Avatar */}
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center border border-border/40">
                  <span className="font-heading font-semibold text-sm text-primary/80">
                    {testimonial.initials}
                  </span>
                </div>
                
                <div>
                  <p className="font-heading font-semibold text-sm">{testimonial.name}</p>
                  <p className="text-muted-foreground text-xs">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
