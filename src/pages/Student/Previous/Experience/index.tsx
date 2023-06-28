import React from 'react';
import iconImg from 'assets/pic/student/college-study-experience.png';
import useCqupt from 'utils/useCqupt';
import ExperienceBox from 'components/ExperienceBox';
import PartHeader from 'components/PartHeader';
import styles from './index.module.less';
import { useExperience } from 'api/student';

interface StudyExperienceProps {
  isTitleShow?: boolean;
}

const Experience: React.FC<StudyExperienceProps> = ({ isTitleShow = true }) => {
  const { data: cquptData } = useExperience(true);
  const { data: otherCollegeData } = useExperience(false);
  let index = 0; /** @description 控制背景的朝向 */

  return (
    <div className={styles['container']}>
      {isTitleShow ? <PartHeader title={'学长学姐经验'} icon={iconImg} /> : ''}
      <main>
        {cquptData?.map((student) => (
          <ExperienceBox student={student} isRight={!!(index++ % 2)} key={student.name} />
        ))}
        {otherCollegeData?.map((student) => (
          <ExperienceBox student={student} isRight={!!(index++ % 2)} key={student.name} />
        ))}
      </main>
    </div>
  );
};

export default Experience;
