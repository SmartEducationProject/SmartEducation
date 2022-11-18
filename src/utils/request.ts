import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { message } from 'antd';

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: 'http://172.20.2.82:8989',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});

// axios实例拦截请求
axiosInstance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // if (config.url?.startsWith('/teacher/login') || config.url?.startsWith('/student/login')) return config; // 登录不需要带token

    const token = localStorage.getItem('token') || JSON.parse(localStorage.getItem(`info`) as string).token;
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    if (token) config.headers!.token = token;

    return config;
  },
  (error: unknown) => {
    return Promise.reject(error);
  }
);

// axios实例拦截响应
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    if (response.data.data?.token && response.config.url?.startsWith('/teacher/login')) {
      localStorage.setItem('token', response.data.data.token);
      localStorage.setItem('info', JSON.stringify(response.data.data));
    } else if (response.data.data?.token && response.config.url?.startsWith('/student/login')) {
      localStorage.setItem('info', JSON.stringify(response.data.data));
    }

    if (response.status === 200) {
      return response;
    } else {
      // showMessage(response.status);
      return response;
    }
  },
  // 请求失败
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (error: any) => {
    // const { response } = error;
    console.log(error);
    message.error('网络连接异常,请检查是否使用校园网或稍后再试!');
    return error;
  }
);
