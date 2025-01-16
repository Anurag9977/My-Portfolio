import { cn } from "@/lib/utils";
import { josefinSans } from "@/utils/fonts";

function SectionTitle({
  heading,
  subHeading,
  sectionNumber,
  className,
}: {
  heading: string;
  subHeading: string;
  sectionNumber: string;
  className?: string;
}) {
  return (
    <div className={cn("my-8", className)}>
      <div className="flex justify-between items-center">
        <h2
          className={`${josefinSans.className} relative text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-wide  before:absolute before:-top-1 before:-left-4 before:-z-10 before:bg-foreground/5 before:h-10 before:w-20 after:absolute after:-top-6 after:left-1 after:bg-primary after:h-1 after:w-14`}
        >
          {heading}
        </h2>
        <h1
          className={`${josefinSans.className} text-7xl md:text-8xl lg:text-9xl font-bold text-muted`}
        >
          {sectionNumber}
        </h1>
      </div>
      <p className="mt-4 leading-relaxed text-justify font-medium text-foreground/60">
        {subHeading}
      </p>
    </div>
  );
}
export default SectionTitle;
