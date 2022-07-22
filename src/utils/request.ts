import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { message } from 'antd';

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/x-www-form-urlencoded'
  }
});
// axios实例拦截响应
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    if (response.headers.authorization) {
      localStorage.setItem('token', response.headers.authorization);
    } else {
      if (response.data && response.data.token) {
        localStorage.setItem('token', response.data.token);
      }
    }

    if (response.status === 200) {
      return response;
    } else {
      // showMessage(response.status);
      return response;
    }
  },
  // 请求失败
  (error: any) => {
    const { response } = error;
    if (response) {
      // 请求已发出，但是不在2xx的范围
      // showMessage(response.status);
      return Promise.reject(response.data);
    } else {
      message.error('网络连接异常,请稍后再试!');
    }
  }
);

// axios实例拦截请求
axiosInstance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers!.authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: unknown) => {
    return Promise.reject(error);
  }
);
