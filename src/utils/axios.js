import axios from "axios";

export const instance = axios.create({
  baseURL: "/api",
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});

instance.interceptors.response.use(
  (res) => res,
  (err) => {
    if (
      err.response.status === 401 &&
      !window.location.href.includes("login")
    ) {
      window?.location?.assign("/auth/login");
      return;
    }
    return Promise.reject(err);
  }
);
