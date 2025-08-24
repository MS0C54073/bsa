
"use client";

import { Linkedin, Facebook } from 'lucide-react';

const TelegramIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
);

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M19.6,4.4C17.5,2.3,14.9,1,12,1C5.9,1,1,5.9,1,12c0,2.1,0.6,4.1,1.6,5.8L1,23l5.3-1.6c1.6,1,3.5,1.5,5.6,1.5c6.1,0,11-4.9,11-11C23,9.1,21.7,6.5,19.6,4.4z M12,21.5c-1.8,0-3.6-0.5-5.1-1.5l-0.4-0.2l-3.8,1.1l1.1-3.7L3.5,17c-1-1.6-1.5-3.5-1.5-5.4c0-5,4-9,9-9s9,4,9,9S17,21.5,12,21.5z M16.4,14.6c-0.2-0.1-1.4-0.7-1.6-0.8c-0.2-0.1-0.4-0.1-0.5,0.1c-0.2,0.2-0.6,0.8-0.8,0.9c-0.1,0.1-0.3,0.2-0.5,0.1c-0.2-0.1-1-0.4-1.9-1.2c-0.7-0.6-1.2-1.4-1.3-1.6c-0.1-0.2,0-0.4,0.1-0.5l0.4-0.5c0.1-0.1,0-0.2,0-0.4c0-0.1-0.5-1.3-0.7-1.8c-0.2-0.5-0.4-0.4-0.5-0.4h-0.5c-0.2,0-0.4,0.1-0.5,0.2c-0.1,0.1-0.6,0.6-0.6,1.4c0,0.8,0.6,1.7,0.7,1.8c0.1,0.1,1.2,1.8,2.9,2.6c0.4,0.2,0.7,0.3,1,0.4c0.5,0.2,1,0.2,1.3,0.1c0.4-0.1,1.4-0.6,1.6-1.1c0.2-0.5,0.2-1,0.1-1.1C16.9,14.8,16.7,14.7,16.4,14.6z"/></svg>
);


export function FloatingSocials() {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-3">
        <a 
            href="https://wa.me/260979374189" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="WhatsApp" 
            className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors"
        >
            <WhatsAppIcon className="w-6 h-6"/>
        </a>
        <a 
            href="https://t.me/bsaconnect" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Telegram" 
            className="bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition-colors"
        >
            <TelegramIcon className="w-6 h-6" stroke="white" fill="none"/>
        </a>
        <a 
            href="https://www.linkedin.com/company/bsa-connect" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="LinkedIn"
            className="bg-blue-700 text-white p-3 rounded-full shadow-lg hover:bg-blue-800 transition-colors"
        >
            <Linkedin className="w-6 h-6"/>
        </a>
        <a 
            href="https://www.facebook.com/bsaconnect" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Facebook"
            className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
        >
            <Facebook className="w-6 h-6"/>
        </a>
    </div>
  );
}
