import React, { useEffect } from 'react';
import { useQuery } from 'react-query';
import { getLib } from 'api/student';
import styles from './index.module.less';

interface ILib {
  yesterday: {
    period: {
      from: string;
      to: string;
    }[];
    count: number;
    countRank: number;
    earliestRank: number;
    totalStudent: number;
  };
  week: {
    count: number;
    countRank: number;
    totalStudent: number;
  };
  month: {
    count: number;
    countRank: number;
    totalStudent: number;
  };
}

const Lib = () => {
  /** @description 接口调用 */
  const { data } = useQuery<ILib>('lib', getLib);

  /** @description 获得在馆时间段展示字符串 */
  const periodFormat = data?.yesterday?.period?.map((period) => `${period.from.split(' ')[1]}-${period.to.split(' ')[1]}`)?.join(', ');

  return (
    <div className={styles['lib-container']}>
      <div className={styles['sentence-box']}>
        <p>昨日在馆时间：{periodFormat}</p>
        <p>昨日在馆总时长：{(data?.yesterday?.count as number)?.toFixed(2)}h</p>
        <p>最近一周在馆总时长：{(data?.week?.count as number)?.toFixed(2)}h</p>
        <p>最近一月在馆总时长：{(data?.month?.count as number)?.toFixed(2)}h</p>
      </div>

      <div></div>
    </div>
  );
};

export default Lib;
