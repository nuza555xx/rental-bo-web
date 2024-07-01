// src/utils/axiosUtils.ts

import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { base } from "./base";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_REACT_BASE_API,
  timeout: 10000,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(base.accessToken);
    if (token) config.headers.Authorization = `Bearer ${token}`;

    if (config.url && !config.url.startsWith("http")) {
      config.url = `${axiosInstance.defaults.baseURL}${config.url}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const httpRest = {
  get: async <T = any>(
    path: string,
    config?: AxiosRequestConfig,
    signal?: AbortSignal
  ): Promise<T> => {
    const response = await axiosInstance.get<T>(path, { ...config, signal });
    return response.data;
  },

  post: async <T = any>(
    path: string,
    data: any,
    config?: AxiosRequestConfig,
    signal?: AbortSignal
  ): Promise<T> => {
    const response = await axiosInstance.post<T>(path, data, {
      ...config,
      signal,
    });
    return response.data;
  },

  put: async <T = any>(
    path: string,
    data: any,
    config?: AxiosRequestConfig,
    signal?: AbortSignal
  ): Promise<T> => {
    const response = await axiosInstance.put<T>(path, data, {
      ...config,
      signal,
    });
    return response.data;
  },

  delete: async <T = any>(
    path: string,
    config?: AxiosRequestConfig,
    signal?: AbortSignal
  ): Promise<T> => {
    const response = await axiosInstance.delete<T>(path, { ...config, signal });
    return response.data;
  },
};
