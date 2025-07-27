import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://backend-production-2aa5.up.railway.app/api",
    withCredentials: true,
    timeout: 5000,
    headers: {
        "Access-Control-Allow-Origin": "*",
    },
});
