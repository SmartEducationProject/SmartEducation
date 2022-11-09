import React, { startTransition } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Menu, Button } from 'antd';
import type { MenuProps } from 'antd';
import Header from './Header';
import styles from './index.module.less';

const items: MenuProps['items'] = [
  {
    label: '图书馆',
    key: 'lib'
  },
  {
    label: '同水平同学考研方向及结果',
    key: 'same'
  },
  {
    label: '返回选择页面',
    key: '/student/choice'
  }
];

const Mine = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const cpnName = location.pathname.split('/').pop() as string;
  const menuKey = items.find((item) => item?.key === cpnName) ? cpnName : 'lib'; // 如果不是lib或者daily或者same，则为undefined，当为undefined时直接渲染lib

  /** @description 当要切换到不同页面才会切换路由 */
  const changeMenu: MenuProps['onClick'] = (e) => {
    // 准备新UI时，展示旧UI 参考：https://zh-hans.reactjs.org/docs/code-splitting.html#avoiding-fallbacks

    if (e.key === '/student/choice') {
      navigate(e.key);
      return;
    }
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
