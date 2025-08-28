"use client";

import { useEffect } from 'react';
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { WhyChooseUs } from "@/components/why-choose-us";
import { ServiceCalculator } from "@/components/service-calculator";
import { Testimonials } from "@/components/testimonials";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const sections = document.querySelectorAll('.fade-in-section');
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-background/80 backdrop-blur-sm">
      <Header />
      <main className="flex-1">
        <Hero />
        <div className="fade-in-section"><Services /></div>
        <div className="fade-in-section"><WhyChooseUs /></div>
        <div className="fade-in-section"><ServiceCalculator /></div>
        <div className="fade-in-section"><Testimonials /></div>
        <div className="fade-in-section"><Contact /></div>
      </main>
      <Footer />
    </div>
  );
}
