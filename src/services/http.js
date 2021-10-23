import axios from "axios";
import tokenService from "./tokenService";

const http = axios.create({
  baseURL: process.env.VUE_APP_ENDPOINT,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": process.env.VUE_APP_API_URL,
  },
});

http.interceptors.request.use(async (config) => {
  const urlsAnonimas = [
    "/users",
    "/authenticate",
    "/authenticate/refresh-token",
  ];
  const isAnonimo = (url) => config.url.toLowerCase().endsWith(url);
  const urlAnonima = urlsAnonimas
    .map((url) => isAnonimo(url))
    .reduce((a, b) => a || b, false);

  if (!urlAnonima) {
    const token = tokenService.get();
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

http.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error)
);

export default http;
