import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { getDaily } from 'api/student';
import styles from './index.module.less';
import RankPieDoughnut from 'components/RankPieDoughnut';

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
        <p>昨日最早出寝时间：{data?.yesterday?.leave_room?.split(' ')[1]}</p>
        <p>昨日最晚归寝时间：{data?.yesterday?.back_room?.split(' ')[1]}</p>
      </div>

      <div className={styles['pie-box']}>
        <RankPieDoughnut
          index={0}
          name={'昨日最早出寝时间排名'}
          rank={data?.yesterday?.earliestRank as number}
          exceed={((data?.yesterday?.leaveTotal as number) - (data?.yesterday?.earliestRank as number)) as number}
        />
        <RankPieDoughnut
          index={1}
          name={'昨日最后归寝时间排名'}
          rank={data?.yesterday?.latestRank as number}
          exceed={((data?.yesterday?.backTotal as number) - (data?.yesterday?.latestRank as number)) as number}
        />
        <RankPieDoughnut
          index={2}
          name={'最近一周最早出寝时间排名'}
          rank={data?.week?.earliestRank as number}
          exceed={((data?.yesterday?.leaveTotal as number) - (data?.week?.earliestRank as number)) as number}
        />
        <RankPieDoughnut
          index={3}
          name={'最近一周最后归寝时间排名'}
          rank={data?.week?.latestRank as number}
          exceed={((data?.week?.latestRank as number) - (data?.week?.latestRank as number)) as number}
        />
      </div>
    </div>
  );
};

export default Daily;
