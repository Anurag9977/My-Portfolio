import { navLinks } from "@/utils/links";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../ui/sidebar";
import Link from "next/link";

function NavLinks({
  isSidebarOpen,
  toggleSidebar,
}: {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}) {
  return (
    <SidebarGroup className="px-0">
      <SidebarGroupLabel className="text-sm tracking-wide">
        Navigation
      </SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu
          className={isSidebarOpen ? "" : "flex flex-col items-center"}
        >
          {navLinks.map((link) => (
            <SidebarMenuItem key={link.label} className="my-1">
              <SidebarMenuButton
                asChild
                className="group/btn flex items-center gap-x-4 text-sm md:text-base capitalize py-0"
                onClick={() => {
                  if (isSidebarOpen) {
                    toggleSidebar();
                  }
                }}
              >
                <Link href={link.href}>
                  <link.icon
                    className={`md:!size-[18px] stroke-[1.8] ${
                      isSidebarOpen
                        ? ""
                        : "group-hover/btn:text-primary duration-300"
                    }`}
                  />
                  <span className="mt-[2px]">{link.label}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
export default NavLinks;
