import { useEffect } from "react";

import { useSocketContext } from "@/context/SocketContext";
import useConversation from "@/zustand/useConversation";

import notificationSound from "/notification.mp3";

const useListenMessages = () => {
  const { socket } = useSocketContext();
  const { messages, setMessages, selectedConversation } = useConversation();

  useEffect(() => {
    socket?.on("newMessage", (newMessage) => {
      newMessage.shouldShake = true;
      const sound = new Audio(notificationSound);
      sound.play();
      if (selectedConversation?._id === newMessage["senderId"]) {
        setMessages([...messages, newMessage]);
      }
    });

    return () => {
      if (socket) {
        socket.off("newMessage");
      }
    };
  }, [socket, setMessages, messages, selectedConversation]);
};
export default useListenMessages;
