import axios from "axios";
import config from "./config.json";

export const AxiosClient = axios.create({
    baseURL: config.endpoints.baseURL,
    headers: {
        "Content-Type": "application/json"
    }
});
