import React from 'react';
import { useQuery } from 'react-query';
import Header from './Header';
import CollegeRank from './CollegeRank';
import StudyExperience from './StudyExperience';
import StudyProcess from './StudyProcess';
import StudyTime from './StudyTime';
import { getPredict } from 'api/student';
import type { IPredict } from 'types/college';
import styles from './index.module.less';

const College = () => {
  const { data: predictData, isSuccess } = useQuery<IPredict>('predict', getPredict);

  return (
    <div className={styles['container']}>
      <Header />
      {isSuccess && <CollegeRank data={predictData as IPredict} />}
      <StudyTime />
      <StudyProcess />
      {/* <StudyExperience /> */}
      <footer />
    </div>
  );
};
export default College;
