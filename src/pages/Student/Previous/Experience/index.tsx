import React from 'react';
import iconImg from 'assets/pic/student/college-study-experience.png';
import useCqupt from 'utils/useCqupt';
import ExperienceBox from 'components/ExperienceBox';
import PartHeader from 'components/PartHeader';
import type { ICquptExperience, IOtherCollegeExperience } from 'types/college';
import styles from './index.module.less';
import { useExperience } from 'api/student';

interface StudyExperienceProps {}

const Experience: React.FC<StudyExperienceProps> = () => {
  const { data: cquptData } = useExperience<ICquptExperience[]>(true);
  const { data: otherCollegeData } = useExperience<IOtherCollegeExperience[]>(false);
  let index = 0; /** @description 控制背景的朝向 */

  return (
    <div className={styles['container']}>
      <PartHeader title={'学长学姐经验'} icon={iconImg} />
      <main>
        {cquptData?.map((student) => (
          <ExperienceBox student={student} isRight={!!(index++ % 2)} isCqupt={true} key={student.name} />
        ))}
        {otherCollegeData?.map((student) => (
          <ExperienceBox student={student} isRight={!!(index++ % 2)} isCqupt={false} key={student.name} />
        ))}
      </main>
    </div>
  );
};

export default Experience;
