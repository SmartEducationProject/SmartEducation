import React from 'react';
import styles from './index.module.less';
import leftStudentImg from 'assets/pic/student/college-student-left.png';
import rightStudentImg from 'assets/pic/student/college-student-right.png';
import type { IOtherCollegeExperience } from 'types/college';

interface ExperienceBoxProps {
  student: IOtherCollegeExperience;
  isRight: boolean;
}

const ExperienceBox: React.FC<ExperienceBoxProps> = ({ student, isRight }) => {
  return (
    <div className={styles['experience-box-container']}>
      <img className={styles[isRight ? 'right-student' : 'left-student']} src={isRight ? rightStudentImg : leftStudentImg} />
      <div className={styles[isRight ? 'right-dialog-box' : 'left-dialog-box']}>
        <article>
          <h3 className={styles['orange-word']}>
            {student.name}（{student.college}）
          </h3>
          {student.experience.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
          {student.teacher.length > 0 && (
            <p>
              <span className={styles['orange-word']}>推荐老师：</span> {student.teacher?.join('、')}
            </p>
          )}
          {student.source.length > 0 && (
            <p>
              <span className={styles['orange-word']}>推荐资源：</span> {student.source?.join('、')}
            </p>
          )}
        </article>
      </div>
    </div>
  );
};

export default ExperienceBox;
