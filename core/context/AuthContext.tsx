"use client";

import { useRouter } from "next/navigation";

import React from "react";
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
  useLayoutEffect,
} from "react";
import { toast } from "sonner";
import { createBaseRequest } from "../models/createBaseReq";

// Define the shape of the authentication state
interface AuthState {
   phoneNumber: string | null;
   userId: string | null;
   accessToken: string | null;
   login: (userId: string, phoneNumber: string, accessToken: string) => void;
   logout: () => void;
   isLoading: boolean;
   setIsLoading: (isLoading: boolean) => void;
   isAuthLoading: boolean;
}

// Create an empty default context
const AuthContext = createContext<AuthState | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
   const [phoneNumber, setPhoneNumber] = useState<string | null>(() => {
     if (typeof window !== 'undefined') {
       return localStorage.getItem("phoneNumber");
     }
     return null;
   });
   const [userId, setUserId] = useState<string | null>(() => {
     if (typeof window !== 'undefined') {
       return localStorage.getItem("userId");
     }
     return null;
   });
   const [accessToken, setAccessToken] = useState<string | null>(() => {
     if (typeof window !== 'undefined') {
       return localStorage.getItem("accessToken");
     }
     return null;
   });

   const [isLoading, setIsLoading] = useState<boolean>(false);
   const [isAuthLoading, setIsAuthLoading] = useState<boolean>(false);
   const router = useRouter();


  // Function to log in the user
  const login = async (
    userId: string,
    phoneNumber: string,
    accessToken: string
  ) => {
    setIsLoading(true);
    localStorage.setItem("userId", userId);
    localStorage.setItem("phoneNumber", phoneNumber);
    localStorage.setItem("accessToken", accessToken);
    try {
      const baseRequest = await createBaseRequest();
      if (baseRequest.location) {
        console.log(
          baseRequest.location.latitude,
          baseRequest.location.longitude
        );
      } else {
        console.warn("baseRequest.location is null");
      }

      // const finalPayload = {
      //   ...baseRequest,
      //   ...customPayload,
      // };
    } catch (error) {
      console.error("Error during login:", error);
      toast.error(
        "Failed to make API call. Please enable location permissions and try again."
      );
    }
    setUserId(userId);
    setPhoneNumber(phoneNumber);
    setAccessToken(accessToken);

    localStorage.setItem("userId", userId);
    localStorage.setItem("phoneNumber", phoneNumber);
    localStorage.setItem("accessToken", accessToken);
    setIsLoading(false);
  };

  // Function to log out the user
  const logout = () => {
    setUserId(null);
    setPhoneNumber(null);
    setAccessToken(null);

    localStorage.removeItem("userId");
    localStorage.removeItem("phoneNumber");
    localStorage.removeItem("accessToken");
    setIsLoading(true);

    // alert("Log out successful")
    toast.success("Log out successful");
    router.push("/auth/login");
  };

  return (
    <AuthContext.Provider
      value={{
        phoneNumber,
        userId,
        accessToken,
        login,
        logout,
        isLoading,
        setIsLoading,
        isAuthLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to access auth state
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
