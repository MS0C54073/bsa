import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export function Testimonials() {
  return (
    <section id="testimonials" className="py-12 sm:py-24 bg-card/80">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl text-primary">What Our Clients Say</h2>
          <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl/relaxed">
            Read testimonials from our satisfied customers.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-1 mt-12 justify-center">
          <Card className="max-w-md">
            <CardContent className="pt-6">
              <div className="space-y-4">
                <p className="text-sm italic">"The team at BSA Connect is professional, knowledgeable, and always ready to help. Highly recommended!"</p>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src="https://placehold.co/100x100.png" data-ai-hint="woman" />
                    <AvatarFallback>JS</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">Jane Smith</p>
                    <p className="text-xs text-muted-foreground">Manager, Lusaka Ventures</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
