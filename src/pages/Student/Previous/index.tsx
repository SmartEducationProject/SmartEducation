import React from 'react';
import hatImg from 'assets/pic/student/college-hat.png';
import Overall from './Overall';
import styles from './index.module.less';
import Experience from './Experience';
import Detail from './Detail';

const Previous = () => {
  const year = 2022;
  return (
    <div className={styles['container']}>
      <header className={styles['header-container']}>
        <img src={hatImg} className={styles['hat-img']} />
        <h5>
          以下是<span>{year}届</span>学生考研数据参考，加油哦~
        </h5>
      </header>

      <main>
        <Overall year={year} />
        <Detail year={year} />
        <Experience />
      </main>

      <footer />
    </div>
  );
};
export default Previous;
