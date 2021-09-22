import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import { checkVerified } from "../redux/actions/actions";
import HomeRoute from "./HomeRoute";
const Main = () => {
  const { loading } = useSelector((state) => state.login);
  const { email } = useSelector((state) => state.login);
  const [login, setLogin] = useState(false);
  const dispatch = useDispatch();
  const isLogin = () => {
    if (localStorage.getItem("token")) {
      dispatch(
        checkVerified({
          token: localStorage.getItem("token"),
          email: localStorage.getItem("email"),
        })
      );
      if (email) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  };

  useEffect(() => {
      setLogin(isLogin());
  }, []);
  return <>{loading ? <Loader loading={loading} /> : <HomeRoute />}</>;
};
export default Main;
