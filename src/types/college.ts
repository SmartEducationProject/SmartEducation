export interface ICollege {
  englishName: string;
  rate: number;
  name: string;
  rank: number;
  description: string[];
  id: number;
  logo: string;
}

export interface IPredict {
  college: ICollege[];
  count: number;
}

export interface IComparison {
  process: {
    all: number;
    student: number;
    success: number;
    content: string;
  }[];
  suggestion: string;
}
