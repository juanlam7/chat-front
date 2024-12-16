import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useEffect, useState } from "react";
import { SlArrowLeft } from "react-icons/sl";
import Conversations from "./Conversations";
import SidebarFooter from "./Footer";
import SearchInput from "./SearchInput";

const Sidebar = () => {
  const isLargeScreen = useMediaQuery("(min-width: 768px)");
  const [showSidebar, setShowSidebar] = useState<boolean>(isLargeScreen);

  useEffect(() => {
    setShowSidebar(isLargeScreen);
  }, [isLargeScreen]);

  const toggleSidebar = () => setShowSidebar((prev) => !prev);

  const sidebarClasses = showSidebar
    ? "w-[16.75rem] sm:w-[18.75rem] flex-none h-full"
    : "w-0 overflow-hidden";

  return (
    <div className="relative">
      <aside
        className={`${sidebarClasses} transition-width duration-150 ease-out relative`}
      >
        <div className="border-r border-slate-500 p-4 flex flex-col h-full">
          <SearchInput />
          <div className="divider px-3"></div>
          <Conversations />
          <SidebarFooter
            showSidebar={showSidebar}
            setShowSidebar={setShowSidebar}
          />
        </div>
      </aside>

      {!showSidebar && <SidebarToggleButton onClick={toggleSidebar} />}
    </div>
  );
};

const SidebarToggleButton = ({ onClick }: { onClick: () => void }) => (
  <div
    onClick={onClick}
    className="cursor-pointer h-8 w-8 bg-sky-500 transition ease-in duration-150 
        absolute left-full bottom-4 rounded-tr-lg rounded-br-lg flex items-center justify-center"
  >
    <SlArrowLeft className="text-xs text-white" />
  </div>
);

export default Sidebar;
