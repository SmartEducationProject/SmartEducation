import React from 'react';
import routers from 'router/app';
import Header from '@/components/Header';
import './app.less';
import styles from './app.module.less';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className={styles['app']}>
      <Header />
      <main className={styles['main']}>
        <Routes>
          {routers.map((item) => {
            return <Route key={item.path} {...item}></Route>;
          })}
        </Routes>
      </main>
    </div>
  );
}

export default App;
