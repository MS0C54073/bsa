
import { Linkedin, Facebook } from 'lucide-react';

const TelegramIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
);

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M16.75 13.96c.25.13.41.2.52.34.11.14.15.33.11.52s-.15.34-.42.52c-.27.18-.56.28-1.12.16-.56-.12-1.28-.48-1.94-1s-1.1-1.11-1.52-1.7s-.6-1.21-.54-1.8c.06-.59.28-1.07.66-1.34s.7-.37.96-.34c.26.03.48.1.66.16s.34.18.42.34c.08.16.1.28.08.45s-.08.3-.18.42s-.22.2-.3.24s-.18.06-.22.04c-.04-.02-.16-.08-.34-.18c-.18-.1-.4-.2-.68-.22c-.28-.02-.54.02-.74.14s-.34.3-.42.52s-.1.42-.04.62c.06.2.18.42.34.66s.38.48.62.68c.24.2.5.38.74.52h.24c.22-.04.4-.1.54-.18s.25-.14.34-.22c.08-.08.16-.18.22-.3.06-.12.1-.25.1-.4c0-.14-.02-.28-.08-.42s-.12-.24-.22-.34c-.1-.1-.2-.16-.3-.2Z"/></svg>
);

export function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="container flex flex-col items-center justify-between gap-4 py-6 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-2 px-8 md:gap-2 md:px-0 text-center md:text-left">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} BSA Connect. All rights reserved.
          </p>
        </div>
        <div className="flex gap-4">
            <a href="https://wa.me/260979374189" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-muted-foreground hover:text-primary">
                <WhatsAppIcon className="w-6 h-6"/>
            </a>
            <a href="https://t.me/bsaconnect" target="_blank" rel="noopener noreferrer" aria-label="Telegram" className="text-muted-foreground hover:text-primary">
                <TelegramIcon className="w-6 h-6"/>
            </a>
            <a href="https://www.linkedin.com/company/bsa-connect" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary">
                <Linkedin className="w-6 h-6"/>
            </a>
            <a href="https://www.facebook.com/bsaconnect" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-muted-foreground hover:text-primary">
                <Facebook className="w-6 h-6"/>
            </a>
        </div>
      </div>
    </footer>
  );
}
