import React from "react";
import { useSelector } from "react-redux";
import AuthRoute from "../Routes/AuthRoutes";
import UnAuthRoute from "../Routes/UnAuthRoutes";

const HomeRoute = () => {
  const { email } = useSelector((state) => state.login);
  return (
      <>{email ? <AuthRoute /> : <UnAuthRoute />}</>
  );
};
export default HomeRoute;
