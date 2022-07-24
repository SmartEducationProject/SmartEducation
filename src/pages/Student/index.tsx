import React, { FunctionComponent } from 'react';
import { Route, Routes } from 'react-router-dom';
import router from 'router/student';

const Students: FunctionComponent = () => {
  return (
    <Routes>
      <Route>
        {router.map((item) => (
          <Route key={item.path} {...item} />
        ))}
      </Route>
    </Routes>
  );
};
export default Students;
