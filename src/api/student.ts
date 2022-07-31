import { axiosInstance } from 'utils/request';
import processData from 'utils/processData';
import { ILogin, IResponse } from '@/types/Request';
/**
 *
 */
export const submit = (data: any) => {
  return axiosInstance.post('/student/predict', processData(data)).then((res) => res.data);
};

//学生登录接口
export const studentLogin = (params: any): Promise<IResponse> => {
  return axiosInstance.get('/student/login', { params }).then((res) => {
    return res.data;
  });
};
