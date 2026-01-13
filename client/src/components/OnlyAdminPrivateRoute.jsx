import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

export default function OnlyAdminPrivateRoute() {
  let currectUser = useSelector((state) => state.user);
  currectUser = currectUser.currentUser;
  return currectUser ? <Outlet /> : <Navigate to="/signin" />;
}
