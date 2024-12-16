import useLogout from "@/hooks/useLogout";
import { Dispatch, SetStateAction } from "react";
import { BiLogOut } from "react-icons/bi";
import { TiEye } from "react-icons/ti";

interface ISidebarFooter {
  showSidebar: boolean;
  setShowSidebar: Dispatch<SetStateAction<boolean>>;
}

export default function SidebarFooter({
  showSidebar,
  setShowSidebar,
}: ISidebarFooter) {
  const { loading, logout } = useLogout();

  return (
    <footer
      className={`${
        showSidebar ? "block" : "hidden"
      } absolute bottom-0 py-6 pr-6 w-full`}
    >
      <FooterButton
        onClick={() => setShowSidebar(!showSidebar)}
        icon={<TiEye className="text-xl text-white" />}
        text="Hide sidebar"
      />

      {loading ? (
        <div className="flex items-center justify-center py-3">
          <span className="loading loading-spinner"></span>
        </div>
      ) : (
        <FooterButton
          onClick={logout}
          icon={<BiLogOut className="w-6 h-6 text-white" />}
          text="Logout"
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
