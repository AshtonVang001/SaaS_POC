import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [companyName, setCompanyName] = useState("");

  useEffect(() => {
    const checkAuth = async () => {
      try {
        // This will call your backend /dashboard route to verify token
        const response = await fetch("/dashboard", {
          method: "GET",
          credentials: "include", // include cookies
        });

        if (response.ok) {
          const data = await response.json();
          setCompanyName(data.companyName);
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      } catch {
        setIsAuthenticated(false);
      }
    };

    checkAuth();
  }, []);

  // Wait for fetch to complete
  if (isAuthenticated === null) {
    return <div>Loading...</div>;
  }

  // If not authenticated, redirect to login
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // Otherwise, show the protected page
  return (
    <AuthContext.Provider value={{ companyName }}>
      {children}
    </AuthContext.Provider>
  )
};
