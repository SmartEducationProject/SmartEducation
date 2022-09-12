import React from 'react';
import styles from './index.module.less';
import hatImg from 'assets/pic/student/college-hat.png';

interface HeaderProps {
  year: number;
}

const Header = ({ year }: HeaderProps) => {
  return (
    <header className={styles['container']}>
      <img src={hatImg} className={styles['hat-img']} />
      <h5>
        以下是<span>{year}届</span>学生考研数据参考，加油哦~
      </h5>
    </header>
  );
};

export default Header;
