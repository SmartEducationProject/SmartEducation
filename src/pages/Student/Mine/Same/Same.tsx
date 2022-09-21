import React from 'react';
import { useSame } from 'api/student';
import styles from './index.module.less';
import LabelLinePie from 'components/LabelLinePie';

const Same = () => {
  /** @description 接口调用 */
  const { data } = useSame();
  return (
    <div className={styles['same-container']}>
      <main>
        <article className={styles['sentence-box']}>
          <p>去年与你复习进度相似的同学大概有{data?.total}人</p>
          <div>
            <p>其中</p>
            <div>
              {data?.result?.map((item) => (
                <p key={item.name}>
                  {item.total}人报考{item.name}
                </p>
              ))}
            </div>
          </div>
        </article>
        <div>
          <LabelLinePie data={data?.result} />
        </div>
      </main>
      <footer />
    </div>
  );
};

export default Same;
