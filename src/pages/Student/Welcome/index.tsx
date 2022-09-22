import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './index.module.less';
import peopleImg from 'assets/pic/student/welcome-people.png';
import { useUser } from 'context/userContext';
import { message } from 'antd';

const Welcome = () => {
  const navigate = useNavigate();
  const { user } = useUser();
  const startTime = new Date(user?.startTime || 0);
  const endTime = new Date(user?.endTime || 0);

  const goto = () => {
    const now = new Date();
    console.log(user?.startTime, user?.endTime);
    if (startTime < now && now < endTime) {
      navigate('/student/questionnaire');
    } else if (now < startTime) {
      message.error('填写问卷调查还没开始~');
    } else {
      message.error('填写问卷调查时间已过了~');
    }
  };

  return (
    <div className={styles['container']}>
      <main>
        <img src={peopleImg} className={styles['people-img']} />
        <div className={styles['dialog-box']}>
          <h2>叮咚~</h2>
          <h2>你有一份调查报告需填写</h2>
          <p>
            Tips: 填写后你将得知关于考研学校的一些数据，包括概率和排名，为保证其准确性，<span style={{ color: 'red', fontWeight: 'bold' }}>调查问卷只能填写一次，</span> 问卷需要根据事实填写哦~
          </p>
          <button onClick={goto} />
          <button onClick={() => navigate('/student/previous')} />
        </div>
      </main>
    </div>
  );
};

export default Welcome;
