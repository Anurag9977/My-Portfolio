"use client";

import { ChevronsUpDown } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { User } from "@/utils/types";
import Link from "next/link";
import { socials } from "@/utils/links";
import { LuFile } from "react-icons/lu";

export function NavUser({
  author,
  isSidebarOpen,
  resume,
}: {
  author: User;
  isSidebarOpen: boolean;
  resume: string;
}) {
  const { isMobile } = useSidebar();

  return (
    <SidebarMenu>
      <SidebarMenuItem className="flex justify-center">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <Avatar className="h-8 w-8 rounded-lg">
                <AvatarImage src={author.avatar} alt={author.firstName} />
                <AvatarFallback className="rounded-lg">CN</AvatarFallback>
              </Avatar>
              <div
                className={
                  isSidebarOpen
                    ? "grid flex-1 text-left text-sm leading-tight"
                    : "hidden"
                }
              >
                <span className="truncate font-semibold capitalize">
                  {author.firstName}
                </span>
                <span className="truncate text-xs">{author.email}</span>
              </div>
              <ChevronsUpDown
                className={isSidebarOpen ? "ml-auto size-4" : "hidden"}
              />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
            side={isMobile ? "bottom" : "right"}
            align="end"
            sideOffset={6}
          >
            <DropdownMenuLabel className="p-0 font-normal">
              <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                <Avatar className="h-8 w-8 rounded-lg">
                  <AvatarImage src={author.avatar} alt={author.firstName} />
                  <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold capitalize">
                    {author.firstName}
                  </span>
                  <span className="truncate text-xs">{author.email}</span>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuLabel className="capitalize">
              Socials
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              {socials.map((item, index) => {
                return (
                  <DropdownMenuItem
                    asChild
                    key={index}
                    className="group/social cursor-pointer capitalize"
                  >
                    <Link href={item.link}>
                      <item.icon className="group-hover/social:text-primary duration-300" />
                      <span>{item.heading}</span>
                    </Link>
                  </DropdownMenuItem>
                );
              })}
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              asChild
              className="group/resume cursor-pointer capitalize my-1"
            >
              <Link href={resume} target="_blank" className="font-medium">
                <LuFile className="group-hover/resume:text-primary duration-300" />
                <span className="mt-[2px]">download resume</span>
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
