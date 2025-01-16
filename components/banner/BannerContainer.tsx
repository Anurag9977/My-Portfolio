import { teko } from "@/utils/fonts";
import { BannerItem, VisibleSection } from "@/utils/types";
import { motion } from "motion/react";
import Image from "next/image";

function BannerContainer({
  bannerImages,
  inView,
  visibleSection,
}: {
  bannerImages: BannerItem[];
  inView: boolean;
  visibleSection: VisibleSection;
}) {
  return (
    <aside className="h-dvh sticky top-0">
      <div className="h-full">
        {bannerImages.map((item, index) => {
          return (
            <div
              key={index}
              className={
                visibleSection === item.heading
                  ? "relative h-full w-full opacity-100 transition-opacity duration-500 ease-in-out"
                  : "opacity-0 transition-opacity duration-500 ease-in-out"
              }
            >
              <Image
                src={item.src}
                alt={item.heading}
                fill
                sizes="33vw"
                className="block object-cover h-full w-full"
              />
              <div className="absolute top-0 left-0 w-full h-full backdrop-opacity-5 backdrop-invert bg-foreground/20 dark:bg-background/30"></div>
            </div>
          );
        })}
      </div>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{
          opacity: inView ? 1 : 0, // Fade in when in view
          translateY: inView ? -30 : 0,
        }}
        transition={{
          opacity: { duration: 0.3 },
          translateY: { duration: 0.5 },
        }}
        className={`sticky bottom-2 w-max mx-auto ${teko.className} text-white text-6xl font-semibold tracking-wide uppercase duration-500 after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:h-2 after:w-1/2 after:bg-primary`}
      >
        {visibleSection}
      </motion.h1>
    </aside>
  );
}
export default BannerContainer;
