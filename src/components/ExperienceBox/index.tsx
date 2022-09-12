import React from 'react';
import styles from './index.module.less';
import leftStudentImg from 'assets/pic/student/college-student-left.png';
import rightStudentImg from 'assets/pic/student/college-student-right.png';
import type { ICquptExperience, IOtherCollegeExperience } from 'types/college';

interface ExperienceBoxProps {
  student: IOtherCollegeExperience | ICquptExperience;
  isRight: boolean;
  isCqupt: boolean;
}

const ExperienceBox: React.FC<ExperienceBoxProps> = ({ student, isRight, isCqupt }) => {
  const subjects = [
    ['math', '数学'],
    ['english', '英语'],
    ['politics', '政治'],
    ['professional', '专业课']
  ];

  return (
    <div className={styles['experience-box-container']}>
      {isCqupt ? (
        <>
          <img className={styles[isRight ? 'right-student' : 'left-student']} src={isRight ? rightStudentImg : leftStudentImg} />
          <div className={styles[isRight ? 'right-dialog-box' : 'left-dialog-box']}>
            <article>
              <h3 className={styles['orange-word']}>
                {student.name}（{student.college}）
              </h3>
              {subjects.map((subject) => (
                <div key={subject[0]}>
                  <h4 className={styles['orange-word']}>{subject[1]}</h4>
                  <p>{(student as ICquptExperience)[subject[0] as keyof ICquptExperience]}</p>
                </div>
              ))}
            </article>
          </div>
        </>
      ) : (
        <>
          <img className={styles[isRight ? 'right-student' : 'left-student']} src={isRight ? rightStudentImg : leftStudentImg} />
          <div className={styles[isRight ? 'right-dialog-box' : 'left-dialog-box']}>
            <article>
              <h3 className={styles['orange-word']}>
                {student.name}（{student.college}）
              </h3>
              <p>{(student as IOtherCollegeExperience).experience}</p>
              <p>
                <span className={styles['orange-word']}>推荐老师：</span> {(student as IOtherCollegeExperience).teacher?.join('、')}
              </p>
              <p>
                <span className={styles['orange-word']}>推荐资源：</span> {(student as IOtherCollegeExperience).source?.join('、')}
              </p>
            </article>
          </div>
        </>
      )}
    </div>
  );
};

export default ExperienceBox;
