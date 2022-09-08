import React, { FunctionComponent } from 'react';
import { Outlet } from 'react-router-dom';
const Teacher: FunctionComponent = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};
export default Teacher;
