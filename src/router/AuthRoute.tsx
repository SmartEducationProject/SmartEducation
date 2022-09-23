import React from 'react';
import { RouteTypes } from 'types/route';
import { Navigate } from 'react-router-dom';

const AuthRoute = (props: RouteTypes) => {
  const useRole = localStorage.getItem('useRole');
  const info = JSON.parse(localStorage.getItem('info') as string);
  const { role, backUrl, element: Element, path } = props;

  if ((useRole && useRole.includes(role)) || role == '') {
    if (path === 'questionnaire') {
      const now = new Date();
      // const startTime = new Date('2022-09-27 20:50:25');
      // const endTime = new Date('2022-09-27 20:50:25');
      const startTime = new Date(info.startTime || 0);
      const endTime = new Date(info.endTime || 0);
      console.log(startTime, endTime, useRole);
      if (startTime < now && now < endTime) {
        return <Element />;
      } else {
        return <Navigate replace to={useRole?.includes('unPredict') ? '/student/welcome' : '/student/choice'}></Navigate>;
      }
    } else {
      return <Element />;
    }
  } else {
    return <Navigate replace to={backUrl}></Navigate>;
  }
};
export default AuthRoute;
