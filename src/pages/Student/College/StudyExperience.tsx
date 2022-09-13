import React from 'react';
import styles from './index.module.less';
import iconImg from 'assets/pic/student/college-study-experience.png';
import leftStudentImg from 'assets/pic/student/college-student-left.png';
import rightStudentImg from 'assets/pic/student/college-student-right.png';
import useCqupt from '@/utils/useCqupt';
import { ICquptExperience, IOtherCollegeExperience } from '@/types/college';

interface StudyExperienceProps {
  data: IOtherCollegeExperience[] | ICquptExperience[];
}

const StudyExperience: React.FC<StudyExperienceProps> = ({ data }) => {
  const isCqupt = useCqupt();
  const subjects = [
    ['math', '数学'],
    ['english', '英语'],
    ['politics', '政治'],
    ['professional', '专业课']
  ];
  console.log(data);

  return (
    <main className={styles['college-experience']}>
      <header>
        <h2>学长学姐经验</h2>
        <img src={iconImg} />
      </header>
      <main>
        {isCqupt
          ? (data as ICquptExperience[])?.map((student, index) => (
              <div key={index}>
                <img className={styles[index % 2 ? 'right-student' : 'left-student']} src={index % 2 ? rightStudentImg : leftStudentImg} />
                <div className={styles[index % 2 ? 'right-dialog-box' : 'left-dialog-box']}>
                  <article>
                    <h3 className={styles['orange-word']}>
                      {student.name}（{student.college}）
                    </h3>
                    {subjects.map((subject) => (
                      <>
                        <h4 className={styles['orange-word']}>{subject[1]}</h4>
                        <p>{student[subject[0] as keyof ICquptExperience]}</p>
                      </>
                    ))}
                  </article>
                </div>
              </div>
            ))
          : (data as IOtherCollegeExperience[])?.map((student, index) => (
              <div key={index}>
                <img className={styles[index % 2 ? 'right-student' : 'left-student']} src={index % 2 ? rightStudentImg : leftStudentImg} />
                <div className={styles[index % 2 ? 'right-dialog-box' : 'left-dialog-box']}>
                  <article>
                    <h3 className={styles['orange-word']}>
                      {student.name}（{student.college}）
                    </h3>
                    <p>{student.experience}</p>
                    <p>
                      <span className={styles['orange-word']}>推荐老师：</span> {student.teacher?.join('、')}
                    </p>
                    <p>
                      <span className={styles['orange-word']}>推荐资源：</span> {student.source?.join('、')}
                    </p>
                  </article>
                </div>
              </div>
            ))}
      </main>
    </main>
  );
};

export default StudyExperience;
