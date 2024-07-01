import { ReactNode, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

type ProtectedRouteProps = { layout: ReactNode };

export const ProtectedRoute = ({ layout }: ProtectedRouteProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(true);

  useEffect(() => {
    const isAuthenticated = sessionStorage.getItem("access-token");

    setIsAuthenticated(!!isAuthenticated);
  }, [isAuthenticated]);

  if (!isAuthenticated) {
    return <Navigate to="/authentications/sign-in" state={isAuthenticated} />;
  }

  return layout;
};
