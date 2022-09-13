import React, { useEffect, useRef } from 'react';
import styles from './index.module.less';
import { useLocation, useNavigate } from 'react-router-dom';
const Header = () => {
  const navigator = useNavigate();
  const location = useLocation();
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
    navigator('/');
  };

  return (
    <header className={styles['header']} ref={headerRef}>
      <span ref={headerSpan} onClick={() => exitBtn()}>
        CQUPT2022考研预测
      </span>
      <div className={styles['exit-btn']} ref={headerDiv} onClick={() => exitBtn()}></div>
    </header>
  );
};

export default Header;
