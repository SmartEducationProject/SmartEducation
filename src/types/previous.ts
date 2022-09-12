export interface ICountAndRate {
  count: number;
  rate: number;
}

export interface IPreviousDetailCollege {
  id: number;
  name: string;
  preliminary: ICountAndRate;
  preliminarySuccess: ICountAndRate;
  admit: ICountAndRate;
}

export interface IPreviousDetail {
  year: number;
  colleges: IPreviousDetailCollege[];
  total: {
    preliminary: ICountAndRate;
    preliminarySuccess: ICountAndRate;
    admit: ICountAndRate;
  };
}

export interface IPreviousOverall {
  year: number;
  graduatesCount: number;
  postgraduateRecommendation: ICountAndRate;
  cqupt: {
    professional: {
      preliminary: ICountAndRate;
      preliminarySuccess: ICountAndRate;
      admit: ICountAndRate;
    };
    academic: {
      preliminary: ICountAndRate;
      preliminarySuccess: ICountAndRate;
      admit: ICountAndRate;
    };
    total: {
      admit: ICountAndRate;
    };
  };
  other: {
    preliminary: ICountAndRate;
    preliminarySuccess: ICountAndRate;
    admit: ICountAndRate;
  };
}
