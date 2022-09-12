import React from 'react';
import styles from './index.module.less';
import iconImg from 'assets/pic/student/college-study-experience.png';
import useCqupt from '@/utils/useCqupt';
import { ICquptExperience, IOtherCollegeExperience } from '@/types/college';
import ExperienceBox from '@/components/ExperienceBox';

interface StudyExperienceProps {
  data: IOtherCollegeExperience[] | ICquptExperience[];
}

const StudyExperience: React.FC<StudyExperienceProps> = ({ data }) => {
  const isCqupt = useCqupt();

  return (
    <main className={styles['college-experience']}>
      <header>
        <h2>学长学姐经验</h2>
        <img src={iconImg} />
      </header>
      <main>
        {data.map((student, index) => (
          <ExperienceBox student={student} isRight={!!(index % 2)} isCqupt={isCqupt} key={student.name} />
        ))}
      </main>
    </main>
  );
};

export default StudyExperience;
