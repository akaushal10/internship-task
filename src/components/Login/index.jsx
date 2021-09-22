import {
  Button, Grid,
  IconButton, InputAdornment, Snackbar,
  TextField,
  Tooltip
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import LockIcon from "@material-ui/icons/Lock";
import MuiAlert from "@material-ui/lab/Alert";
import { Form, Formik } from "formik";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { requestLogin } from "../../redux/actions/actions";
import {
  createLoginInitialValues,
  createLoginValidations
} from "./Login.const";

import useStyles from './Login.styles';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Login = ({ openLogin, setOpenLogin }) => {
  const classes = useStyles()
  const { loading, errorMessage, errorStatus } = useSelector(
    (state) => state.login
  );
  const dispatch = useDispatch();
  const [openAlert, setOpenAlert] = useState(errorStatus);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (value) => {
    dispatch(requestLogin({ username:value.username, password:value.password }));
    setOpenAlert(errorStatus);
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenAlert(false);
  };
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        className="bg-light"
        id="login-section"
      >
        <Grid
          container
          item
          id="login-inner-section"
          xs={11}
          md={10}
          className={classes.roundedCorner}
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid item xs={12} md={4} className="text-center">
            <LockIcon className={classes.lockIcon} />
            <p style={{ width: "50%" }} className="mx-auto fw-bold fs-5">
              Enter into Website
            </p>
          </Grid>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            item
            xs={12}
            md={8}
          >
            <Formik
              initialValues={{
                ...createLoginInitialValues,
              }}
              validate={createLoginValidations}
              onSubmit={handleSubmit}
            >
              {(formik) => (
                <Form>
                  <Grid
                    container
                    item
                      direction="row"
                    justify="center"
                    alignItems="center"
                  >
                    <Grid
                      item
                      xs={12}
                      className="mt-5 mb-2 fs-3 text-center fw-bolder"
                    >
                      Log in{" "}
                    </Grid>
                    <Grid item xs={9} className="my-3">
                      <TextField
                        fullWidth
                        id="login-username"
                        name="username"
                        label="Email"
                        value={formik.values.username}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.username &&
                          Boolean(formik.errors.username)
                        }
                        helperText={
                          formik.touched.username && formik.errors.username
                        }
                      />
                    </Grid>
                    <Grid item xs={9} className="my-3">
                      <TextField
                        fullWidth
                        id="login-password"
                        name="password"
                        label="Password"
                        type={showPassword ? "text" : "password"}
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.password &&
                          Boolean(formik.errors.password)
                        }
                        helperText={
                          formik.touched.password && formik.errors.password
                        }
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                              >
                                {showPassword ? (
                                  <Visibility />
                                ) : (
                                  <VisibilityOff />
                                )}
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                      />
                    </Grid>
                    <Grid
                      container
                      direction="row"
                      justify="flex-end"
                      item
                      xs={9}
                    >
                      <Grid
                        component={Button}
                        className="fw-bold text-decoration-none"
                        item
                      >Forgot Password ?
                      </Grid>
                    </Grid>

                    <Grid
                      container
                      item
                      direction="row"
                      justify="flex-end"
                      xs={12}
                      md={9}
                      className="my-5 text-center"
                    >
                      <Grid
                        component={Button}
                        type="submit"
                        style={{ borderRadius: "none" }}
                        item
                        xs={9}
                        md={4}
                        className="login-submit-button fw-bold py-2 fs-6 mx-5"
                      >
                        Login
                      </Grid>
                      <Grid
                        item
                        xs={9}
                        md={4}
                        component={Button}
                        style={{ borderRadius: "none" }}
                        className="login-register-button fw-bold py-2 fs-6"
                        onClick={() => {
                          setOpenLogin(!openLogin);
                        }}
                      >
                        Create Profile
                      </Grid>
                    </Grid>
                  </Grid>
                </Form>
              )}
            </Formik>
          </Grid>
        </Grid>
      </Grid>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={openAlert}
        autoHideDuration={4000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="error">
          {errorMessage}
        </Alert>
      </Snackbar>
    </>
  );
};
export default Login;
