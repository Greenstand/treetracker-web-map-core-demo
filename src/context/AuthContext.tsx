import React, { createContext, useState, useContext, ReactNode } from "react";

type AuthContextType = {
  userToken: string | null;
  signIn: () => void;
  signOut: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [userToken, setUserToken] = useState<string | null>(null);

  const signIn = () => {
    // Simulating a successful signIn by setting a dummy user token
    const dummyToken = "dummyToken123";
    setUserToken(dummyToken);
  };

  const signOut = () => {
    setUserToken(null);
  };

  const contextValue: AuthContextType = {
    userToken,
    signIn,
    signOut,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
