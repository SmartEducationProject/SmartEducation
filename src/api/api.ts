import qs from 'qs';
import { axiosInstance } from 'utils/request';
import { ILogin, IResponse } from '@/types/request';

export const Login = (params: Partial<ILogin>): Promise<IResponse> => {
  return axiosInstance.post('/login', qs.stringify(params)).then((res) => {
    return res.data;
  });
};

export const UnSubmitted = (): Promise<IResponse> => {
  return axiosInstance.get('/teacher/unsubmitted/').then((res) => {
    console.log('res', res);

    return res.data;
  });
};
