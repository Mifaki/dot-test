import { useEffect, useState } from "react";
import { validateUser } from "../services/ValidateUser";

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const checkAuth = async () => {
    try {
      const result = await validateUser();
      setIsAuthenticated(result);
    } catch (error) {
      setIsAuthenticated(false);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return isAuthenticated;
};
