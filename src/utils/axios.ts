import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BACKEND_URL,
  withCredentials: true,
  timeout: 5000,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});
