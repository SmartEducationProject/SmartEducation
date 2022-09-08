import React from 'react';
import Header from './Header';
import CollegeRank from './CollegeRank';
import StudyExperience from './StudyExperience';
import StudyProcess from './StudyProcess';
import StudyTime from './StudyTime';
import { useCompare, usePredict } from 'api/student';
import type { IPredict } from 'types/college';
import styles from './index.module.less';

const College = () => {
  const { data: predictData } = usePredict();
  const { data: comparisonData } = useCompare();

  return (
    <div className={styles['container']}>
      <Header />
      <main>
        {predictData && comparisonData && (
          <>
            <CollegeRank data={predictData as IPredict} />
            <StudyTime data={comparisonData} />
            <StudyProcess data={comparisonData} />
          </>
        )}
        {/* <StudyExperience /> */}
      </main>
      <footer />
    </div>
  );
};
export default College;
