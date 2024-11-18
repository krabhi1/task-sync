import React, { createContext, useContext, useEffect } from "react";
import { useImmer } from "use-immer";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/configs/firebase";
import { useToast } from "@/hooks/use-toast";

export type AuthContextType = {
  email: string;
  uid: string;
  name: string;
  photoUrl: string;
};

export const AuthContext = createContext<AuthContextType | null>(null);
type AuthContextProviderProps = React.PropsWithChildren<{
  unProtectedPaths?: string[];
}>;

export function AuthProvider({
  children,
  unProtectedPaths,
}: AuthContextProviderProps) {
  const unprotectedPaths = unProtectedPaths || ["/signin", "/signup"];
  const [authData, setAuthData] = useImmer<AuthContextType>({
    name: "",
    email: "",
    photoUrl: "",
    uid: "",
  });
  const [user, loading, error] = useAuthState(auth);

  const location = useLocation();
  const path = location.pathname;
  const navigate = useNavigate();
  const { toast } = useToast();

  const isProtected = !unprotectedPaths.includes(path);

  useEffect(() => {
    if (!user && !loading && isProtected) {
      //wait for error
      navigate("/signin");
    }
    if (error) {
      toast({
        title: "Error: " + error.name,
        description: error.message,
        variant: "destructive",
      });
    }
  }, [user, loading, error, isProtected, toast]);
  useEffect(() => {
    if (user) {
      setAuthData({
        name: user.displayName || "",
        email: user.email || "",
        photoUrl: user.photoURL || "",
        uid: user.uid,
      });
    }
  }, [user]);
  //redirect to signin
  if (loading) return "Loading...";
  if (!user && isProtected) {
    return null;
  }
  console.log("user", user);
  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
}
