import React from 'react';
import RankPieDoughnut from 'components/RankPieDoughnut';
import { useDaily } from 'api/student';
import styles from './index.module.less';

const Daily = () => {
  /** @description 接口调用 */
  const { data } = useDaily();

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
