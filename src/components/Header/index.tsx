import React, { useEffect, useRef } from 'react';
import styles from './index.module.less';
import { useLocation } from 'react-router-dom';
const Header = () => {
  let location = useLocation();
  let headerRef = useRef<HTMLElement | null>(null);
  let headerSpan = useRef<HTMLElement | null>(null);
  let headerDiv = useRef<HTMLImageElement | null>(null);
  useEffect(() => {
    if (location.pathname === '/' || location.pathname === '/student' || location.pathname === '/student/questionnaire') {
      headerRef.current?.classList.remove(styles['header-white']);
      headerRef.current?.classList.add(styles['header-green']);
      // headerSpan.current?.classList.remove(styles['span-green']);
      // headerSpan.current?.classList.add(styles['span-white']);
      // headerDiv.current?.classList.remove(styles['div-green']);
      // headerDiv.current?.classList.add(styles['div-white']);
    } else {
      headerRef.current?.classList.remove(styles['header-green']);
      headerRef.current?.classList.add(styles['header-white']);
      // headerSpan.current?.classList.remove(styles['span-white']);
      // headerSpan.current?.classList.add(styles['span-green']);
      // headerDiv.current?.classList.remove(styles['div-white']);
      // headerDiv.current?.classList.add(styles['div-green']);
    }
  }, [location.pathname]);
  return (
    <header className={styles['header']} ref={headerRef}>
      <span ref={headerSpan}>CQUPT2022考研预测</span>
      <div className={styles['exit-btn']} ref={headerDiv}></div>
    </header>
  );
};

export default Header;
