import { useState } from "react";
import Login from "../components/Login";
import SignUp from "../components/SignUp";
const UnAuthRoute = () => {
  const [openLogin, setOpenLogin] = useState(true);
  return (
    <>
      {openLogin ? (
        <Login openLogin={openLogin} setOpenLogin={setOpenLogin} />
      ) : (
        <SignUp openLogin={openLogin} setOpenLogin={setOpenLogin} />
      )}
    </>
  );
};

export default UnAuthRoute;
