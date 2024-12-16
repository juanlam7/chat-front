import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useEffect, useState } from "react";
import { TiEye } from "react-icons/ti";
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
    ? "w-[18.75rem] flex-none h-full"
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
    className="cursor-pointer h-8 w-32 bg-sky-500 transition ease-in duration-150 
        absolute left-full top-1 rounded-tr-lg rounded-br-lg flex items-center justify-center"
  >
    <TiEye className="text-xl text-white" />
    <p className="ml-2 text-white text-sm">Open Sidebar</p>
  </div>
);

export default Sidebar;
