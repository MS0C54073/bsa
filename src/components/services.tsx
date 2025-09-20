import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Smartphone, Wrench, Briefcase, Server, Code, AppWindow } from "lucide-react";

export function Services() {
  return (
    <section id="services" className="py-12 sm:py-24 bg-card/80">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl text-primary">Our Services</h2>
          <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            We provide a wide range of services to meet your tech and business needs.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3 mt-12">
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <Smartphone className="w-8 h-8 text-primary" />
              <CardTitle className="font-headline">Phones & Accessories</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Explore our wide selection of the latest smartphones and accessories from top brands.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <Wrench className="w-8 h-8 text-primary" />
              <CardTitle className="font-headline">Device Repairs</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Expert and reliable repair services for your phones, tablets, and laptops. Fast turn-around time.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <Briefcase className="w-8 h-8 text-primary" />
              <CardTitle className="font-headline">Tech & Accounting Consultations</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Professional advice to streamline your business operations with the right tech and accounting solutions.</p>
            </CardContent>
          </Card>
           <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <Server className="w-8 h-8 text-primary" />
              <CardTitle className="font-headline">IT Support</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Reliable and responsive IT support to keep your systems running smoothly and securely.</p>
            </CardContent>
          </Card>
           <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <Code className="w-8 h-8 text-primary" />
              <CardTitle className="font-headline">Software Development</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Custom software solutions tailored to your unique business requirements and goals.</p>
            </CardContent>
          </Card>
           <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <AppWindow className="w-8 h-8 text-primary" />
              <CardTitle className="font-headline">Web & App Development</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Beautiful and functional websites and mobile applications to elevate your online presence.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
