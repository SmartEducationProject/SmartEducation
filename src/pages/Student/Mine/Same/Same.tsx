import React from 'react';
import { useQuery } from 'react-query';
import { useSame } from 'api/student';
import styles from './index.module.less';

const Same = () => {
  /** @description 接口调用 */
  const { data } = useSame();

  return (
    <div className={styles['same-container']}>
      <main className={styles['sentence-box']}>
        <p>去年与你复习进度相似的同学大概有{data?.total}人</p>
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
