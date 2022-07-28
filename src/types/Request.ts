//一个请求的例子
/**
 * @description: 用户登录
 * @params {ILogin} params
 * @return {Promise}
 */

export interface ILogin {
  nickname: string;
  password: string;
  phone: string;
  email: string;
  username: string;
}
export interface IResponse {
  code: number | string;
  data: any;
  info: string;
}
