import React, { FunctionComponent } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Welcome from './Welcome';
import Questionare from './Questionare';
import styles from './index.module.less';

const Students: FunctionComponent = () => {
  return (
    <Routes>
      <Route path="welcome" element={<Welcome />} />
      <Route path="questionare" element={<Questionare />} />
      <Route path="*" element={<Navigate to="welcome" replace={true} />} />
    </Routes>
  );
};
export default Students;
