import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="bg-background/80 backdrop-blur-sm sticky top-0 z-40 w-full border-b">
      <div className="container flex h-16 items-center justify-between">
        <a href="#" className="text-2xl font-bold font-headline text-primary">
          BSA Solutions
        </a>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <a href="#services" className="transition-colors hover:text-primary">Services</a>
          <a href="#why-us" className="transition-colors hover:text-primary">Why Us</a>
          <a href="#testimonials" className="transition-colors hover:text-primary">Testimonials</a>
          <a href="#contact" className="transition-colors hover:text-primary">Contact</a>
        </nav>
        <Button asChild>
          <a href="https://wa.me/260979374189" target="_blank">WhatsApp Us</a>
        </Button>
      </div>
    </header>
  );
}
