
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
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M19.6,4.4C17.5,2.3,14.9,1,12,1C5.9,1,1,5.9,1,12c0,2.1,0.6,4.1,1.6,5.8L1,23l5.3-1.6c1.6,1,3.5,1.5,5.6,1.5c6.1,0,11-4.9,11-11C23,9.1,21.7,6.5,19.6,4.4z M12,21.5c-1.8,0-3.6-0.5-5.1-1.5l-0.4-0.2l-3.8,1.1l1.1-3.7L3.5,17c-1-1.6-1.5-3.5-1.5-5.4c0-5,4-9,9-9s9,4,9,9S17,21.5,12,21.5z M16.4,14.6c-0.2-0.1-1.4-0.7-1.6-0.8c-0.2-0.1-0.4-0.1-0.5,0.1c-0.2,0.2-0.6,0.8-0.8,0.9c-0.1,0.1-0.3,0.2-0.5,0.1c-0.2-0.1-1-0.4-1.9-1.2c-0.7-0.6-1.2-1.4-1.3-1.6c-0.1-0.2,0-0.4,0.1-0.5l0.4-0.5c0.1-0.1,0-0.2,0-0.4c0-0.1-0.5-1.3-0.7-1.8c-0.2-0.5-0.4-0.4-0.5-0.4h-0.5c-0.2,0-0.4,0.1-0.5,0.2c-0.1,0.1-0.6,0.6-0.6,1.4c0,0.8,0.6,1.7,0.7,1.8c0.1,0.1,1.2,1.8,2.9,2.6c0.4,0.2,0.7,0.3,1,0.4c0.5,0.2,1,0.2,1.3,0.1c0.4-0.1,1.4-0.6,1.6-1.1c0.2-0.5,0.2-1,0.1-1.1C16.9,14.8,16.7,14.7,16.4,14.6z"/></svg>
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
