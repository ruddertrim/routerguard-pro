import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How does a router-level VPN work?",
      answer: "A router-level VPN encrypts all internet traffic at the source — your router. Instead of installing VPN apps on each device, you configure the VPN once on your router. Every device that connects to your network (phones, laptops, smart TVs, gaming consoles, IoT devices) is automatically protected without any additional setup."
    },
    {
      question: "Is Router BP difficult to set up?",
      answer: "Not at all. Most users complete the setup in under 30 minutes. We provide step-by-step guides for all major router brands, and our 24/7 support team can even assist you remotely if needed. We also offer pre-configured routers for those who want a plug-and-play solution."
    },
    {
      question: "Will Router BP slow down my internet connection?",
      answer: "Router BP uses WireGuard, the fastest VPN protocol available. Most users experience less than 5% speed reduction, which is barely noticeable. Our network of optimized servers ensures you get the best possible speeds while maintaining full encryption."
    },
    {
      question: "Which routers are compatible with Router BP?",
      answer: "Router BP works with most major router brands including ASUS, Netgear, Linksys, TP-Link, D-Link, and many others. We support both stock firmware and custom firmware like DD-WRT and OpenWrt. Check our compatibility page or contact support if you're unsure about your specific router model."
    },
    {
      question: "Can I choose which devices use the VPN?",
      answer: "Yes! Our Advanced and Pro plans include split tunneling, which lets you choose which devices route through the VPN and which connect directly to the internet. This is useful for devices that need your local IP address or services that block VPN traffic."
    },
    {
      question: "How is billing handled?",
      answer: "We offer both monthly and yearly billing options. Yearly plans include a 20% discount. All plans come with a 30-day money-back guarantee — if you're not satisfied for any reason, we'll refund your payment in full, no questions asked."
    },
    {
      question: "Do you keep any logs of my activity?",
      answer: "Absolutely not. Router BP operates under a strict no-logs policy. We don't track, store, or share any information about your browsing activity, connection times, or IP addresses. Your privacy is our top priority."
    },
    {
      question: "Can I use Router BP for my business?",
      answer: "Yes! Our Pro plan is designed for businesses and includes features like unlimited devices, dedicated IP options, multi-router support, and a dedicated account manager. Contact our sales team for custom enterprise solutions."
    }
  ];

  return (
    <section id="faq" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-primary/5 rounded-tr-full blur-[100px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <span className="inline-block text-primary text-sm font-heading font-semibold tracking-wider uppercase mb-4">
            FAQ
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Got questions? We've got answers. If you don't find what you're looking for, 
            our support team is always happy to help.
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
