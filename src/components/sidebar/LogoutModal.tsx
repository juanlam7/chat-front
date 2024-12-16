import { Dispatch, SetStateAction, useEffect, useRef } from "react";

interface ILogoutModal {
  isModalOpen: boolean;
  handleLogout: () => void;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}

export default function LogoutModal({
  isModalOpen,
  handleLogout,
  setIsModalOpen,
}: ILogoutModal) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setIsModalOpen(false);
      }
    };

    if (isModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isModalOpen]);

  return (
    <div className="modal modal-open flex items-center justify-center">
      <div className="fixed inset-0 bg-black bg-opacity-30"></div>

      <div ref={modalRef} className="modal-box relative z-10">
        <h3 className="font-bold text-lg">Confirm Logout</h3>
        <p className="py-4">Are you sure you want to log out?</p>
        <div className="modal-action">
          <button className="btn btn-error text-white" onClick={handleLogout}>
            Yes, Logout
          </button>
          <button className="btn" onClick={() => setIsModalOpen(false)}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
