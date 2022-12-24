export interface ISame {
  total: number;
  result: {
    total: number;
    success: number;
    name: string;
  }[];
}

export interface IShow {
  item: string;
}

export interface IDaily {
  yesterday: {
    leave_room: string;
    back_room: string;
    earliestRank: number;
    leaveTotal: number;
    backTotal: number;
    latestRank: number;
  };
  week: {
    earliestRank: number;
    leaveTotal: number;
    backTotal: number;
    latestRank: number;
  };
}

export interface ILib {
  yesterday: {
    period: {
      from: string;
      to: string;
    }[];
    count: number;
    countRank: number;
    earliestRank: number;
    totalStudent: number;
  };
  week: {
    count: number;
    countRank: number;
    totalStudent: number;
  };
  month: {
    count: number;
    countRank: number;
    totalStudent: number;
  };
}
