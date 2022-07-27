import React from 'react';
import styles from './index.module.less';
import iconImg from 'assets/pic/student/college-study-process.png';
import PieDoughnut from 'components/PieDoughnut';

export default () => {
  return (
    <div className={styles['college-process']}>
      <header>
        <h2>学习进度</h2>
        <img src={iconImg} />
      </header>

      <main>
        <div className={styles['pie-box']}>
          <PieDoughnut index={0} subject="数学" require={10} complete={3} />
          <PieDoughnut index={1} subject="英语" require={5} complete={3} />
          <PieDoughnut index={2} subject="政治" require={10} complete={10} />
          <PieDoughnut index={3} subject="专业课" require={7} complete={3} />
        </div>
      </main>
    </div>
  );
};
