import useLogout from "@/hooks/useLogout";
import { Dispatch, SetStateAction, useState } from "react";
import { BiLogOut } from "react-icons/bi";
import { FiEyeOff } from "react-icons/fi";
import LogoutModal from "./LogoutModal";

interface ISidebarFooter {
  showSidebar: boolean;
  setShowSidebar: Dispatch<SetStateAction<boolean>>;
}

export default function SidebarFooter({
  showSidebar,
  setShowSidebar,
}: ISidebarFooter) {
  const { loading, logout } = useLogout();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleLogout = () => {
    setIsModalOpen(false);
    logout();
  };

  return (
    <footer
      className={`${
        showSidebar ? "block" : "hidden"
      } absolute bottom-0 py-6 pr-6 w-full`}
    >
      <FooterButton
        onClick={() => setShowSidebar(!showSidebar)}
        icon={<FiEyeOff className="text-xl text-white" />}
        text="Hide Sidebar"
      />

      {loading ? (
        <div className="flex items-center justify-center py-3">
          <span className="loading loading-spinner"></span>
        </div>
      ) : (
        <FooterButton
          onClick={() => setIsModalOpen(true)}
          icon={<BiLogOut className="w-6 h-6 text-white" />}
          text="Logout"
        />
      )}

      {isModalOpen && (
        <LogoutModal
          isModalOpen={isModalOpen}
          handleLogout={handleLogout}
          setIsModalOpen={setIsModalOpen}
        />
      )}
    </footer>
  );
}

const FooterButton = ({
  onClick,
  icon,
  text,
}: {
  onClick: () => void;
  icon: React.ReactNode;
  text: string;
}) => (
  <div
    onClick={onClick}
    className="hover:bg-sky-500 cursor-pointer flex py-3 px-2 transition duration-150 rounded items-center"
  >
    {icon}
    <p className="ml-2 text-white text-sm">{text}</p>
  </div>
);
