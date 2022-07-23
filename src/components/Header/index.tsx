import React from 'react';
import styles from './index.module.less';

const Header = () => {
  return (
    <header className={styles['header']}>
      <span>CQUPT2022考研预测</span>
      <div className={styles['exit-btn']}></div>
    </header>
  );
};

export default Header;
