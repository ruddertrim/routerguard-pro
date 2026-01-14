import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Как работает VPN на уровне роутера?",
      answer: "VPN на уровне роутера шифрует весь интернет-трафик в источнике — вашем роутере. Вместо установки VPN-приложений на каждое устройство, вы настраиваете VPN один раз на роутере. Каждое устройство, подключённое к сети (телефоны, ноутбуки, Smart TV, игровые консоли, IoT-устройства), автоматически защищено без дополнительной настройки."
    },
    {
      question: "Сложно ли настроить Router BP?",
      answer: "Совсем нет. Большинство пользователей завершают настройку менее чем за 30 минут. Мы предоставляем пошаговые инструкции для всех основных брендов роутеров, а наша команда поддержки 24/7 может помочь удалённо. Мы также предлагаем готовые роутеры для тех, кто хочет решение «подключил и работает»."
    },
    {
      question: "Router BP замедлит моё интернет-соединение?",
      answer: "Router BP использует WireGuard — самый быстрый VPN-протокол. Большинство пользователей испытывают снижение скорости менее 5%, что практически незаметно. Наша сеть оптимизированных серверов обеспечивает лучшую скорость при полном шифровании."
    },
    {
      question: "Какие роутеры совместимы с Router BP?",
      answer: "Router BP работает с большинством основных брендов роутеров, включая ASUS, Netgear, Linksys, TP-Link, D-Link и многие другие. Мы поддерживаем как стандартные прошивки, так и кастомные, такие как DD-WRT и OpenWrt. Проверьте страницу совместимости или свяжитесь с поддержкой, если не уверены в своей модели роутера."
    },
    {
      question: "Могу ли я выбрать, какие устройства используют VPN?",
      answer: "Да! Планы «Расширенный» и «Про» включают раздельное туннелирование, которое позволяет выбирать, какие устройства направлять через VPN, а какие подключать напрямую. Это полезно для устройств, которым нужен локальный IP-адрес, или сервисов, блокирующих VPN-трафик."
    },
    {
      question: "Как происходит оплата?",
      answer: "Мы предлагаем ежемесячную и ежегодную оплату. Годовые планы включают скидку 20%. Все планы имеют 30-дневную гарантию возврата денег — если вы не удовлетворены по любой причине, мы вернём оплату полностью, без лишних вопросов."
    },
    {
      question: "Вы храните логи моей активности?",
      answer: "Категорически нет. Router BP работает по строгой политике без логов. Мы не отслеживаем, не храним и не передаём информацию о вашей активности в браузере, времени подключения или IP-адресах. Ваша приватность — наш главный приоритет."
    },
    {
      question: "Могу ли я использовать Router BP для бизнеса?",
      answer: "Да! Наш план «Про» разработан для бизнеса и включает такие функции, как безлимит устройств, выделенный IP, поддержку нескольких роутеров и персонального менеджера. Свяжитесь с нашим отделом продаж для кастомных корпоративных решений."
    }
  ];

  return (
    <section id="faq" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-primary/5 rounded-tr-full blur-[100px]" />
      
      <div className="w-full max-w-[1300px] mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 md:mb-16">
          <span className="inline-block text-primary text-sm font-heading font-semibold tracking-wider uppercase mb-4">
            FAQ
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Часто задаваемые <span className="text-primary">вопросы</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Есть вопросы? У нас есть ответы. Если не нашли нужного, 
            наша команда поддержки всегда рада помочь.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary/30 transition-colors"
              >
                <AccordionTrigger className="text-left font-heading font-medium py-5 hover:no-underline hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
