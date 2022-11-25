export interface LeaderItem {
  avatar: string; // 头像
  sfrzm: string; // id
  xm: string; // 姓名
  title: string; // 职称
  rd: string; //研究方向
  pv?: number; // 浏览量
}

export interface DetailInfo extends LeaderItem {
  teamDevice: string;
  teamPro: string;
  teamWork: string;
  trip: string;

  pv: number;

  birth: string;
  contact: string;
  exercitation: string;
  graduateNeed: string;
  graduation: string;

  note?: '';
  personalHomepage?: '';
  qq?: string;
}

export interface LeaderList {
  items: LeaderItem[];
}

export interface LeaderPageInfo extends LeaderList {
  current: number;
  hasNext: boolean;
  hasPrevious: boolean;

  pages: number;
  size: number;
  total: number;
}
