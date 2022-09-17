import { IResponse, isAgreeType, ISearch } from 'types/Request';
import { axiosInstance } from 'utils/request';

//获取老师端未提交学生名单
export const UnSubmitted = (): Promise<IResponse> => {
  return axiosInstance.get('/teacher/unsubmitted').then((res) => {
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
    return res.data;
  });
};

//老师端的搜索请求
export const Search = (params: ISearch): Promise<IResponse> => {
  return axiosInstance.get('/teacher/search', { params }).then((res) => {
    return res.data;
  });
};

//导出Excel数据
export const exportData = (params: { order: number; method: number }): Promise<IResponse> => {
  return axiosInstance
    .get('/teacher/statistics/excel', {
      params
    })
    .then((res) => {
      return res.data;
    });
};

//老师登录接口
export const teacherLogin = (params: { sfrzh: string }): Promise<IResponse> => {
  return axiosInstance.get('/teacher/login', { params }).then((res) => {
    return res.data;
  });
};

//获取所有需审批的申请
export const getAllApply = (): Promise<IResponse> => {
  return axiosInstance.get('/teacher/getAll').then((res) => {
    return res.data;
  });
};

//是否同意审批
export const isAgreeApply = (params: isAgreeType): Promise<IResponse> => {
  return axiosInstance.get('/teacher/isAgree', { params }).then((res) => {
    return res.data;
  });
};

//增加申请
export const addApplication = (params: { description: string }): Promise<IResponse> => {
  return axiosInstance.get('/teacher/application', { params }).then((res) => {
    return res.data;
  });
};
