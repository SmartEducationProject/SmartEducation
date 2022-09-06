import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { message } from 'antd';

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: import.meta.env.DEV ? '/api' : 'http://172.20.2.82:8080/',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});
// axios实例拦截响应
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    if (response.data.data.token && response.config.url?.startsWith('/teacher')) {
      sessionStorage.setItem('token', response.data.data.token);
    } else if (response.data.data.token && response.config.url?.startsWith('/student')) {
      sessionStorage.setItem('studentInfo', response.data.data);
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
    let token;
    if (config.url?.startsWith('/teacher')) {
      token = sessionStorage.getItem('token');
    } else if (config.url?.startsWith('/student')) {
      token = sessionStorage.getItem(`studentInfo.token`);
    }
    console.log('token', token);

    if (token) {
      // config.headers!.authorization = `Bearer ${token}`;
      // config.headers!.authorization = `${token}`;
      config.headers!.token = `${token}`;
    }
    return config;
  },
  (error: unknown) => {
    return Promise.reject(error);
  }
);
