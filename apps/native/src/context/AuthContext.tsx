import AsyncStorage from "@react-native-async-storage/async-storage";
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

  const signIn = async () => {
    try {
      const token = await AsyncStorage.getItem("userToken");
      console.log("token:", token);
      if (token !== null) {
        setUserToken(JSON.stringify(token));
      }
    } catch (error) {
      console.log(error);
      console.error("Error checking authentication:", error);
    }
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
