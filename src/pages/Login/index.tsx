import React, { FunctionComponent } from 'react';
import styles from './index.module.less';
import Person from '@/assets/login/person.png';
import Border from '@/assets/login/border.png';
import Begin from '@/assets/login/begin.png';
const Login: FunctionComponent = () => {
  return (
    <div className={styles['login']}>
      <div className={styles['login-content']}>
        <img src={Person} alt="" />
        <div className={styles['login-right']}>
          <div className={styles['login-title']}>
            <p>叮咚~</p>
            <p>你有一份调查报告需要填写</p>
            <p>Tips:填写后你将得知关于考研学校的一些数据，包括概率和排名，为保证其准确性，问卷需要根据事实填写</p>
          </div>
          <img src={Begin} alt="" />
        </div>
      </div>
    </div>
  );
};
export default Login;
