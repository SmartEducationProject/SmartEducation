import React, { FunctionComponent } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';

const Students: FunctionComponent = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};
export default Students;
