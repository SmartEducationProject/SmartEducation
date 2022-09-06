import React from 'react';
import { Spin } from 'antd';
import styles from './index.module.less';

export default () => {
  return (
    <div className={styles['container']}>
      <Spin />
    </div>
  );
};
