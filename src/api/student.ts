import { useMutation, useQuery } from 'react-query';
import { message } from 'antd';
import { axiosInstance } from 'utils/request';
import processData from 'utils/processData';
import { ILogin, IResponse } from 'types/Request';
import useCqupt from '@/utils/useCqupt';
import { ISame, IDaily, ILib } from '@/types/mine';
import { IComparison, ICquptExperience, IOtherCollegeExperience, IPredict } from '@/types/college';
import { AxiosResponse } from 'axios';

type Response = { data: unknown; info: string; code: number };

/**
 * @description 学生登录接口
 * @returns {Promise}
 */
export const studentLogin = (params: any): Promise<IResponse> => {
  return axiosInstance.get('/student/login', { params }).then((res) => {
    return res.data;
  });
};

/**
 * @description 学生提交预测接口
 */
export const useSubmit = () => {
  return useMutation(async (data) => {
    message.loading({ content: '提交中...', key: 'submit' });
    const result = await axiosInstance.post(`/student/predict`, processData(data));
    afterRequest(
      result,
      () => {
        message.success({ content: '问卷提交成功！！', key: 'submit' });
      },
      () => {
        message.error({ content: `问卷提交失败: ${result.data.info}，请稍后重试！！`, key: 'submit' });
      }
    );
  });
};

/**
 * @description 获取同水平学生情况
 */
export const useSame = () =>
  useQuery<ISame>('same', () => axiosInstance.get('/student/same').then((res) => res.data.data), {
    staleTime: 1000 * 60 * 60, // 1小时
    cacheTime: 1000 * 60 * 60 * 2 // 2小时
  });

/**
 * @description 获取生活详情
 */
export const useDaily = () =>
  useQuery<IDaily>('daily', () => axiosInstance.get('/student/daily').then((res) => res.data.data), {
    staleTime: 1000 * 60 * 60, // 1小时
    cacheTime: 1000 * 60 * 60 * 2 // 2小时
  });

/**
 * @description 获取图书馆详情
 */
export const useLib = () =>
  useQuery<ILib>('lib', () => axiosInstance.get('/student/lib').then((res) => res.data.data), {
    staleTime: 1000 * 60 * 60, // 1小时
    cacheTime: 1000 * 60 * 60 * 2 // 2小时
  });

/**
 * @description 获取上岸概率详情
 */
export const usePredict = () => useQuery<IPredict>('lib', () => axiosInstance.post(`/student/hasPredict`).then((res) => res.data.data));

/**
 * @description 获取比较详情
 */
export const useCompare = () => {
  const isCqupt = useCqupt();
  return useQuery<IComparison>('compare', () => axiosInstance.get(`/student/college/process/${isCqupt ? 'cy' : 'wx'}`).then((res) => res.data.data));
};

/**
 * @description 获取经验详情
 */
export const useExperience = () => {
  const isCqupt = useCqupt();
  return useQuery<IOtherCollegeExperience[] | ICquptExperience[]>('experience', () => axiosInstance.get(`/student/experience/${isCqupt ? 'cy' : 'wx'}`).then((res) => res.data.data.list), {
    staleTime: 1000 * 60 * 60, // 1小时
    cacheTime: 1000 * 60 * 60 * 2 // 2小时
  });
};

/** @description 请求后的操作 */
function afterRequest(result: AxiosResponse<Response>, success?: () => void, error?: () => void) {
  if (result.status === 200 && result.data.code == 20000) {
    if (success) success();
    else message.success({ content: '操作成功' });
  } else {
    console.log('error');

    if (error) error();
    else message.error(`操作失败: ${result.data.info}`);
    throw new Error();
  }
}
