import React, { useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useUser } from 'context/userContext';
import styles from './index.module.less';
import { SwapOutlined, LeftOutlined, RightOutlined, UserOutlined } from '@ant-design/icons';

const Header = () => {
  const navigator = useNavigate();
  const location = useLocation();
  const { user, setUser } = useUser();
  const headerRef = useRef<HTMLElement | null>(null);
  const headerSpan = useRef<HTMLElement | null>(null);
  const headerDiv = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    if (location.pathname === '/' || location.pathname === '/student' || location.pathname === '/student/questionnaire') {
      headerRef.current?.classList.remove(styles['header-white']);
      headerRef.current?.classList.add(styles['header-green']);
    } else {
      headerRef.current?.classList.remove(styles['header-green']);
      headerRef.current?.classList.add(styles['header-white']);
    }
  }, [location.pathname]);

  /***
   * @description: 点击头部推出按钮，返回道登录页，同时清除缓存
   * @param {}
   * @return:void
   */
  const exitBtn = () => {
    localStorage.clear();
    setUser(null);
    navigator('/');
  };
  const changeBtn = () => {
    const a = document.createElement('a');
    a.setAttribute('referrerpolicy', 'no-referrer');
    a.setAttribute('href', 'http://172.20.2.82:8080/tyrzm/logoutCustom');
    a.click();
  };
  return (
    <header className={styles['header']} ref={headerRef}>
      <div className={styles['header-left']}>
        <div
          className={styles['back']}
          onClick={() => {
            navigator(-1);
          }}
        >
          <LeftOutlined />
        </div>

        <div
          className={styles['next']}
          onClick={() => {
            navigator(+1);
          }}
        >
          <RightOutlined />
        </div>

        <span className={styles['header-title']} ref={headerSpan} onClick={() => exitBtn()}>
          CQUPT2022 考研预测
        </span>
        <button
          onClick={() => {
            navigator('/leader');
          }}
        >
          查看导师信息
        </button>
      </div>

      {location.pathname === '/' ? (
        <div className={styles['change-btn']} onClick={() => changeBtn()}>
          切换账号
          <SwapOutlined />
        </div>
      ) : null}
      <div className={styles['user-box']} style={{ display: location.pathname === '/' ? 'none' : 'flex' }}>
        <div className={styles['my-info']} onClick={() => navigator('/student/mine')}>
          {
            // 老师页面没有'我的详情'选择，否则跳转到了学生页面产生bug
            location.pathname.split('/')[1] === 'student' && (
              <span style={{ color: '#fff' }}>
                {' '}
                <UserOutlined /> 我的实时详情
              </span>
            )
          }
        </div>
        <span>{user?.name}</span>
        <div className={styles['exit-btn']} ref={headerDiv} onClick={() => exitBtn()}></div>
      </div>
    </header>
  );
};

export default Header;
