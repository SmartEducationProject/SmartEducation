import React from 'react';
import styles from './index.module.less';
import iconImg from 'assets/pic/student/college-study-experience.png';

export default () => {
  return (
    <main className={styles['college-experience']}>
      <header>
        <h2>学长学姐经验</h2>
        <img src={iconImg} />
      </header>
    </main>
  );
};
