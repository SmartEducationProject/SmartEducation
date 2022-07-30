import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './index.module.less';
import hatImg from 'assets/pic/student/college-hat.png';
import studentImg from 'assets/pic/student/student.png';
import useCqupt from '@/utils/useCqupt';

export default () => {
  const isCqupt = useCqupt();
  const navigate = useNavigate();

  return (
    <header className={styles['college-header']}>
      <img src={hatImg} className={styles['hat-img']} />
      <h5>
        以下是<span>{isCqupt ? '重庆邮电大学' : '其他院校'}</span>的考研数据，请查收！
      </h5>
      <div onClick={() => navigate('/student/mine')} className={styles['my-detail-btn']}>
        <img src={studentImg} className={styles['student-img']} />
        <h5>我的实时详情</h5>
      </div>
    </header>
  );
};
