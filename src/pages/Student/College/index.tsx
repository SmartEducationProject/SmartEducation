import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from './Header';
import styles from './index.module.less';
import StudyExperience from './StudyExperience';
import StudyProcess from './StudyProcess';
import StudyTime from './StudyTime';

const College = () => {
  return (
    <div className={styles['container']}>
      <Header />
      <StudyTime />
      <StudyProcess />
      <StudyExperience />
    </div>
  );
};
export default College;
