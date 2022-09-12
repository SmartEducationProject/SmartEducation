import React from 'react';
import Header from './Header';
import Overall from './Overall';
import styles from './index.module.less';
import Experience from './Experience';
import Detail from './Detail';

const Previous = () => {
  const year = 2022;
  return (
    <div className={styles['container']}>
      <Header year={year} />
      <main>
        <Overall year={year} />
        <Detail year={year} />
        <Experience />
      </main>

      <footer />
    </div>
  );
};
export default Previous;
