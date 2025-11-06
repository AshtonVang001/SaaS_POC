import { createContext, useContext } from "react";

type AuthContextType = {
    companyName: string;
}

export const AuthContext = createContext<AuthContextType>({companyName: ""});

export const useAuth = () => useContext(AuthContext);
