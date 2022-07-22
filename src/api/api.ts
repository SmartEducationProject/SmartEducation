import qs from 'qs';
import { axiosInstance } from 'utils/request';
import { ILogin, IResponse } from 'types';

export const Login = (params: Partial<ILogin>): Promise<IResponse> => {
  return axiosInstance.post('/login', qs.stringify(params)).then((res) => {
    return res.data;
  });
};
