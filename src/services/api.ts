import axios from "axios";

export const API = axios.create({
  baseURL: "http://localhost:8000/",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/x-www-form-urlencoded",
  },
});
