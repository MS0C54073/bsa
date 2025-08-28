import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./theme-toggle";

export function Header() {
  return (
    <header className="bg-background/80 backdrop-blur-sm sticky top-0 z-40 w-full border-b">
      <div className="container flex h-16 items-center justify-between">
        <a href="#" className="text-2xl font-bold font-headline text-blue-600">
          BSA
        </a>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <a href="#services" className="transition-colors text-blue-600 hover:text-blue-500">Services</a>
          <a href="#why-us" className="transition-colors text-blue-600 hover:text-blue-500">Why Us</a>
          <a href="#testimonials" className="transition-colors text-blue-600 hover:text-blue-500">Testimonials</a>
          <a href="#contact" className="transition-colors text-blue-600 hover:text-blue-500">Contact</a>
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
