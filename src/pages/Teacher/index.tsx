import React, { FunctionComponent } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
const Teacher: FunctionComponent = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};
export default Teacher;
