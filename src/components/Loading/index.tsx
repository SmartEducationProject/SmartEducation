import React from 'react';
import styles from './index.module.less';
export default function Loading() {
  return (
    <div className={styles['loading']}>
      <div className={styles['circle']}></div>
      <div className={styles['loading-text']}>加载中...</div>
    </div>
  );
}
