import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './index.module.less';
import peopleImg from 'assets/pic/student/choice-people.png';

const Welcome = () => {
  const navigate = useNavigate();
  return (
    <div className={styles['container']}>
      <main>
        <img src={peopleImg} className={styles['people-img']} />
        <div className={styles['dialog-box']}>
          <h2>请选择你想要了解的信息吧~</h2>
          <button onClick={() => navigate('/student/college/1')} />
          <button onClick={() => navigate('/student/college/2')} />
          <button onClick={() => navigate('/student/previous')} />
        </div>
      </main>
    </div>
  );
};

export default Welcome;
