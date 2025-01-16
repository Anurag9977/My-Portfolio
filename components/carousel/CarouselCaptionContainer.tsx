import { type CarouselItem as CarouselItemType } from "@/utils/types";
import { CarouselItem } from "../ui/carousel";
import { Button } from "../ui/button";
import Link from "next/link";
import { josefinSans } from "@/utils/fonts";

function CarouselCaptionContainer({ item }: { item: CarouselItemType }) {
  return (
    <CarouselItem className="relative h-96 flex flex-col justify-center px-16">
      <div>
        <h1
          className={`${josefinSans.className} text-white relative uppercase text-2xl md:text-3xl lg:text-4xl font-bold`}
        >
          {item.heading}
          <span className=" leading-normal text-primary block">
            {item.spanText}
          </span>
          <span className="font-light text-white absolute top-8 -left-16 tracking-wider text-xs md:text-sm -rotate-90">
            {item.fancyText}
          </span>
        </h1>
        <p className="text-white text-sm md:text-base text-justify w-full mt-2 mb-6 leading-relaxed md:leading-loose">
          {item.description}
        </p>
        <Button
          asChild
          size="lg"
          className="md:text-base capitalize tracking-wide"
        >
          <Link href={item.link}>Go to projects</Link>
        </Button>
      </div>
      <div className="-z-10 absolute top-0 left-32 h-full w-20 border-y-4 border-primary"></div>
    </CarouselItem>
  );
}
export default CarouselCaptionContainer;
