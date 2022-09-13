import React, { FunctionComponent, useEffect } from 'react';
import guard from 'router/routeGuard';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

const Students: FunctionComponent = () => {
  const navigator = useNavigate();
  const { pathname } = useLocation();

  /**
   * @description 此处根据location.pathname来进行路由守卫，防止用户直接跳转到此页面
   * @description 如果用户直接跳转道学生页面，首先会判断有没有studentInfo，如果没有，则会跳转到首页
   */
  useEffect(() => {
    if (guard(pathname) === false) {
      localStorage.clear();
      navigator('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <Outlet />;
};
export default Students;
