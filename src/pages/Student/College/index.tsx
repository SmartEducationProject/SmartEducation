import React from 'react';
import Header from './Header';
import CollegeRank from './CollegeRank';
import StudyExperience from './StudyExperience';
import StudyProcess from './StudyProcess';
import StudyTime from './StudyTime';
import { useCompare, useExperience, usePredict } from 'api/student';
import styles from './index.module.less';

const College = () => {
  const { data: predictData } = usePredict();
  const { data: comparisonData } = useCompare();
  const { data: experienceData } = useExperience();

  return (
    <div className={styles['container']}>
      <Header />
      <main>
        {predictData && <CollegeRank data={predictData} />}
        {comparisonData && (
          <>
            <StudyTime data={comparisonData} />
            <StudyProcess data={comparisonData} />
          </>
        )}
        {experienceData && <StudyExperience data={experienceData} />}
      </main>
      <footer />
    </div>
  );
};
export default College;
