import React from 'react';
import { useQuery } from 'react-query';
import { getSame } from 'api/student';
import styles from './index.module.less';

interface ISame {
  total: number;
  result: {
    total: number;
    success: number;
    name: string;
  }[];
}

const Same = () => {
  /** @description 接口调用 */
  const { data } = useQuery<ISame>('same', getSame, {
    staleTime: 1000 * 60 * 60, // 1小时
    cacheTime: 1000 * 60 * 60 * 2 // 2小时
  });

  return (
    <div className={styles['same-container']}>
      <main className={styles['sentence-box']}>
        <p>去年同你水平相似的同学大概有{data?.total}人</p>
        <div>
          <p>其中</p>
          <div>
            {data?.result?.map((item) => (
              <p key={item.name}>
                {item.total}人报考{item.name}——{item.success}人上岸
              </p>
            ))}
          </div>
        </div>
      </main>
      <footer />
    </div>
  );
};

export default Same;
