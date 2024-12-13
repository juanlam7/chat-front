/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useContext } from "react";

interface AuthContextType {
  authUser: any;
  setAuthUser: (user: any) => void;
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
