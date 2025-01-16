import { teko } from "@/utils/fonts";
import { footerItems, socials } from "@/utils/links";
import { Button } from "../ui/button";
import Link from "next/link";

function FooterContainer() {
  return (
    <footer className="bg-background border-t">
      <h1
        className={`mt-8 relative w-max mx-auto ${teko.className} text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wide uppercase duration-500 after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:h-1 md:after:h-2 after:w-2/5 after:bg-primary`}
      >
        get in touch
      </h1>
      <div className="px-16 mt-12 mb-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-y-4 gap-x-2">
          {footerItems.map((item, index) => {
            return (
              <div key={index} className="flex items-center">
                <item.icon size={18} />
                <Button asChild variant="link" className="text-lg capitalize">
                  <Link target="_blank" href={item.link}>
                    {item.heading}
                  </Link>
                </Button>
              </div>
            );
          })}
          <div className="mt-2 md:mt-0 flex items-center gap-x-4">
            <h2 className="text-lg capitalize text-primary font-medium">
              socials
            </h2>
            <div className="flex items-center gap-x-4">
              {socials.map((item, index) => {
                return (
                  <div key={index}>
                    <Button
                      asChild
                      variant="outline"
                      size="icon"
                      className="hover:text-primary duration-300"
                    >
                      <Link target="_blank" href={item.link}>
                        <item.icon />
                      </Link>
                    </Button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-muted py-8 text-center">
        <p className="tracking-wide font-medium capitalize">
          &copy; copyright {new Date().getFullYear()}. all rights reserved.
        </p>
      </div>
    </footer>
  );
}
export default FooterContainer;
