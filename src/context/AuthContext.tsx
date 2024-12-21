import { ConversationUser } from "@/zustand/useConversation";
import { createContext, useContext } from "react";

interface AuthContextType {
  authUser: ConversationUser | null;
  setAuthUser: (user: ConversationUser | null) => void;
}

const defaultAuthContextValue: AuthContextType = {
  authUser: null,
  setAuthUser: () => {},
};

export const AuthContext = createContext<AuthContextType>(
  defaultAuthContextValue
);

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuthContext must be used within a AuthContextProvider");
  }
  return useContext(AuthContext);
};
