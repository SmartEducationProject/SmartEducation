/**
 * @description 因为Safari无法解析yyyy-MM-dd HH:mm:ss的时间格式，故利用这个函数将后端返回的yyyy-MM-dd HH:mm:ss转换成yyyy/MM/dd HH:mm:ss
 * @description 以后可以与后端协商将所有时间格式转换成yyyy/MM/dd HH:mm:ss
 */
export default (time: string) => time.replace(/-/g, '/');
