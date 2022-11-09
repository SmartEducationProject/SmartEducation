import React, { lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import SignIn from './pages/signin';
import AuthRoute from './router/AuthRoute';
import { teacherRoutes } from './router/teacherRoutes';
import { isPredictRoutes } from './router/isPredictRoutes';
import Header from 'components/Header';
import FullPageWithLoading from 'components/FullPageWithLoading';
import { ErrorBoundary } from 'components/ErrorBoundary';
import FullPageErrorFallback from 'components/FullPageErrorFallback';
import styles from './app.module.less';
import './app.less';

import useMulRoute from './utils/useMulRoute';
const Student = lazy(() => import('pages/Student'));
const Teacher = lazy(() => import('pages/Teacher'));

function App() {
  const { pathname } = useLocation();
  const greenPath = ['/', '/student', '/student/', '/student/choice', '/student/welcome', '/student/welcome/'];
  return (
    <div className={styles['app']} style={{ backgroundColor: greenPath.includes(pathname) ? 'rgb(126,189,71)' : 'white' }}>
      <Header />
      <ErrorBoundary fallbackRender={FullPageErrorFallback}>
        <Suspense fallback={<FullPageWithLoading />}>
          <main className={styles['main']}>
            <Routes>
              <Route path="/*" element={<SignIn />}></Route>
              <Route path="/student" element={<Student />}>
                {isPredictRoutes.map((route) => {
                  const { key, path } = route;
                  return (
                    <Route key={key} path={path} element={<AuthRoute {...route}>{route.element}</AuthRoute>}>
                      {/* {route.children
                        ? route.children.map((item) => {
                            const { key, path } = item;
                            return <Route key={key} path={path} element={<AuthRoute {...item}>{route.element}</AuthRoute>} />;
                          })
                        : null} */}
                      {route.children ? useMulRoute(route) : null}
                    </Route>
                  );
                })}
              </Route>
              <Route path="/teacher" element={<Teacher />}>
                {teacherRoutes.map((route) => {
                  const { key, path, ...otherProps } = route;
                  return (
                    <Route
                      key={key}
                      path={path}
                      element={
                        <AuthRoute key={key} path={path} {...otherProps}>
                          {route.element}
                        </AuthRoute>
                      }
                    ></Route>
                  );
                })}
              </Route>
            </Routes>
          </main>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App;
