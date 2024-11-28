import { instance } from "../utils/axios";

const login = async (data) => {
  try {
    const response = await instance.post("/auth/login", data);
    if (response.status == 200) {
      return true;
    }
  } catch (error) {
    if (error.status == 401) {
      return false;
    }
  }
};

const register = async (data) => {
  try {
    const response = await instance.post("/auth/register", data);
    if (response.status == 200) {
      return true;
    }
  } catch (error) {
    if (error) {
      return false;
    }
  }
};

const AUTH = {
  login,
  register,
};

export default AUTH;
