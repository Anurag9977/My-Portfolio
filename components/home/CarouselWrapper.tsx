"use client";

import { useEffect, useRef, useState } from "react";
import { Carousel, CarouselApi, CarouselContent } from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import CarouselImageContainer from "../carousel/CarouselImageContainer";
import CarouselCaptionContainer from "../carousel/CarouselCaptionContainer";
import { CarouselItem } from "@/utils/types";

function CarouselWrapper({ carouselItems }: { carouselItems: CarouselItem[] }) {
  const [imageApi, setImageApi] = useState<CarouselApi>();
  const [captionApi, setCaptionApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const imagePlugins = useRef(
    Autoplay({ delay: 10000, stopOnInteraction: true })
  );
  const captionPlugins = useRef(
    Autoplay({ delay: 10000, stopOnInteraction: true })
  );

  useEffect(() => {
    if (!imageApi || !captionApi) {
      return;
    }
    setCurrent(imageApi.selectedScrollSnap());
    setCurrent(captionApi.selectedScrollSnap());

    imageApi.on("select", () => {
      setCurrent(imageApi.selectedScrollSnap());
    });
    captionApi.on("select", () => {
      setCurrent(captionApi.selectedScrollSnap());
    });
  }, [imageApi, captionApi]);

  return (
    <section className="relative h-full">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[imagePlugins.current]}
        setApi={setImageApi}
        orientation="vertical"
      >
        <CarouselContent className="m-0 h-dvh">
          {carouselItems.map((item, index) => (
            <CarouselImageContainer key={index} item={item} />
          ))}
        </CarouselContent>
      </Carousel>
      <Carousel
        className="w-full absolute top-32 px-8 md:px-32"
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[captionPlugins.current]}
        setApi={setCaptionApi}
      >
        <CarouselContent>
          {carouselItems.map((item, index) => (
            <CarouselCaptionContainer key={index} item={item} />
          ))}
        </CarouselContent>
      </Carousel>
      <div className="absolute right-4 bottom-4 flex gap-x-3">
        <button
          onClick={() => {
            imageApi?.scrollTo(current - 1);
            captionApi?.scrollTo(current - 1);
          }}
          className="p-0"
        >
          <ChevronLeft
            strokeWidth={4}
            size={40}
            className="text-white rounded-sm hover:bg-foreground/30 p-2 duration-300"
          />
        </button>
        <button
          onClick={() => {
            imageApi?.scrollTo(current + 1);
            captionApi?.scrollTo(current + 1);
          }}
        >
          <ChevronRight
            strokeWidth={4}
            size={40}
            className="text-white rounded-sm hover:bg-foreground/30 p-2 duration-300"
          />
        </button>
      </div>
    </section>
  );
}
export default CarouselWrapper;
