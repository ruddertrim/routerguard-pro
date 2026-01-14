import { Mail, Phone } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    product: [
      { name: "Преимущества", href: "#features" },
      { name: "Тарифы", href: "#pricing" },
      { name: "Совместимость", href: "#" },
      { name: "Локации серверов", href: "#" },
    ],
    company: [
      { name: "О нас", href: "#about" },
      { name: "Карьера", href: "#" },
      { name: "Пресс-кит", href: "#" },
      { name: "Контакты", href: "#" },
    ],
    support: [
      { name: "Центр помощи", href: "#" },
      { name: "Инструкции", href: "#" },
      { name: "FAQ", href: "#faq" },
      { name: "Статус", href: "#" },
    ],
    legal: [
      { name: "Политика конфиденциальности", href: "#" },
      { name: "Условия использования", href: "#" },
      { name: "Cookie-политика", href: "#" },
      { name: "DMCA", href: "#" },
    ],
  };

  return (
    <footer className="relative overflow-hidden">
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
              <svg width="120" height="18" viewBox="0 0 690 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.8789 41.8073L52.3923 98.5272H82.8218L52.3923 41.8073H21.8789Z" fill="hsl(var(--primary))"/>
                <path d="M105.791 27.1531H41.0348H14.2508L0 0L131.442 0.258601L140.831 16.8091L119.539 57.8405H89.193L105.791 27.1531Z" fill="hsl(var(--primary))"/>
                <path d="M644.835 0C670.156 0 689.645 4.83662 689.645 35.1366C689.645 65.5789 670.156 70.4155 644.835 70.4155H631.748V100.289H608.845V0H644.835ZM631.748 50.5H646.258C659.772 50.5 666.742 49.0775 666.742 35.1366C666.742 21.4803 659.772 20.0577 646.258 20.0577H631.748V50.5Z" fill="hsl(var(--primary))"/>
                <path d="M554.789 100.289H517.803V0H553.082C581.106 0 594.62 4.83662 594.62 24.6099C594.62 43.3873 581.106 43.8141 570.437 44.6676V50.3577C585.658 50.9268 602.017 52.3493 602.017 73.6873C602.017 96.4479 580.963 100.289 554.789 100.289ZM540.706 20.0577V38.1239H556.069C565.173 38.1239 571.717 38.1239 571.717 29.0197C571.717 20.0578 565.173 20.0577 556.069 20.0577H540.706ZM540.706 58.0394V80.231H557.634C571.148 80.231 579.114 80.3732 579.114 69.2775C579.114 58.0394 571.148 58.0394 557.634 58.0394H540.706Z" fill="hsl(var(--primary))"/>
                <path d="M476.691 100.289H453.789V38.9809C453.789 31.157 458.198 26.8894 466.022 27.0316H507.845V47.3739H476.691V100.289Z" fill="hsl(var(--primary))"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M371.282 62.0226C371.282 39.262 386.787 25.6057 409.121 25.6057C431.455 25.6057 447.103 38.8352 447.103 60.6V67.7127H392.762C392.762 75.9634 394.042 93.8873 453.789 83.2183V100.289L411.539 100.289C383.942 100.289 371.282 82.3648 371.282 62.0226ZM425.765 54.9099H392.762C392.762 49.5042 396.461 44.2409 409.121 44.2409C421.782 44.2409 425.765 49.5042 425.765 54.9099Z" fill="hsl(var(--primary))"/>
                <path d="M338.706 46.3746V79.5197H365.165V99.5774H327.895C320.071 99.862 315.803 95.3098 315.803 87.4859V46.3746H293.042V26.3169H315.803V12.8028L338.706 5.69012V26.3169L406.845 25.6056L380.528 46.3746H338.706Z" fill="hsl(var(--primary))"/>
                <path d="M252.629 80.9441C264.157 80.9441 271.709 74.5433 271.709 54.3452V26.3169H293.042V99.5776H271.709V90.9009L275.684 78.0993H270.384C267.734 90.9009 258.275 101 243.965 101C226.872 101 217.648 88.7673 217.648 66.5779V26.3169H238.981V62.8796C238.981 75.9657 242.426 80.9441 252.629 80.9441Z" fill="hsl(var(--primary))"/>
                <path d="M140.831 62.5184C140.831 36.7664 153.152 24.1831 175.93 24.1831C198.566 24.1831 212.319 36.7664 212.319 62.5184C212.319 74.0721 209.582 82.9758 204.54 89.2946C198.504 96.8591 189.165 100.719 177.265 100.985C176.824 100.995 176.379 101 175.93 101C153.152 101 140.831 88.4167 140.831 62.5184ZM158.166 62.5184C158.166 74.9554 165.042 80.3692 175.93 80.3692C186.675 80.3692 193.695 74.9554 193.695 62.5184C193.695 50.2277 186.675 44.8139 175.93 44.8139C165.042 44.8139 158.166 50.2277 158.166 62.5184Z" fill="hsl(var(--primary))"/>
              </svg>
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
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4 text-foreground/80">Компания</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4 text-foreground/80">Поддержка</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4 text-foreground/80">Правовая информация</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
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
    </footer>
  );
};

export default Footer;
