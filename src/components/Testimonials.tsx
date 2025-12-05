import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Router BP transformed our home network security. One setup and every device is protected — including my kids' tablets and our smart home devices.",
      name: "Michael Chen",
      role: "Homeowner",
      initials: "MC"
    },
    {
      quote: "As a remote team, we needed a solution that protected all our office devices without complex configurations. Router BP delivered exactly that.",
      name: "Sarah Williams",
      role: "Startup Founder",
      initials: "SW"
    },
    {
      quote: "The speed is incredible. I was worried VPN would slow down our gaming and streaming, but we haven't noticed any difference at all.",
      name: "James Rodriguez",
      role: "Tech Enthusiast",
      initials: "JR"
    },
    {
      quote: "Finally, a VPN solution my parents can use without calling me for tech support. Set it once and forget it — that's the Router BP way.",
      name: "Emily Park",
      role: "Software Engineer",
      initials: "EP"
    },
    {
      quote: "We switched from individual VPN apps to Router BP and cut our monthly security costs in half while improving coverage.",
      name: "David Thompson",
      role: "Small Business Owner",
      initials: "DT"
    },
    {
      quote: "The 24/7 support team helped me set everything up in under 30 minutes. Professional, patient, and incredibly helpful.",
      name: "Lisa Anderson",
      role: "Freelancer",
      initials: "LA"
    }
  ];

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-card/50 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <span className="inline-block text-primary text-sm font-heading font-semibold tracking-wider uppercase mb-4">
            Testimonials
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Trusted by <span className="text-primary">Thousands</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Join the growing community of homes and businesses that trust Router BP 
            for their network security.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="group p-6 md:p-8 rounded-2xl bg-background border border-border hover:border-primary/30 transition-all duration-300"
            >
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-primary/30 mb-4" />
              
              {/* Quote Text */}
              <p className="text-muted-foreground leading-relaxed mb-6">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                {/* Avatar */}
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border border-primary/20">
                  <span className="font-heading font-semibold text-sm text-primary">
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
