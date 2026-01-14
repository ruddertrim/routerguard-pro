import { Shield, Mail, Phone } from "lucide-react";
const Footer = () => {
  const footerLinks = {
    product: [{
      name: "Преимущества",
      href: "#features"
    }, {
      name: "Тарифы",
      href: "#pricing"
    }, {
      name: "Совместимость",
      href: "#"
    }, {
      name: "Локации серверов",
      href: "#"
    }],
    company: [{
      name: "О нас",
      href: "#about"
    }, {
      name: "Карьера",
      href: "#"
    }, {
      name: "Пресс-кит",
      href: "#"
    }, {
      name: "Контакты",
      href: "#"
    }],
    support: [{
      name: "Поддержка",
      href: "#"
    }, {
      name: "FAQ",
      href: "#faq"
    }, {
      name: "Статус",
      href: "#"
    }],
    legal: [{
      name: "Политика конфиденциальности",
      href: "#"
    }, {
      name: "Условия использования",
      href: "#"
    }, {
      name: "Cookie-политика",
      href: "#"
    }, {
      name: "DMCA",
      href: "#"
    }]
  };
  return <footer className="relative overflow-hidden">
      {/* Gradient divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-card/50 to-background" />
      
      {/* Main Footer */}
      <div className="w-full max-w-[1300px] mx-auto px-4 py-16 md:py-20 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 md:gap-12">
          {/* Brand Column */}
          <div className="col-span-2">
            <a href="#" className="flex items-center gap-2 mb-6">
              <Shield className="w-8 h-8 text-primary/80" />
              <span className="font-heading font-bold text-xl tracking-tight">
                Router<span className="text-primary">BP</span>
              </span>
            </a>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6 max-w-xs">
              VPN-защита корпоративного уровня для всей вашей домашней или бизнес-сети. 
              Одна настройка — полная безопасность.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <a href="mailto:support@routerbp.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="w-4 h-4 text-primary/60" />
                support@routerbp.com
              </a>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 text-primary/60" />
                8-800-ROUTER-BP
              </div>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4 text-foreground/80">Продукт</h4>
            <ul className="space-y-3">
              {footerLinks.product.map(link => <li key={link.name}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.name}
                  </a>
                </li>)}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4 text-foreground/80">Компания</h4>
            <ul className="space-y-3">
              {footerLinks.company.map(link => <li key={link.name}>
                  
                </li>)}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4 text-foreground/80">Поддержка</h4>
            <ul className="space-y-3">
              {footerLinks.support.map(link => <li key={link.name}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.name}
                  </a>
                </li>)}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4 text-foreground/80">Правовая информация</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map(link => <li key={link.name}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.name}
                  </a>
                </li>)}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/30 relative z-10">
        <div className="w-full max-w-[1300px] mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Router BP. Все права защищены.
            </p>
            <div className="flex items-center gap-6">
              <span className="text-xs text-muted-foreground">
                Защищено <span className="text-primary/80">256-битным шифрованием</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;