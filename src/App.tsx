import React, { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import routes from 'router/app';
import Header from 'components/Header';
import styles from './app.module.less';
import './assets/style/font.less';
import FullPageWithLoading from 'components/FullPageWithLoading';
import { ErrorBoundary } from 'components/ErrorBoundary';
import FullPageErrorFallback from 'components/FullPageErrorFallback';
import { useLocation } from 'react-router-dom';
function App() {
  const elements = useRoutes(routes);

  const { pathname } = useLocation();

  const greenPath = ['/', '/student', '/student/', '/student/welcome', '/student/welcome/'];

  return (
    <div className={styles['app']} style={{ backgroundColor: greenPath.includes(pathname) ? 'rgb(126,189,71)' : 'white' }}>
      <Header />
      <ErrorBoundary fallbackRender={FullPageErrorFallback}>
        <Suspense fallback={<FullPageWithLoading />}>
          {pathname == '/' ? (
            <div className={styles['appMain']}>
              <main className={styles['main']}>{elements}</main>
            </div>
          ) : (
            <main className={styles['main']}>{elements}</main>
          )}
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App;
