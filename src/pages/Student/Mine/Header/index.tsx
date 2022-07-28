import React, { memo } from 'react';
import styles from './index.module.less';
import studentIcon from 'assets/pic/student/student.png';
import upIcon from 'assets/pic/student/mine-up.png';

const Header = memo(() => (
  <header className={styles['mine-header']}>
    <img src={studentIcon} className={styles['student-img']} />
    <div className={styles['sentence-box']}>
      <h3>Hello,{'myy'}!</h3>
      <h4>美好的一天从看看我的考研情况开始~以下情况实时更新哦！</h4>
      <h5>今天是2022年7月7日，距离考研上岸还有{7}天</h5>
      <h5>距离初次登录，你已努力了{10}天</h5>
    </div>
    <img src={upIcon} className={styles['up-img']} />
  </header>
));

export default Header;
