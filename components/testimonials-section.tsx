"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { testimonialsByRubro } from "@/lib/testimonials";

const carouselNavClass =
  "static top-auto left-auto right-auto bottom-auto translate-x-0 translate-y-0 size-9 rounded-full";

const testimonialSlides = testimonialsByRubro.flatMap((grupo) =>
  grupo.items.map((item) => ({
    ...item,
    rubro: grupo.rubro,
    key: `${grupo.rubro}-${item.name}`,
  })),
);

export function TestimonialsSection() {
  return (
    <section id="testimonios" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-muted-foreground">
            La confianza de quienes nos eligen es nuestro mayor respaldo.
            Industria, comercio, servicios y más.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Carousel opts={{ align: "start", loop: false }} className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonialSlides.map((item) => (
                <CarouselItem
                  key={item.key}
                  className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3"
                >
                  <Card className="border-border h-full flex flex-col">
                    <CardContent className="p-5 md:p-6 flex flex-col flex-1">
                      <div className="mb-3">
                        <p className="font-medium text-foreground text-sm md:text-base leading-tight">
                          {item.name}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1 font-medium uppercase tracking-wide">
                          {item.rubro}
                        </p>
                      </div>
                      <div className="text-2xl text-muted-foreground/25 mb-1">
                        &ldquo;
                      </div>
                      <p className="text-sm md:text-base text-foreground leading-relaxed flex-1">
                        {item.quote}
                      </p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-3 mt-6">
              <CarouselPrevious
                className={carouselNavClass}
                aria-label="Testimonios anteriores"
              />
              <CarouselNext
                className={carouselNavClass}
                aria-label="Testimonios siguientes"
              />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
