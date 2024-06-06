import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface AuthState {
  name: string;
  password: string;
}

interface AuthContextType {
  authState: AuthState;
  setAuthState: React.Dispatch<React.SetStateAction<AuthState>>;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useNavigate();
  const [authState, setAuthState] = useState<AuthState>({
    name: "",
    password: "",
  });

  useEffect(() => {
    // Check if name and password are set, if not, redirect to "/auth"
    if (!authState.name || !authState.password) {
      router("/auth");
    }
  }, [authState, router]);

  return (
    <AuthContext.Provider value={{ authState, setAuthState }}>
      {children}
    </AuthContext.Provider>
  );
};
