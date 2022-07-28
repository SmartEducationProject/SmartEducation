import qs from 'qs';
import { ILogin, IResponse, ISearch } from 'types/Request';
import { axiosInstance } from 'utils/request';

//获取老师端未提交学生名单
export const UnSubmitted = (): Promise<IResponse> => {
  return axiosInstance.get('/teacher/unsubmitted').then((res) => {
    //   console.log('res', res);
    return res.data;
  });
};

//获取老师端学生提交情况
export const SubmittedCond = (): Promise<IResponse> => {
  return axiosInstance.get('/teacher/submit').then((res) => {
    return res.data;
  });
};

//获取老师端考研概率统计情况
export const Statistics = (): Promise<IResponse> => {
  return axiosInstance.get('/teacher/statistics').then((res) => {
    console.log('resstatistics', res);
    return res.data;
  });
};

//老师端的搜索请求
export const Search = (params: ISearch): Promise<IResponse> => {
  return axiosInstance
    .post('/teacher/search', {
      params: params
    })
    .then((res) => {
      console.log('ressearch', res);

      return res.data;
    });
};
