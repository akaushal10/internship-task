import {
  Button,
  FormControl,
  Grid,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  Snackbar,
  TextField,
  Tooltip,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import MuiAlert from "@material-ui/lab/Alert";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { requestCreateProfile } from "../../redux/actions/actions";
import { createInitialValues, createValidations } from "./SignUp.const";
import { Formik, Form } from "formik";
import useStyles from "./SignUp.styles";
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const SignUp = ({ openLogin, setOpenLogin }) => {
  const { loading, errorMessage, errorStatus } = useSelector(
    (state) => state.login
  );
  const dispatch = useDispatch();
  const [openAlert, setOpenAlert] = useState(errorStatus);
  const [showPassword, setShowPassword] = useState(false);
  const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!_@#\$%\^&\*])(?=.{8,})/;
  const classes = useStyles();
  const handleSubmit = (values) => {
    dispatch(
      requestCreateProfile({
        email: values.email,
        password: values.password,
        username: values.username,
      })
    );
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
          md={10}
          className={classes.roundedCorner}
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid item md={4} className={classes.center}>
            <PersonAddIcon className={classes.personIcon} />
            <p style={{ width: "60%" }} className="mx-auto fw-bold fs-5">
              Make your profile
            </p>
          </Grid>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            item
            md={8}
          >
            <Grid item xs={9} className="mt-5 mb-2 fs-3 text-center fw-bolder">
              Create Profile{" "}
            </Grid>
            <Formik
              initialValues={{
                ...createInitialValues,
              }}
              validate={createValidations}
              onSubmit={handleSubmit}
            >
              {(formik) => (
                <Form>
                  <Grid
                    item
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                  >
                    <Grid item xs={9} className="my-2">
                      <TextField
                        fullWidth
                        id="register-email"
                        name="email"
                        label="Email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.email && Boolean(formik.errors.email)
                        }
                        helperText={formik.touched.email && formik.errors.email}
                      />
                    </Grid>
                    <Grid item xs={9} className="my-2">
                      <TextField
                        fullWidth
                        id="register-name"
                        name="username"
                        label="Name"
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

                    <Grid item xs={9} className="my-2">
                      <Tooltip title="Password should be min 8 digit long alphanumric,with a mixture of uppercase,lowercase,digit and special characters.">
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
                      </Tooltip>
                    </Grid>

                    <Grid item xs={9} className="my-2">
                      <Tooltip title="Password should be min 8 digit long alphanumric,with a mixture of uppercase,lowercase,digit and special characters.">
                        <TextField
                          fullWidth
                          id="login-password"
                          name="confirmPassword"
                          label="Confirm Password"
                          type={showPassword ? "text" : "password"}
                          value={formik.values.confirmPassword}
                          onChange={formik.handleChange}
                          error={
                            formik.touched.confirmPassword &&
                            Boolean(formik.errors.confirmPassword)
                          }
                          helperText={
                            formik.touched.confirmPassword &&
                            formik.errors.confirmPassword
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
                      </Tooltip>
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
                        onClick={() => setOpenLogin(!openLogin)}
                      >
                        Already have an Account
                      </Grid>
                    </Grid>
                    <Grid item xs={9} className="my-5 text-center">
                      <Button
                        type="submit"
                        style={{ borderRadius: "none" }}
                        className="login-submit-button fw-bold py-2 fs-6"
                      >
                        Create Profile
                      </Button>
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
export default SignUp;
