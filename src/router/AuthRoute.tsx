// AuthRoute.js
// import React from 'react';
// import { Route, Redirect } from 'react-router-dom';

// function AuthRoute(props) {
//   const {
//     user: {
//       role: userRole
//     },
//     role: routeRole,
//     backUrl,
//     ...otherProps
//   } = props;

//   // 如果用户有权限，就渲染对应的路由
//   if (userRole && userRole.indexOf(routeRole) > -1) {
//     return <Route {...otherProps} />
//   } else {
//     // 如果没有权限，返回配置的默认路由
//     return <Redirect to={backUrl} />
//   }
// }

// export default AuthRoute;
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
