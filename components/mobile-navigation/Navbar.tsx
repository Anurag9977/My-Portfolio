"use client";

import { User } from "@/utils/types";
import DarkMode from "../sidebar/DarkMode";
import { NavUser } from "../sidebar/NavUser";
import SidebarToggleButton from "../sidebar/SidebarToggleButton";
import { useSidebar } from "../ui/sidebar";

function Navbar({ author, resume }: { author: User; resume: string }) {
  const { toggleSidebar } = useSidebar();
  return (
    <nav className="lg:hidden fixed top-0 left-0 z-10 w-full h-14 sm:h-16 px-8 sm:px-12 bg-sidebar shadow-sm grid grid-cols-2 justify-between items-center">
      <div className="w-max">
        <SidebarToggleButton
          size="sm"
          isSidebarOpen={false}
          toggleSidebar={toggleSidebar}
        />
      </div>
      <div className="grid grid-cols-2 gap-x-2 items-center justify-self-end">
        <DarkMode isSidebarOpen={false} />
        <NavUser author={author} isSidebarOpen={false} resume={resume} />
      </div>
    </nav>
  );
}
export default Navbar;
