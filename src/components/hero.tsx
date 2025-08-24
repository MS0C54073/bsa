import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Hero() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-4">
              <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-primary">
                BSA Solutions
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Your Tech & Business Partner in Lusaka
              </p>
               <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl text-accent">
                Smart Devices. Smarter Solutions.
               </h2>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg">
                <a href="https://wa.me/260979374189" target="_blank">WhatsApp Us</a>
              </Button>
            </div>
          </div>
          <Image
            src="https://placehold.co/600x400.png"
            alt="Hero"
            width={600}
            height={400}
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
            data-ai-hint="business technology"
          />
        </div>
      </div>
    </section>
  );
}
