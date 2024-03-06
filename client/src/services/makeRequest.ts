import axios, { AxiosRequestConfig } from "axios";
import { SERVER_URL } from "../constants";

const api = axios.create({
  baseURL: SERVER_URL,
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
