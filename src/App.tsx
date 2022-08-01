import React, { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import routes from 'router/app';
import Header from 'components/Header';
import styles from './app.module.less';
import FullPageWithLoading from 'components/FullPageWithLoading';

function App() {
  const a: any = undefined;

  const elements = useRoutes(routes);
  console.log(elements);

  return (
    <div className={styles['app']}>
      <Header />
      <Suspense fallback={<FullPageWithLoading />}>
        <main className={styles['main']}>{elements}</main>
      </Suspense>
    </div>
  );
}

export default App;
