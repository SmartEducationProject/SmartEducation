import React, { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import routes from 'router/app';
import Header from 'components/Header';
import styles from './app.module.less';
import FullPageWithLoading from 'components/FullPageWithLoading';
import { ErrorBoundary } from 'components/ErrorBoundary';
import FullPageErrorFallback from 'components/FullPageErrorFallback';

function App() {
  const elements = useRoutes(routes);

  return (
    <div className={styles['app']}>
      <Header />
      <ErrorBoundary fallbackRender={FullPageErrorFallback}>
        <Suspense fallback={<FullPageWithLoading />}>
          <main className={styles['main']}>{elements}</main>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App;
