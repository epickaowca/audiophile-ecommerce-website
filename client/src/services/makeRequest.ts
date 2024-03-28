import axios, { AxiosRequestConfig } from "axios";

const PATH = process.env.REACT_APP_BACKEND_SERVER_PATH || "";
const SERVER_URL =
  process.env.REACT_APP_BACKEND_SERVER_URL || "http://localhost:3002";

const api = axios.create({
  baseURL: `${SERVER_URL}/${PATH}`,
});

export function makeRequest(
  url: string,
  options?: AxiosRequestConfig<any> | undefined
) {
  return api(url, options)
    .then((res) => {
      return res.data;
    })
    .catch((error) => Promise.reject(error ?? "Error"));
}
