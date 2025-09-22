
"use client";

import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./theme-toggle";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const closeSheet = () => setIsSheetOpen(false);

  return (
    <header className="bg-background/80 backdrop-blur-sm sticky top-0 z-40 w-full border-b">
      <div className="container flex h-16 items-center justify-between">
        <Button asChild variant="ghost" className="text-2xl font-bold font-headline text-primary h-auto p-0">
          <Link href="/">
            BSA
          </Link>
        </Button>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <a href="#about-us" className="transition-colors text-primary hover:text-primary/80">About Us</a>
          <a href="#products" className="transition-colors text-primary hover:text-primary/80">Products</a>
          <a href="#services" className="transition-colors text-primary hover:text-primary/80">Services</a>
          <a href="#team" className="transition-colors text-primary hover:text-primary/80">Team</a>
          <a href="#contact" className="transition-colors text-primary hover:text-primary/80">Contact</a>
        </nav>
        <div className="flex items-center gap-4">
           <div className="md:hidden">
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="grid gap-4 py-6">
                  <Link href="/" className="text-2xl font-bold font-headline text-primary mb-4" onClick={closeSheet}>
                    BSA
                  </Link>
                  <a href="#about-us" className="block text-lg font-medium text-primary hover:text-primary/80" onClick={closeSheet}>About Us</a>
                  <a href="#products" className="block text-lg font-medium text-primary hover:text-primary/80" onClick={closeSheet}>Products</a>
                  <a href="#services" className="block text-lg font-medium text-primary hover:text-primary/80" onClick={closeSheet}>Services</a>
                  <a href="#team" className="block text-lg font-medium text-primary hover:text-primary/80" onClick={closeSheet}>Team</a>
                  <a href="#contact" className="block text-lg font-medium text-primary hover:text-primary/80" onClick={closeSheet}>Contact</a>
                   <Button asChild className="mt-4">
                    <a href="https://wa.me/260765868085" target="_blank">WhatsApp Us</a>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
          <Button asChild className="hidden md:flex">
            <a href="https://wa.me/260765868085" target="_blank">WhatsApp Us</a>
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
