"use client";

import { MoreHorizontal } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { ProjectCard } from "@/utils/types";
import { LuGithub, LuGlobe } from "react-icons/lu";
export function NavProjects({ topProjects }: { topProjects: ProjectCard[] }) {
  const { isMobile } = useSidebar();
  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden px-0">
      <SidebarGroupLabel className="text-sm tracking-wide">
        Top Projects
      </SidebarGroupLabel>
      <SidebarMenu>
        {topProjects.slice(0, 3).map((item, index) => (
          <SidebarMenuItem key={index} className="my-1">
            <SidebarMenuButton
              asChild
              className="text-sm md:text-base capitalize flex items-center gap-x-2"
            >
              <Link target="_blank" href={item.projectLink}>
                <span className="text-base md:text-xl">#</span>
                <span>{item.heading}</span>
              </Link>
            </SidebarMenuButton>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuAction showOnHover>
                  <MoreHorizontal />
                  <span className="sr-only">More</span>
                </SidebarMenuAction>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-max rounded-lg"
                side={isMobile ? "bottom" : "right"}
                align={isMobile ? "end" : "start"}
              >
                <DropdownMenuLabel className="capitalize">
                  {item.heading}
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild className="capitalize cursor-pointer">
                  <Link target="_blank" href={item.projectLink}>
                    <LuGlobe className="text-muted-foreground font-medium" />
                    <span>project link</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="capitalize cursor-pointer">
                  <Link target="_blank" href={item.githubLink}>
                    <LuGithub className="text-muted-foreground font-medium" />
                    <span>source code/repo</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
