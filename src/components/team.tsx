import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Team() {
  return (
    <section id="team" className="py-12 sm:py-24">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl text-primary">Our Team</h2>
          <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl/relaxed">
            Meet the leaders behind BSA Solutions.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
          <Card className="text-center">
            <CardHeader className="flex items-center">
                <Avatar className="w-24 h-24 mb-4">
                    <AvatarImage src="https://picsum.photos/seed/bwalya/200/200" data-ai-hint="man portrait" />
                    <AvatarFallback>BS</AvatarFallback>
                </Avatar>
                <CardTitle className="font-headline">Bwalya Salimu</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-semibold text-primary">Founder, CEO & Chief Financial Officer</p>
              <p className="text-muted-foreground mt-2">Bwalya leads the company with a vision for excellence and a strong background in business and finance.</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardHeader className="flex items-center">
                 <Avatar className="w-24 h-24 mb-4">
                    <AvatarImage src="https://picsum.photos/seed/musonda/200/200" data-ai-hint="man portrait tech" />
                    <AvatarFallback>MS</AvatarFallback>
                </Avatar>
                <CardTitle className="font-headline">Musonda Salimu</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-semibold text-primary">IT Specialist & Software Developer</p>
              <p className="text-muted-foreground mt-2">Musonda is the technical mastermind, driving innovation and crafting the cutting-edge solutions we offer.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
