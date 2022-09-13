import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './index.module.less';
import peopleImg from 'assets/pic/student/welcome-people.png';

const Welcome = () => {
  const navigate = useNavigate();
  return (
    <div className={styles['container']}>
      <main>
        <img src={peopleImg} className={styles['people-img']} />
        <div className={styles['dialog-box']}>
          <h2>叮咚~</h2>
          <h2>你有一份调查报告需填写</h2>
          <p>Tips: 填写后你将得知关于考研学校的一些数据，包括概率和排名，为保证其准确性，问卷需要根据事实填写哦~</p>
          <button onClick={() => navigate('/student/questionnaire')} />
        </div>
      </main>
    </div>
  );
};

export default Welcome;
