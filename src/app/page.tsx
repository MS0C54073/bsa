"use client";

import { useEffect } from 'react';
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { AboutUs } from "@/components/about-us";
import { Products } from "@/components/products";
import { Services } from "@/components/services";
import { Team } from "@/components/team";
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
        <div className="fade-in-section"><AboutUs /></div>
        <div className="fade-in-section"><Products /></div>
        <div className="fade-in-section"><Services /></div>
        <div className="fade-in-section"><Team /></div>
        <div className="fade-in-section"><Contact /></div>
      </main>
      <Footer />
    </div>
  );
}
