import axios from "axios";

export const Api = axios.create({
  baseURL: "https://example.com/api/",
  headers: {
    "Content-Type": "application/json"
  }
});

const configureAuth = config => {
  if (!config.headers.Authorization) {
    const newConfig = {
      headers: {},
      ...config
    };

    const token = localStorage.getItem("accessToken");

    if (token && !(config.url === "/login" && config.method === "post")) {
      newConfig.headers.Authorization = `Bearer ${token}`;
    }

    return newConfig;
  }

  return config;
};

const unauthorizedResponse = async error => {
  if (
    error.response &&
    error.response.status === 401 &&
    window.location.pathname !== "/" &&
    error.response.config.url.indexOf("/login") === -1
  ) {
    window.history.go("/");
  }
  return Promise.reject(error);
};

Api.interceptors.request.use(configureAuth, e => Promise.reject(e));
Api.interceptors.response.use(r => r, unauthorizedResponse);
