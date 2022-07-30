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

export interface ISearch {
  name: string | null;
}
