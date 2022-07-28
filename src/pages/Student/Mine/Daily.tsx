import React, { useEffect, useState } from 'react';
import { getDaily } from 'api/student';
import useAsync from 'utils/useAsync';
import styles from './index.module.less';
import { useQuery } from 'react-query';

interface IDaily {
  yesterday: {
    leave_room: string;
    back_room: string;
    earliestRank: number;
    leaveTotal: number;
    backTotal: number;
    latestRank: number;
  };
  week: {
    earliestRank: number;
    leaveTotal: number;
    backTotal: number;
    latestRank: number;
  };
}

const Daily = () => {
  const { data } = useQuery<IDaily>('daily', getDaily); // 查询

  return (
    <div className={styles['daily-container']}>
      <div className={styles['sentence-box']}>
        <p>昨日最早出寝时间：{data?.yesterday?.leave_room}</p>
        <p>昨日最晚归寝时间：{data?.yesterday?.back_room}</p>
      </div>
    </div>
  );
};

export default Daily;
