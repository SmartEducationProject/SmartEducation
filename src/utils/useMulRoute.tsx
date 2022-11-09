import React, { useEffect } from 'react';
import { RouteTypes } from 'types/route';
import { Route } from 'react-router-dom';
import AuthRoute from '@/router/AuthRoute';

/**
 *
 * @param route
 * @returns 递归返回子路由组件，处理多级路由的情况
 */

export default function useMulRoute(route: RouteTypes) {
  useEffect(() => {
    console.log(route.path);
  }, []);
  return (
    <>
      {(route.children as Array<RouteTypes>).map((item: RouteTypes) => {
        const { key, path, ...otherProps } = item;
        return (
          <Route key={key} path={path} element={<AuthRoute {...item}>{route.element}</AuthRoute>}>
            {item.children ? useMulRoute(item) : null}
          </Route>
        );
      })}
    </>
  );
}
