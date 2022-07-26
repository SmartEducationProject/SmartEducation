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
  options: IOption[];
  subQuestions?: ISubQuestion[];
}
