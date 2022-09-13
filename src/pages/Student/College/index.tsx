import React from 'react';
import Header from './Header';
import CollegeRank from './CollegeRank';
import StudyExperience from './StudyExperience';
import StudyProcess from './StudyProcess';
import StudyTime from './StudyTime';
import { useCompare, useExperience, usePredict } from 'api/student';
import styles from './index.module.less';
import useCqupt from '@/utils/useCqupt';
import { IOtherCollegeExperience } from '@/types/college';

const College = () => {
  const isCqupt = useCqupt();
  const { data: predictData } = usePredict();
  const { data: comparisonData } = useCompare(isCqupt);
  const { data: experienceData } = useExperience(isCqupt);

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
