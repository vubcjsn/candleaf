import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Container from "./Container";
import { testimonials } from "@/db/testimonials.json";
import Image from "next/image";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

function CarouselSection() {
  return (
    <section className="py-28 bg-[#56B28020]">
      <Container>
        <div className="text-center">
          <h2 className="text-[40px] font-semibold mb-[15px]">Testimonials</h2>
          <p className="text-[18px] text-gray-500 mb-8">
            Some quotes from our happy customers
          </p>
        </div>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent>
            {testimonials.map((item) => (
              <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex flex-col aspect-square items-center justify-center p-6">
                      <Image
                        src={item.authorImage}
                        alt={item.author}
                        width={100}
                        height={100}
                        className="w-[100px] h-[100px] mb-4 rounded-full object-cover"
                      />
                      <div className="flex items-center justify-center gap-1 text-[#56B280] text-xl mb-5">
                        {Array.from({ length: 5 }, (_, i) => {
                          const full = i + 1 <= item.rating;
                          const half = !full && i + 0.5 <= item.rating;

                          return (
                            <span key={i}>
                              {full ? (
                                <FaStar />
                              ) : half ? (
                                <FaStarHalfAlt />
                              ) : (
                                <FaRegStar />
                              )}
                            </span>
                          );
                        })}
                      </div>
                      <p className="text-center mb-2">{item.testimonial}</p>
                      <p className="text-center text-gray-400">{item.author}</p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </Container>
    </section>
  );
}

export default CarouselSection;
