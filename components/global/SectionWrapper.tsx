import { cn } from "@/lib/utils";

function SectionWrapper({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section className={cn("px-8 lg:px-16 py-8", className)}>
      {children}
    </section>
  );
}
export default SectionWrapper;
