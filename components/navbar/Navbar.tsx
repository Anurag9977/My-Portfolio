import { navLinks } from "@/utils/links";
import Link from "next/link";
import SectionWrapper from "../global/SectionWrapper";
import { VisibleSection } from "@/utils/types";

function Navbar({ visibleSection }: { visibleSection: VisibleSection }) {
  return (
    <nav className="sticky top-0 z-10 bg-sidebar shadow-sm">
      <SectionWrapper className="flex justify-between items-center">
        {navLinks.slice(1).map((item) => {
          return (
            <Link
              key={item.key}
              href={item.href}
              className={`flex justify-between items-center gap-x-1 md:gap-x-2 uppercase font-semibold tracking-[0.2em] text-xs md:text-sm hover:text-primary duration-300 ${
                visibleSection === item.key ? "text-primary" : ""
              }`}
            >
              <span>-</span>
              <span>{item.key}</span>
            </Link>
          );
        })}
      </SectionWrapper>
    </nav>
  );
}
export default Navbar;
