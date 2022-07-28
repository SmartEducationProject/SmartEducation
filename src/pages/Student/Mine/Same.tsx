import React, { useEffect } from 'react';
import { getSame } from 'api/student';
import styles from './index.module.less';
import useAsync from 'utils/useAsync';
import { useQuery } from 'react-query';

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
  const { data } = useQuery<ISame>('same', getSame);

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
