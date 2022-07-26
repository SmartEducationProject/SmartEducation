import questionnaire from 'data/questionnaire';

/**
 * @description 处理从表格获取的数据变为后端需要的格式，主要是处理多选那一块的数据，因为后端需要的数据过于奇怪，为了避免影响表格本身的操作，故把这一块的操作解耦到这里了
 */
export default (rawData: any) => {
  const { options: mathTeacher } = questionnaire[14];
  const { options: englishTeacher } = questionnaire[15];
  const { options: politicsTeacher } = questionnaire[16];
  const changeQuestion = ['', 'linear', 'Probability', 'english', 'politics'];
  const newData: any = {};

  for (let key in rawData) {
    if (!changeQuestion.includes(key)) {
      newData[key] = rawData[key];
    }
  }

  mathTeacher.forEach((teacher, index) => (newData['' + teacher.value] = rawData[''].includes(index) ? 1 : 0));
  mathTeacher.forEach((teacher, index) => (newData['linear_' + teacher.value] = rawData['linear'].includes(index) ? 1 : 0));
  mathTeacher.forEach((teacher, index) => (newData['Probability_' + teacher.value] = rawData['Probability'].includes(index) ? 1 : 0));
  englishTeacher.forEach((teacher, index) => (newData['english_' + teacher.value] = rawData['english'].includes(index) ? 1 : 0));
  politicsTeacher.forEach((teacher, index) => (newData['politics_' + teacher.value] = rawData['politics'].includes(index) ? 1 : 0));

  /** @description 填写XH(学号)和SFRZH（身份认证码）字段 因为算法那边要求有这两个字段 但其实这两个字段后端是会重新赋值的 所以后期上线这里传空字符串即可 */
  newData['XH'] = '';
  newData['SFRZH'] = 'AAA';

  return newData;
};
