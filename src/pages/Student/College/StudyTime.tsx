import React from 'react';
import styles from './index.module.less';
import iconImg from 'assets/pic/student/college-study-time.png';
import BarChart from 'components/BarChart';

export default () => {
  return (
    <div className={styles['college-time']}>
      <header>
        <h2>学习时长</h2>
        <img src={iconImg} />
      </header>

      <main>
        <div className={styles['bar-box']}>
          <BarChart data={[1, 2, 30]} />
          <BarChart data={[1, 2, 10]} />
          <BarChart data={[5, 2, 3]} />
          <BarChart data={[10, 2, 3]} />
        </div>
      </main>
    </div>
  );
};
