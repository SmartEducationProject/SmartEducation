import { IResponse } from '@/types/Request';
import { axiosInstance } from 'utils/request';
/**
 * @description 登录这种统一接口放在api.ts文件中
 */
export const Login = (): Promise<IResponse> => {
  return axiosInstance.get('/tyrzm/getTyrzm').then((res) => {
    return res.data;
  });
};
