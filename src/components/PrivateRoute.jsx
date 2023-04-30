import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const user = localStorage.getItem("userDetails");

  return user ? <>{children}</> : <Navigate to="/sign-in" />;
};

export default PrivateRoute;
