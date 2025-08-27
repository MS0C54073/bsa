import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { WhyChooseUs } from "@/components/why-choose-us";
import { ServiceCalculator } from "@/components/service-calculator";
import { Testimonials } from "@/components/testimonials";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background/80 backdrop-blur-sm">
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <WhyChooseUs />
        <ServiceCalculator />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
