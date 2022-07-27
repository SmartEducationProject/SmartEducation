import React, { useEffect } from 'react';
import { getLib } from 'api/student';
import useAsync from 'utils/useAsync';
import styles from './index.module.less';

interface ILib {
  yesterday: {
    period: [
      {
        from: string;
        to: string;
      },
      {
        from: string;
        to: string;
      }
    ];
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
  const { data, run, isLoading } = useAsync<ILib>();

  useEffect(() => {
    run(getLib());
  }, []);

  return (
    <div className={styles['lib-container']}>
      <div className={styles['sentence-box']}>
        <p>
          昨日在馆时间：
          {data?.yesterday?.period?.map((period, index) => (
            <span key={index}>
              {period.from}——{period.to}{' '}
            </span>
          ))}
        </p>
        <p>昨日在馆总时长：{data?.yesterday?.count}h</p>
        <p>最近一周在馆总时长：{data?.week?.count}h</p>
        <p>最近一月在馆总时长：{data?.month?.count}h</p>
      </div>

      <div></div>
    </div>
  );
};

export default Lib;
