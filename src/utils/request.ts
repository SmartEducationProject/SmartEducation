import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { message } from 'antd';

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: 'http://172.20.2.82:8080/',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});

// axios实例拦截请求
axiosInstance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    if (config.url?.startsWith('/teacher/login') || config.url?.startsWith('/student/login')) return config; // 登录不需要带token

    let token;
    if (config.url?.startsWith('/teacher')) token = sessionStorage.getItem('token');
    else if (config.url?.startsWith('/student')) token = JSON.parse(sessionStorage.getItem(`studentInfo`) as string).token;
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
    // console.log('AxiosResponse', response);

    if (response.data.data?.token && response.config.url?.startsWith('/teacher/login')) {
      localStorage.setItem('token', response.data.data.token);
    } else if (response.data.data?.token && response.config.url?.startsWith('/student/login')) {
      localStorage.setItem('studentInfo', response.data.data);
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
    console.log(error);
    if (response) {
      // 请求已发出，但是不在2xx的范围
      // showMessage(response.status);
      return Promise.reject(response.data);
    } else {
      message.error('网络连接异常,请稍后再试!');
    }
  }
);
