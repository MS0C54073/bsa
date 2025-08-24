
"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Linkedin, Facebook } from "lucide-react";

const TelegramIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
);

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M16.75 13.96c.25.13.41.2.52.34.11.14.15.33.11.52s-.15.34-.42.52c-.27.18-.56.28-1.12.16-.56-.12-1.28-.48-1.94-1s-1.1-1.11-1.52-1.7s-.6-1.21-.54-1.8c.06-.59.28-1.07.66-1.34s.7-.37.96-.34c.26.03.48.1.66.16s.34.18.42.34c.08.16.1.28.08.45s-.08.3-.18.42s-.22.2-.3.24s-.18.06-.22.04c-.04-.02-.16-.08-.34-.18c-.18-.1-.4-.2-.68-.22c-.28-.02-.54.02-.74.14s-.34.3-.42.52s-.1.42-.04.62c.06.2.18.42.34.66s.38.48.62.68c.24.2.5.38.74.52h.24c.22-.04.4-.1.54-.18s.25-.14.34-.22c.08-.08.16-.18.22-.3.06-.12.1-.25.1-.4c0-.14-.02-.28-.08-.42s-.12-.24-.22-.34c-.1-.1-.2-.16-.3-.2Z"/></svg>
);


export function Contact() {
  const { toast } = useToast();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Submitted:", { name, email, message });
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. We'll get back to you soon.",
    });
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <section id="contact" className="py-12 sm:py-24">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl text-primary">Contact Us</h2>
          <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl/relaxed">
            Have a question? We'd love to hear from you.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 mt-12">
          <div className="space-y-8">
            <div className="space-y-2">
                <h3 className="text-xl font-bold font-headline">Contact Information</h3>
                <p className="text-muted-foreground">Fill up the form and our Team will get back to you within 24 hours.</p>
            </div>
            <div className="space-y-4">
                <div className="flex items-center gap-4">
                    <Phone className="w-5 h-5 text-primary" />
                    <span>+260 97 9374189</span>
                </div>
                <div className="flex items-center gap-4">
                    <Mail className="w-5 h-5 text-primary" />
                    <span>info@bsaconnect.co</span>
                </div>
                 <div className="flex items-center gap-4">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span>Lusaka, Zambia</span>
                </div>
            </div>
          </div>
          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} required />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Your Message" value={message} onChange={(e) => setMessage(e.target.value)} required />
              </div>
              <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">Send Message</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
