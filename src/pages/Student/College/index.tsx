import React from 'react';
import { useQuery } from 'react-query';
import Header from './Header';
import CollegeRank from './CollegeRank';
import StudyExperience from './StudyExperience';
import StudyProcess from './StudyProcess';
import StudyTime from './StudyTime';
import { getCompare, getPredict } from 'api/student';
import type { IPredict, IComparison } from 'types/college';
import styles from './index.module.less';

const College = () => {
  const { data: predictData } = useQuery<IPredict>('predict', getPredict);
  const { data: comparisonData } = useQuery<IComparison>('predict', getCompare);

  return (
    <div className={styles['container']}>
      <Header />
      {predictData && <CollegeRank data={predictData as IPredict} />}
      {comparisonData && (
        <>
          <StudyTime />
          <StudyProcess />
        </>
      )}
      {/* <StudyExperience /> */}
      <footer />
    </div>
  );
};
export default College;
