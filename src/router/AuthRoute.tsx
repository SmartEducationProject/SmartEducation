import React from 'react';
import { RouteTypes } from '@/types/route';
import { Navigate } from 'react-router-dom';
const AuthRoute = (props: RouteTypes) => {
  const useRole = localStorage.getItem('useRole');
  const { role, backUrl, element: Element } = props;
  if ((useRole && useRole.includes(role)) || role == '') {
    return <Element />;
  } else {
    return <Navigate replace to={backUrl}></Navigate>;
  }
};
export default AuthRoute;
