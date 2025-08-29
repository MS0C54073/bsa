import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./theme-toggle";
import Link from "next/link";

export function Header() {
  return (
    <header className="bg-background/80 backdrop-blur-sm sticky top-0 z-40 w-full border-b">
      <div className="container flex h-16 items-center justify-between">
        <Button asChild variant="ghost" className="text-2xl font-bold font-headline text-primary h-auto p-0">
          <Link href="/">
            BSA
          </Link>
        </Button>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <a href="#services" className="transition-colors text-primary hover:text-primary/80">Services</a>
          <a href="#why-us" className="transition-colors text-primary hover:text-primary/80">Why Us</a>
          <a href="#contact" className="transition-colors text-primary hover:text-primary/80">Contact</a>
        </nav>
        <div className="flex items-center gap-4">
          <Button asChild>
            <a href="https://wa.me/260765868085" target="_blank">WhatsApp Us</a>
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
