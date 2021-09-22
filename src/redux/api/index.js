import axios from "axios";
import { BACK_END_URL } from "../../config";
const host_url = BACK_END_URL;
// const host_url = "http://localhost:5000";

const checkUser = async ({ username, password }) => {
  try {
    let { data } = await axios.post(`${host_url}/api/authLogin`, {
      username,
      password,
    });
    if (data.email) {
      localStorage.setItem("token", data.token);
      localStorage.setItem("email", data.email);
      localStorage.setItem("auth", data.id);
      return {
        email: data.email,
        status: data.status,
        expiry: data.expiry,
        auth: data.id,
      };
    } else {
      throw new Error(data.message);
    }
  } catch (err) {
    throw err;
  }
};
const verifyUser = async ({ token, email }) => {
  try {
    let { data } = await axios.post(`${host_url}/api/isVerify`, {
      token,
      email,
    });
    if (data.email) {
      return data;
    } else {
      throw new Error(data.message);
    }
  } catch (err) {
    throw err;
  }
};
const createProfile = async ({ email, username, password }) => {
  try {
    let { data } = await axios.post(`${host_url}/api/user`, {
      email,
      username,
      password,
    });
    if (data.error) {
      throw new Error(data.error);
    } else {
      localStorage.setItem("token", data.token);
      localStorage.setItem("email", data.email);
      return data;
    }
  } catch (err) {
    throw err;
  }
};

export { checkUser, verifyUser, createProfile };

