import React, { startTransition } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Menu } from 'antd';
import type { MenuProps } from 'antd';
import Header from './Header';
import styles from './index.module.less';

const items: MenuProps['items'] = [
  {
    label: '图书馆',
    key: 'lib'
  },
  {
    label: '生活',
    key: 'daily'
  },
  {
    label: '同水平同学考研方向及结果',
    key: 'same'
  }
];

const Mine = () => {
  const navigate = useNavigate();
  let location = useLocation();
  const menuKey = location.pathname.match(/(?<=\/student\/mine\/)(lib|daily|same)(?=\/?)/)?.[0] || 'lib'; // 如果不是lib或者daily或者same，则为undefined，当为undefined时直接渲染lib

  /** @description 当要切换到不同页面才会切换路由 */
  const changeMenu: MenuProps['onClick'] = (e) => {
    // 准备新UI时，展示旧UI 参考：https://zh-hans.reactjs.org/docs/code-splitting.html#avoiding-fallbacks
    startTransition(() => {
      e.key !== menuKey && navigate('/student/mine/' + e.key);
    });
  };

  return (
    <div className={styles['container']}>
      <Header />

      <Menu mode="horizontal" items={items} selectedKeys={[menuKey]} onClick={changeMenu} className={styles['menu']} />

      <main>
        <Outlet />
      </main>

      <footer />
    </div>
  );
};

export default Mine;
