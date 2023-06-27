import { axiosInstance } from 'utils/request';
import { LeaderPageInfo, DetailInfo } from '@/types/leader';
/**
 *
 * @param 当前页
 * @returns List与page信息
 */
export const getLeaderList = ({ page }: { page: string }): Promise<LeaderPageInfo> => {
  return axiosInstance.get(`/leader/getPageTeacher/${page}`).then((res) => res.data.data);
};

/**
 * @returns 获取详情页
 */
export const getLeaderDetail = ({ sfrzm }: { sfrzm: string }): Promise<DetailInfo> => {
  return axiosInstance.get(`/leader/getTeacherDetail/${sfrzm}`).then((res) => res.data.data.supervisor);
};
/**
 *
 * @param 搜索关键词
 * @returns List
 */
export const searchLeaderList = ({ inquire, page }: { inquire: string; page: number }): Promise<LeaderPageInfo> => {
  let params = new FormData();
  params.append('inquire', inquire);
  params.append('page', page.toString());
  return axiosInstance.post('/leader/getTeacherByCondition', params).then((res) => res.data.data.teacher);
};

/**
 *
 * @param 导师id
 * @returns 成功
 */
export const addLeaderPv = ({ sfrzm }: { sfrzm: string }) => {
  return axiosInstance.get(`/leader/addTeacherPv2/${sfrzm}`).then((res) => res.data);
};
