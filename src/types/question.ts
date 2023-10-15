export interface IOption {
  optionId: number;
  value?: string;
  content: string;
}

export interface ISubQuestion {
  questionId: number;
  value: string;
  content: string;
}

export interface IQuestion {
  questionId: number;
  value?: string;
  content: string;
  composition?: boolean;
  multiple?: number;
  options?: IOption[];
  subQuestions?: ISubQuestion[];
}

// 老师查看学生的信息时，会根据问卷的内容进行反馈
export interface infoType {
  motivation: number;
  solo: number;

  startTime: number;
  dailyStartTime: number;
  dailyEndTime: number;

  place: number;

  mathStartTime: number;
  mathFirstRoundTime: number;
  mathSecondRoundTime: number;

  englishStartTime: number;

  politicsStartTime: number;

  specializedCoursesStartTime: number;
  computerNetworks: number;
  operatingSystems: number;
  computerComposition: number;

  noonTime: number;
  exerciseTime: number;
  [key: string]: string | number;
}
