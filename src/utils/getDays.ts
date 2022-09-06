/**
 * @description 判断某一天与当前日期相差的天数
 */
export default (time: string): number => {
  const now = new Date();
  const target = new Date(time);

  const days = Math.ceil((target.getTime() - now.getTime()) / 1000 / 60 / 60 / 24);

  return days > 0 ? days : -days;
};
