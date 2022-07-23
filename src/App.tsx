import React from 'react';
import routers from 'router';
import Header from '@/components/Header';
import 'antd/dist/antd.css';
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
            return <Route path={item.path} key={item.key} element={<item.component />}></Route>;
          })}
        </Routes>
      </main>
    </div>
  );
}

export default App;
