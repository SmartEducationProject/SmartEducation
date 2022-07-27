import React from 'react';
import routes from 'router/app';
import Header from '@/components/Header';
import './app.less';
import styles from './app.module.less';
import { Route, Routes, useRoutes } from 'react-router-dom';

function App() {
  const elements = useRoutes(routes);
  console.log(elements);

  return (
    <div className={styles['app']}>
      <Header />
      <main className={styles['main']}>{elements}</main>
    </div>
  );
}

export default App;
