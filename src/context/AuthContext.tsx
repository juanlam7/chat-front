/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useContext, useState, ReactNode } from "react";

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
  return useContext(AuthContext);
};

interface AuthContextProviderProps {
  children: ReactNode;
}

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [authUser, setAuthUser] = useState(() => {
    const storedUser = localStorage.getItem("chat-user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
};
