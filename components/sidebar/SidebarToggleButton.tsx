import { TiThMenuOutline } from "react-icons/ti";

function SidebarToggleButton({
  size = "default",
  isSidebarOpen,
  toggleSidebar,
}: {
  size?: "sm" | "default";
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}) {
  return (
    <button
      className={
        isSidebarOpen
          ? "hidden"
          : "flex flex-col items-center gap-y-1 group/menu-btn"
      }
      onClick={toggleSidebar}
    >
      <TiThMenuOutline
        size={24}
        className="text-primary group-hover/menu-btn:text-sidebar-foreground duration-300"
      />
      {size === "default" && (
        <span className="group-hover/menu-btn:text-primary duration-300 uppercase tracking-wider text-xs">
          menu
        </span>
      )}
    </button>
  );
}
export default SidebarToggleButton;
