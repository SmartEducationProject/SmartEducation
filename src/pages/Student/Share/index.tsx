import React from 'react';
import styles from './index.module.less';
import { Outlet } from 'react-router-dom';
import png from '../../../assets/pic/student/college-study-experience.png';

export default function Share() {
  return (
    <>
      <header className={styles['header']}>
        <h2>学长学姐经验</h2>
        <img src={png} alt={'icon'} />
      </header>

      <Outlet />
    </>
  );
}
