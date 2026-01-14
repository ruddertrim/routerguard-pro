import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "О нас", href: "#about" },
    { name: "Преимущества", href: "#features" },
    { name: "Тарифы", href: "#pricing" },
    { name: "Отзывы", href: "#testimonials" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 pt-4">
      <div className="w-full max-w-[1300px] mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <img src={logo} alt="RouterBP" className="h-5 md:h-6" />
          </a>

          {/* Desktop Navigation - Centered glass pill */}
          <div className="hidden md:flex items-center absolute left-1/2 -translate-x-1/2">
            <div className="flex items-center gap-1 px-2 py-1.5 rounded-xl bg-primary/5 backdrop-blur-xl border border-primary/20">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-5 py-2 rounded-lg text-foreground/60 hover:text-primary hover:bg-primary/10 transition-all duration-200 text-sm font-medium font-gotham lowercase"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Right side - empty for balance, or could add a CTA */}
          <div className="hidden md:block" />

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-secondary/80 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 bg-card/95 backdrop-blur-xl rounded-2xl mt-2 border border-border/30 animate-fade-in">
            <div className="flex flex-col gap-1 px-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors duration-200 text-sm font-medium py-3 px-4 rounded-xl"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
