import { Button } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { requestUserData } from "../redux/actions/actions";
 const LandingPage = () => {
  const dispatch = useDispatch()  
  useEffect(()=>{
    dispatch(requestUserData())
  },[])
  const handleLogout = ()=>{
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    window.location.reload()
  }
  return (
    <>
    <div className="container border">
      Home Page
      <Button onClick={handleLogout}>Logout</Button>
    </div>
    </>
  );
};

export default LandingPage;
