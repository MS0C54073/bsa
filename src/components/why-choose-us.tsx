import { CheckCircle } from "lucide-react";

export function WhyChooseUs() {
  return (
    <section id="why-us" className="py-12 sm:py-24">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl text-primary">Why Choose Us?</h2>
          <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl/relaxed">
            We are committed to providing the best service and value to our clients.
          </p>
        </div>
        <div className="mt-12 grid items-center gap-6 md:grid-cols-3 md:gap-12">
            <div className="flex flex-col items-center text-center">
                <CheckCircle className="w-12 h-12 text-primary mb-4"/>
                <h3 className="text-xl font-bold font-headline">Trusted</h3>
                <p className="text-muted-foreground">We build lasting relationships based on trust and reliability.</p>
            </div>
            <div className="flex flex-col items-center text-center">
                <CheckCircle className="w-12 h-12 text-primary mb-4"/>
                <h3 className="text-xl font-bold font-headline">Affordable</h3>
                <p className="text-muted-foreground">Competitive pricing without compromising on quality.</p>
            </div>
            <div className="flex flex-col items-center text-center">
                <CheckCircle className="w-12 h-12 text-primary mb-4"/>
                <h3 className="text-xl font-bold font-headline">Professional</h3>
                <p className="text-muted-foreground">Our team of experts is dedicated to your success.</p>
            </div>
        </div>
      </div>
    </section>
  );
}
