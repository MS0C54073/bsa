
"use client"

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";

const services = {
  "Device Repairs": {
    "Phone Screen Replacement": { min: 800, max: 2500 },
    "Phone Battery Replacement": { min: 300, max: 800 },
    "Tablet Screen Replacement": { min: 1000, max: 3000 },
    "Laptop Screen Replacement": { min: 1500, max: 4000 },
    "Software Troubleshooting": { min: 200, max: 600 },
    "Water Damage (Assessment)": { min: 500, max: 2000 },
  },
  "Consultations": {
    "Tech Consultation (per hour)": { min: 500, max: 500 },
    "Accounting Consultation (per hour)": { min: 500, max: 500 },
    "Business Setup Package": { min: 5000, max: 15000 },
  },
};

type ServiceCategory = keyof typeof services;
type ServiceName<T extends ServiceCategory> = keyof (typeof services)[T];

export function ServiceCalculator() {
  const [category, setCategory] = useState<ServiceCategory | null>(null);
  const [service, setService] = useState<string | null>(null);
  const [price, setPrice] = useState<{ min: number, max: number } | null>(null);

  const handleCategoryChange = (value: string) => {
    const cat = value as ServiceCategory;
    setCategory(cat);
    setService(null);
    setPrice(null);
  };

  const handleServiceChange = (value: string) => {
    if (!category) return;
    const serviceName = value as ServiceName<typeof category>;
    setService(serviceName);
    const priceRange = services[category][serviceName];
    setPrice(priceRange);
  };

  return (
    <section id="calculator" className="py-12 sm:py-24 bg-card/80">
      <div className="container px-4 md:px-6">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="font-headline text-primary">Service Price Estimator</CardTitle>
            <CardDescription>
              Get an approximate price range for our services in Zambian Kwacha (ZMW).
              <br/>
              <span className="text-xs">*Final price may vary based on the specific model and issue.</span>
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-end">
              <div className="space-y-2">
                <Label htmlFor="category">Service Category</Label>
                <Select onValueChange={handleCategoryChange}>
                  <SelectTrigger id="category">
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.keys(services).map(cat => (
                      <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="service">Specific Service</Label>
                <Select onValueChange={handleServiceChange} disabled={!category} value={service ?? ""}>
                  <SelectTrigger id="service">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    {category && Object.keys(services[category]).map(srv => (
                      <SelectItem key={srv} value={srv}>{srv}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            {price && (
              <div className="pt-4 text-center">
                <p className="text-muted-foreground">Estimated Price Range:</p>
                <p className="text-3xl font-bold text-accent">
                  {price.min === price.max 
                    ? `ZMW ${price.min.toLocaleString()}` 
                    : `ZMW ${price.min.toLocaleString()} - ZMW ${price.max.toLocaleString()}`
                  }
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
