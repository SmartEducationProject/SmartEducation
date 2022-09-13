export interface ILogin {
  nickname: string;
  password: string;
  phone: string;
  email: string;
  username: string;
}

export interface IResponse {
  code: number | string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
  info: string;
}

export interface ISearch {
  name: string | null;
}
