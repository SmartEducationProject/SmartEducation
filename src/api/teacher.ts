import { IResponse, isAgreeType, ISearch } from 'types/Request';
import { axiosInstance } from 'utils/request';
import { useQuery } from 'react-query';

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

//获取已授权老师信息接口
export const approvedTeacher = (): Promise<IResponse> => {
  return axiosInstance.get('/teacher/getHasAgree').then((res) => {
    return res.data;
  });
};

export interface infoType {
  motivation: number;
  solo: number;

  startTime: number;
  dailyStartTime: number;
  dailyEndTime: number;

  place: number;

  mathStartTime: number;
  mathFirstRoundTime: number;
  mathSecondRoundTime: number;

  englishStartTime: number;

  politicsStartTime: number;

  specializedCoursesStartTime: number;
  computerNetworks: number;
  operatingSystems: number;
  computerComposition: number;

  noonTime: number;
  exerciseTime: number;
  [key: string]: string | number;
}

interface resType {
  questionnaire: infoType;
}
// 获取学生信息
export const useStudentInfo = (stuId: number) => {
  return useQuery<resType>(['stuInfo', stuId], () => axiosInstance.get(`/teacher/getQuestionnaire?XH=${stuId}`).then((res) => res.data.data), {
    staleTime: 1000 * 60 * 60, // 1小时
    cacheTime: 1000 * 60 * 60 * 2 // 2小时
  });
};
