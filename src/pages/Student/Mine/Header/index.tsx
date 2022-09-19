import React, { memo } from 'react';
import getDays from 'utils/getDays';
import styles from './index.module.less';
import studentIcon from 'assets/pic/student/student.png';
import upIcon from 'assets/pic/student/mine-up.png';
import { useUser } from 'context/userContext';

const Header = memo(() => {
  /** @description 获取学生信息 */
  const { user } = useUser();
  const now = new Date();

  return (
    <header className={styles['mine-header']}>
      <img src={studentIcon} className={styles['student-img']} />
      <div className={styles['sentence-box']}>
        <h3>Hello,{user?.name}!</h3>
        <h4>美好的一天从看看我的考研情况开始~以下情况实时更新哦！</h4>
        <h5>
          今天是{now.getFullYear()}年{now.getMonth() + 1}月{now.getDate()}日，距离考研上岸还有{getDays(user?.examTime as string)}天
        </h5>
        <h5>距离初次登录，你已努力了{getDays(user?.firstLogin as string)}天</h5>
      </div>
      <img src={upIcon} className={styles['up-img']} />
    </header>
  );
});

export default Header;
