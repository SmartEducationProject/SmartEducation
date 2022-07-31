import guard from '@/router/routeGuard';
import React, { FunctionComponent, useEffect } from 'react';
import { Outlet, Route, Routes, useLocation, useNavigate } from 'react-router-dom';

const Students: FunctionComponent = () => {
  let navigator = useNavigate();
  let { pathname } = useLocation();
  /**
   * 此处根据loccation.pathname来进行路由守卫，防止用户直接跳转到此页面
   * 如果用户直接跳转道学生页面，首先会判断有没有studentInfo，如果没有，则会跳转到首页
   */
  useEffect(() => {
    if (guard(pathname) === false) {
      sessionStorage.clear();
      navigator('/');
    }
  }, []);
  return (
    <div>
      <Outlet />
    </div>
  );
};
export default Students;
