
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Hero() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-24">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-4">
              <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-blue-600 dark:text-blue-500">
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
                <a href="https://wa.me/260765868085" target="_blank">WhatsApp Us</a>
              </Button>
            </div>
          </div>
          <div className="relative w-full min-h-[250px] sm:min-h-[400px] aspect-video">
            <Image
              src="https://drive.google.com/uc?export=view&id=15J4_eqDBhUV2mfZm-Myl3gGY-IGfuDIr"
              alt="Hero"
              fill
              className="object-cover rounded-xl"
              data-ai-hint="business technology"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
