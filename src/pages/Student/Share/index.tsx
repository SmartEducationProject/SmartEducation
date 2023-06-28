import React from 'react';
import styles from './index.module.less';
import png from '../../../assets/pic/student/college-study-experience.png';
import Experience from '../Previous/Experience';

export default function Share() {
  return (
    <>
      <header className={styles['header']}>
        <h2>学长学姐考研经验</h2>
        <img src={png} alt={'icon'} />
      </header>

      <div className={styles['box']}>
        <Experience isTitleShow={false} />
      </div>
    </>
  );
}
