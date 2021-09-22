export const createInitialValues = {
  email: "",
  username: "",
  password: "",
  confirmPassword: "",
};
export const createValidations = (values) => {
  const errors = {};
  const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!_@#\$%\^&\*])(?=.{8,})/;
  if (!values.email) {
    errors.email = "Required";
  }

  if (!values.username) {
    errors.username = "Required";
  } else if (values.username.length < 3) {
    errors.username = "Name should be less than 3 latters";
  } else if (values.username.length > 50) {
    errors.username = "Name should be more than 50 latters";
  }

  if (!values.password) {
    errors.password = "Required";
  } else if (!values.password.match(re)) {
    errors.password = "Password is invalid !";
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = "Required";
  } else if (!values.confirmPassword.match(re)) {
    errors.confirmPassword = "Confirm Password is invalid !";
  } else if (values.password !== values.confirmPassword) {
    errors.confirmPassword = "Password doesn't match !";
  }
  
  return errors;
};
