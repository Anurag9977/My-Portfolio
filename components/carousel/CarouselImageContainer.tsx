import Image from "next/image";
import { CarouselItem } from "../ui/carousel";
import { type CarouselItem as CarouselItemType } from "@/utils/types";

function CarouselImageContainer({ item }: { item: CarouselItemType }) {
  return (
    <CarouselItem className="p-0 relative">
      <div className="relative h-full">
        <Image
          src={item.src}
          alt={item.name}
          fill
          sizes="100vw"
          priority
          className="block object-cover h-full w-full"
        />
        <div className="absolute top-0 left-0 w-full h-full backdrop-opacity-5 backdrop-invert bg-foreground/20 dark:bg-background/30 border-t-8 border-r-8 border-sidebar"></div>
      </div>
    </CarouselItem>
  );
}
export default CarouselImageContainer;
