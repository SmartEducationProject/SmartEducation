export interface Person {
  key: number;
  name: string;
  type: string; // 学硕/专硕
  applyCollege: string;
  originalMajor: string; // 本科专业
  applyMajor: string; // 报考专业
  exam: string[]; // 考试科目
  word: string; // 寄语
  score: number; // 总分
  theoryScore: number; // 理论基础分
}
