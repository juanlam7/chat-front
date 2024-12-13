import { createContext, useContext } from "react";
import { Socket } from "socket.io-client";

interface SocketContextType {
  socket: Socket | null;
  onlineUsers: Array<{ id: string; username: string }>;
}

export const SocketContext = createContext<SocketContextType | undefined>(
  undefined
);

export const useSocketContext = () => {
  const context = useContext(SocketContext);
  if (context === undefined) {
    throw new Error(
      "useSocketContext must be used within a SocketContextProvider"
    );
  }
  return context;
};
