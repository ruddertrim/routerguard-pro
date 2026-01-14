import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutFeatures from "@/components/AboutFeatures";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <AboutFeatures />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  );
};

export default Index;
