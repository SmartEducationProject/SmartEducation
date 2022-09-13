import React from 'react';
import styles from './index.module.less';
import iconImg from 'assets/pic/student/college-study-experience.png';
import useCqupt from '@/utils/useCqupt';
import { IOtherCollegeExperience } from '@/types/college';
import ExperienceBox from '@/components/ExperienceBox';
import PartHeader from '@/components/PartHeader';

interface StudyExperienceProps {
  data: IOtherCollegeExperience[];
}

const StudyExperience: React.FC<StudyExperienceProps> = ({ data }) => {
  return (
    <main className={styles['college-experience']}>
      <PartHeader title="学长学姐经验" icon={iconImg} />
      <main>
        {data.map((student, index) => (
          <ExperienceBox student={student} isRight={!!(index % 2)} key={student.name} />
        ))}
      </main>
    </main>
  );
};

export default StudyExperience;
