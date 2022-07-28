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
export const getSame = () => axiosInstance.get('/student/same').then((res) => res.data.data);

/**
 * @description 获取生活详情
 * @returns {Promise}
 */
export const getDaily = () => axiosInstance.get('/student/daily/test?sfrzh=AAA').then((res) => res.data.data);

/**
 * @description 获取图书馆详情
 * @returns {Promise}
 */
export const getLib = (): Promise<IResponse['data']> => axiosInstance.get('/student/lib').then((res) => res.data.data);
