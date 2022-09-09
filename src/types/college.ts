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

export interface Process {
  all: number;
  student: number;
  success: number;
  content: string;
}

export interface IComparison {
  process: Process[];
  suggestion: string;
}

export interface IOtherCollegeExperience {
  name: string;
  college: string;
  experience: string;
  teacher: string[];
  source: string[];
}

export interface ICquptExperience {
  name: string;
  college: string;
  math: string;
  english: string;
  politics: string;
  professional: string;
}
