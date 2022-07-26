import { axiosInstance } from 'utils/request';
import processData from 'utils/processData';

/**
 *
 */
export const submit = (data: any) => {
  return axiosInstance.post('/student/predict', processData(data)).then((res) => res.data);
};
