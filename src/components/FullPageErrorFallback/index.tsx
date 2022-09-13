import React from 'react';
import { Result } from 'antd';
import styles from './index.module.less';

const FullPageErrorFallback = ({ error }: { error: Error | null }) => {
  console.log('error!!!!!!!!!!!!!!', error);

  return (
    <div className={styles['container']}>
      <Result status={404} title="出错啦，请稍后重试~" subTitle={error?.message} />
    </div>
  );
};

export default FullPageErrorFallback;
