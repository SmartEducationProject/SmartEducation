import { axiosInstance } from 'utils/request';
import processData from 'utils/processData';
import { ILogin, IResponse } from '@/types/Request';
import qs from 'qs';

/**
 *
 */
export const submit = (data: any) => {
  return axiosInstance.post('/student/predict', processData(data)).then((res) => res.data);
};

//学生登录接口
export const studentLogin = (params: any): Promise<IResponse> => {
  return axiosInstance.get('/student/login', { params }).then((res) => {
    console.log('studentLogin', res);

    return res.data;
  });
};
