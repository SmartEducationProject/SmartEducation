import React, { useEffect, useState } from 'react';
import { getDaily } from 'api/student';
import useAsync from 'utils/useAsync';
import styles from './index.module.less';

interface IDaily {
  yesterday: {
    leave: string;
    back: string;
    earliestRank: number;
    latestRank: number;
    leaveTotal: number;
    backTotal: number;
  };
  week: {
    earliestRank: number;
    latestRank: number;
    leaveTotal: number;
    backTotal: number;
  };
}

const Daily = () => {
  const { data, run, isLoading } = useAsync<IDaily>();

  useEffect(() => {
    run(getDaily());
  }, []);

  return (
    <div className={styles['daily-container']}>
      <div className={styles['sentence-box']}>
        <p>昨日最早出寝时间：{data?.yesterday?.leave}</p>
        <p>昨日最晚归寝时间：{data?.yesterday?.back}</p>
      </div>
    </div>
  );
};

export default Daily;
