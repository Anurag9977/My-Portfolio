"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  useSidebar,
} from "../ui/sidebar";
import { Button } from "../ui/button";
import { dancingScript } from "@/utils/fonts";
import { IoArrowUndoSharp } from "react-icons/io5";
import NavLinks from "./NavLinks";
import { NavProjects } from "./NavProjects";
import { NavUser } from "./NavUser";
import DarkMode from "./DarkMode";
import { ProjectCard, User } from "@/utils/types";
import SidebarToggleButton from "./SidebarToggleButton";

function SidebarWrapper({
  author,
  topProjects,
  resume,
}: {
  author: User;
  topProjects: ProjectCard[];
  resume: string;
}) {
  const { state, isMobile, toggleSidebar } = useSidebar();
  const isSidebarOpen = state === "expanded" || isMobile;

  return (
    <Sidebar collapsible="icon" className="shadow-sm">
      <SidebarHeader className="mt-4 px-8">
        <SidebarToggleButton
          isSidebarOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
        />
        <div
          className={
            isSidebarOpen
              ? "flex items-center justify-between gap-x-2"
              : "hidden"
          }
        >
          <h1
            className={`truncate text-primary text-center text-2xl tracking-wider font-bold capitalize ${dancingScript.className}`}
          >
            {author.firstName}{" "}
            <span className="text-sidebar-foreground">{author.lastName}</span>
          </h1>
          <Button variant="ghost" size="icon" onClick={toggleSidebar}>
            <IoArrowUndoSharp />
          </Button>
        </div>
      </SidebarHeader>
      <SidebarContent className="my-4 flex flex-col gap-y-1 px-8 overflow-hidden">
        <NavLinks isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <NavProjects topProjects={topProjects} />
      </SidebarContent>
      <SidebarFooter
        className={
          isSidebarOpen ? "gap-y-6 px-8 mb-2" : "mb-4 flex flex-col gap-y-6"
        }
      >
        <DarkMode isSidebarOpen={isSidebarOpen} />
        <NavUser
          author={author}
          isSidebarOpen={isSidebarOpen}
          resume={resume}
        />
      </SidebarFooter>
    </Sidebar>
  );
}
export default SidebarWrapper;
