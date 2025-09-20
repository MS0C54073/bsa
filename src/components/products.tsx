import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Laptop, Smartphone, Headphones } from "lucide-react";

export function Products() {
  return (
    <section id="products" className="py-12 sm:py-24 bg-card/80">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl text-primary">Our Products</h2>
          <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl/relaxed">
            We offer a curated selection of high-quality tech products and accessories.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3 mt-12">
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <Smartphone className="w-8 h-8 text-primary" />
              <CardTitle className="font-headline">Smartphones</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Get the latest smartphones from leading brands. Powerful, stylish, and built to last.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <Laptop className="w-8 h-8 text-primary" />
              <CardTitle className="font-headline">Laptops</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Whether for work or play, our range of laptops delivers performance and portability.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <Headphones className="w-8 h-8 text-primary" />
              <CardTitle className="font-headline">Accessories</CardTitle>
            </CardHeader>
            <CardContent>
              <p>From chargers to headphones, we have all the essential accessories for your devices.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
