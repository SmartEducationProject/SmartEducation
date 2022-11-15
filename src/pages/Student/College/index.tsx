import React, { useEffect, useState } from 'react';
import hatImg from 'assets/pic/student/college-hat.png';

import { useNavigate } from 'react-router-dom';
import CollegeRank from './CollegeRank';
import StudyExperience from './StudyExperience';
import StudyProcess from './StudyProcess';
import StudyTime from './StudyTime';
import { useCompare, useExperience, usePredict } from 'api/student';
import styles from './index.module.less';
import useCqupt from '@/utils/useCqupt';
import { IOtherCollegeExperience } from '@/types/college';

import Loading from '@/components/Loading';

const College = () => {
  const isCqupt = useCqupt();
  const navigate = useNavigate();

  const { data: predictData } = usePredict();
  const { data: comparisonData } = useCompare(isCqupt);
  const { data: experienceData } = useExperience(isCqupt);
  let [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className={styles['container']}>
      <header className={styles['college-header']}>
        <img src={hatImg} className={styles['hat-img']} />
        <h5>
          以下是<span>{isCqupt ? '重庆邮电大学' : '其他院校'}</span>的考研数据，请查收！
        </h5>
      </header>

      {loading || !(predictData || comparisonData || experienceData) ? (
        <main>
          <Loading></Loading>
        </main>
      ) : (
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
      )}
      <footer />
    </div>
  );
};
export default College;
