
"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin } from "lucide-react";

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
                <p className="text-muted-foreground">Find us at our location below or send us a message.</p>
            </div>
            <div className="space-y-4">
                <div className="flex items-center gap-4">
                    <Phone className="w-5 h-5 text-primary" />
                    <span>+260 97 9374189</span>
                </div>
                <div className="flex items-center gap-4">
                    <Phone className="w-5 h-5 text-primary" />
                    <span>0973938320</span>
                </div>
                <div className="flex items-center gap-4">
                    <Phone className="w-5 h-5 text-primary" />
                    <span>0765868085</span>
                </div>
                <div className="flex items-center gap-4">
                    <Mail className="w-5 h-5 text-primary" />
                    <span>info@bsaconnect.co</span>
                </div>
                 <div className="flex items-center gap-4">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span>Kamwala, Lusaka, Zambia</span>
                </div>
            </div>
            <div className="rounded-lg overflow-hidden border">
                <iframe
                    src="https://maps.google.com/maps?q=Kamwala%2C%20Lusaka&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="350"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
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
                <Textarea id="message" placeholder="Your Message" rows={5} value={message} onChange={(e) => setMessage(e.target.value)} required />
              </div>
              <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">Send Message</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
