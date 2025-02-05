import axios from "axios";
import { setAuthToken } from "./setAuthToken";

export const api = axios.create({
  // baseURL: "https://api.intelliphy.ai/api",
  baseURL: "http://localhost:6009/api",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.response.use(
  (res) => res,
  (err) => {
    console.error(err);
    if (err.response.status === 401) {
      setAuthToken(null);
    }
    return Promise.reject(err);
  },
);
