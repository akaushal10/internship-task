import { Backdrop, CircularProgress } from "@material-ui/core";
import React from "react";

const Loader = ({ loading }) => {
  return (
    <>
      <Backdrop style={{ zIndex: "100" }} open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
};
export default Loader;