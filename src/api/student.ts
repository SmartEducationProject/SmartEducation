import { axiosInstance } from 'utils/request';
import processData from 'utils/processData';
import { IResponse } from 'types/request';

/**
 *
 */
export const submit = (data: any) => {
  return axiosInstance.post('/student/predict', processData(data)).then((res) => res.data);
};

/**
 * @description 获取同水平学生情况
 * @returns {Promise}
 */
export const getSame = () => axiosInstance.get('/student/same?sfrzh=AAA').then((res) => res.data.data);
// export const getSame = () => axiosInstance.get('/student/same').then((res) => res.data);

/**
 * @description 获取生活详情
 * @returns {Promise}
 */
export const getDaily = () => axiosInstance.get('/student/daily/test?sfrzh=AAA').then((res) => res.data.data);
// export const getDaily = () => axiosInstance.get('/student/daily').then((res) => res.data);

/**
 * @description 获取图书馆详情
 * @returns {Promise}
 */
export const getLib = (): Promise<IResponse['data']> => axiosInstance.get('/student/lib/test?sfrzh=AAA').then((res) => res.data.data);
// export const getLib = () => axiosInstance.get('/student/lib').then((res) => res.data);

/**
 * @description 获取上岸概率详情
 * @returns {Promise}
 */
export const getPredict = (): Promise<IResponse['data']> =>
  axiosInstance
    .post(
      '/student/hasPredictTest?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJjcXVwdCIsImlhdCI6MTY1OTEwMzczNiwiZXhwIjoxNjU5NDYwMTM2LCJzZnJ6aCI6IkFBQSJ9.ZxSQJ2x_uoNjpgjzhoaD1A4gEJEGgSBuYzN3QpfBVUw'
    )
    .then((res) => res.data.data);
// export const getLib = () => axiosInstance.get('/student/lib').then((res) => res.data);
