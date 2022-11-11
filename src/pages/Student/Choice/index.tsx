import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './index.module.less';
import peopleImg from 'assets/pic/student/people.png';

const Welcome = () => {
  const navigate = useNavigate();
  return (
    <div className={styles['container']}>
      <main>
        <img src={peopleImg} className={styles['people-img']} />
        <div className={styles['dialog-box']}>
          <h2>请选择你想要了解的信息吧~</h2>
          <div className={styles['btns']}>
            <button onClick={() => navigate('/student/hotCollege')}>考研热点院校</button>
            <button onClick={() => navigate('/student/previous')}>往届考研情况速览</button>
            <button onClick={() => navigate('/student/share')}>经验分享库</button>
            <button onClick={() => navigate('/student/leader')}>研究生导师信息</button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Welcome;
