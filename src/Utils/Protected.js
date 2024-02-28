import { useContext } from "react";
import { AccountContext } from "../context/context";
import { Navigate, Outlet } from "react-router-dom";

export const ProctectedRoutes = () => {
  const { user } = useContext(AccountContext);
  return user ? <Outlet /> : <Navigate to="/login" />;
};
