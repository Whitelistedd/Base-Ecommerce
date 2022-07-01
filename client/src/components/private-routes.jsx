import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

export const PrivateRoute = () => {
  const { isAuthenticated } = useAuth0();
  const location = useLocation();

  return isAuthenticated ? (
    <Outlet />
  ) : (
    /* отправит пользователя на страницу входа, если пользователь не вошел в систему */
    <Navigate to={"/login"} state={{ from: location }} replace />
  );
};
