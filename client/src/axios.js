import axios from "axios";

//Send access token to backend server
export const makeRequest = axios.create({
    baseUrl: "http://localhost:8800/api/",
    withCredentials: true,
});