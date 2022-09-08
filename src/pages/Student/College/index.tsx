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
import useCqupt from '@/utils/useCqupt';

const College = () => {
  const isCqupt = useCqupt();
  const { data: predictData } = useQuery<IPredict>('predict', getPredict);
  const { data: comparisonData } = useQuery<IComparison>('compare', () => getCompare(isCqupt));

  return (
    <div className={styles['container']}>
      <Header />
      <main>
        {predictData && <CollegeRank data={predictData as IPredict} />}
        {comparisonData && (
          <>
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
