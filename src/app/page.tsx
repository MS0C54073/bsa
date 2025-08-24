import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { WhyChooseUs } from "@/components/why-choose-us";
import { ServiceCalculator } from "@/components/service-calculator";
import { Testimonials } from "@/components/testimonials";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { HashtagGenerator } from "@/components/hashtag-generator";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background/80">
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <WhyChooseUs />
        <ServiceCalculator />
        <Testimonials />
        <HashtagGenerator />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
