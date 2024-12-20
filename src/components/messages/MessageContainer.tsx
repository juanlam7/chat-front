import { useAuthContext } from "@/context/AuthContext";
import useConversation from "@/zustand/useConversation";
import { useEffect } from "react";
import { TiMessages } from "react-icons/ti";
import MessageInput from "./MessageInput";
import Messages from "./Messages";

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => {
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);

  // const backgroundChat = selectedConversation
  //   ? "relative bg-[url('/bg.png')] bg-no-repeat bg-cover bg-center"
  //   : "";

  return (
    <div className="overflow-x-auto overflow-y-auto flex w-full">
      <div className="min-w-[18.5rem] shrink-0 w-full flex flex-col">
        {!selectedConversation ? (
          <NoChatSelected />
        ) : (
          <>
            <div className="bg-gray-700 px-4 py-2 mb-2">
              <span className="label-text">To:</span>{" "}
              <span className="text-white font-bold">
                {selectedConversation.fullName}
              </span>
            </div>
            <Messages />
            <MessageInput />
          </>
        )}
      </div>
    </div>
  );
};

export default MessageContainer;

const NoChatSelected = () => {
  const { authUser } = useAuthContext();
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Welcome 👋 {authUser?.fullName} ❄</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};
