import { useParams } from 'react-router-dom';

/**
 * @description 判断student/college中要展示的重邮还是其他院校
 */
export default () => {
  const isCqupt = useParams().isCqupt === '1';

  return isCqupt;
};
