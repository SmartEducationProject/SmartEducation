import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './index.module.less';
import peopleImg from 'assets/pic/student/people2024.png';

const Welcome = () => {
  const navigate = useNavigate();
  return (
    <div className={styles['container']}>
      <main>
        <img src={peopleImg} className={styles['people-img']} />
        <div className={styles['dialog-box']}>
          <h2>请选择你想要了解的信息吧~</h2>
          <div className={styles['btns']}>
            <button onClick={() => navigate('/student/hotCollege')}></button>
            <button onClick={() => navigate('/student/previous')}></button>
            <button onClick={() => navigate('/student/share')}></button>
            <button onClick={() => navigate('/leader')}></button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Welcome;
