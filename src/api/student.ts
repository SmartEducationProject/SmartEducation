import { axiosInstance } from 'utils/request';
import processData from 'utils/processData';

/**
 *
 */
export const submit = (data: any) => {
  return axiosInstance.post('/student/predict', processData(data)).then((res) => res.data);
};

/**
 * @description 获取同水平学生情况
 * @returns {Promise<any>}
 */
export const getSame = (): Promise<any> => axiosInstance.get('/student/same').then((res) => res.data);
