import React from 'react';
import RankPieDoughnut from 'components/RankPieDoughnut';
import { useLib } from 'api/student';
import styles from './index.module.less';

const Lib = () => {
  /** @description 接口调用 */
  const { data } = useLib();

  /** @description 获得在馆时间段展示字符串 */
  const periodFormat = data?.yesterday?.period?.map((period) => `${period.from.split(' ')[1]}-${period.to.split(' ')[1]}`)?.join(', ');

  return (
    <div className={styles['lib-container']}>
      <div className={styles['sentence-box']}>
        <p>昨日在馆时间：{periodFormat || '无'}</p>
        <p>昨日在馆总时长：{(data?.yesterday?.count as number)?.toFixed(1) || 0}h</p>
        <p>最近一周在馆总时长：{(data?.week?.count as number)?.toFixed(1) || 0}h</p>
        <p>最近一月在馆总时长：{(data?.month?.count as number)?.toFixed(1) || 0}h</p>
      </div>

      <div className={styles['pie-box']}>
        <RankPieDoughnut
          index={0}
          name={'昨日最早到馆时间排名'}
          rank={data?.yesterday?.earliestRank as number}
          exceed={((data?.yesterday?.totalStudent as number) - (data?.yesterday?.earliestRank as number)) as number}
        />
        <RankPieDoughnut
          index={1}
          name={'昨日在馆总时长排名'}
          rank={data?.yesterday?.countRank as number}
          exceed={((data?.yesterday?.totalStudent as number) - (data?.yesterday?.countRank as number)) as number}
        />
        <RankPieDoughnut
          index={2}
          name={'最近一周在馆总时长排名'}
          rank={data?.week?.countRank as number}
          exceed={((data?.yesterday?.totalStudent as number) - (data?.week?.countRank as number)) as number}
        />
        <RankPieDoughnut
          index={3}
          name={'最近一月总时长排名'}
          rank={data?.month?.countRank as number}
          exceed={((data?.yesterday?.totalStudent as number) - (data?.month?.countRank as number)) as number}
        />
      </div>
    </div>
  );
};

export default Lib;
