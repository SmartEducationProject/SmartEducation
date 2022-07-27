import React, { useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Menu } from 'antd';
import type { MenuProps } from 'antd';
import styles from './index.module.less';
import studentIcon from 'assets/pic/student/student.png';
import upIcon from 'assets/pic/student/mine-up.png';

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

// TODO: 加载状态
const Mine = () => {
  const navigate = useNavigate();
  let location = useLocation();
  const menuKey = location.pathname.match(/(?<=\/student\/mine\/)(lib|daily|same)(?=\/?)/)?.[0] || 'lib'; // 如果不是lib或者daily或者same，则为undefined，当为undefined时直接渲染lib

  const changeMenu: MenuProps['onClick'] = (e) => navigate('/student/mine/' + e.key);

  return (
    <div className={styles['container']}>
      <header className={styles['mine-header']}>
        <img src={studentIcon} className={styles['student-img']} />
        <div className={styles['sentence-box']}>
          <h3>Hello,{'myy'}!</h3>
          <h4>美好的一天从看看我的考研情况开始~以下情况实时更新哦！</h4>
          <h5>今天是2022年7月7日，距离考研上岸还有{7}天</h5>
          <h5>距离初次登录，你已努力了{10}天</h5>
        </div>
        <img src={upIcon} className={styles['up-img']} />
      </header>

      <Menu mode="horizontal" items={items} selectedKeys={[menuKey]} onClick={changeMenu} className={styles['menu']} />

      <Outlet></Outlet>
    </div>
  );
};

export default Mine;
