import qs from 'qs';
import { axiosInstance } from 'utils/request';
import { ILogin, IResponse } from 'types/Request';

/**
 * 登录这种统一接口就直接放在api.ts文件中了
 *
 *
 */

export const Login = (params: Partial<ILogin>): Promise<IResponse> => {
  return axiosInstance.post('/login', qs.stringify(params)).then((res) => {
    return res.data;
  });
};
