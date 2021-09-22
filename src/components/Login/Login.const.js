export const createLoginInitialValues = {
  username: "",
  password: "",
};
export const createLoginValidations = (values) => {
  const errors = {};
  if (!values.username) {
    errors.username = "Required";
  }
  if (!values.password) {
    errors.password = "Required";
  }
  return errors;
};
