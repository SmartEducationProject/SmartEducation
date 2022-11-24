import React from 'react';
import studentPng from '../../../../assets/pic/student/college-student-right.png';
import styles from './index.module.less';
import studentPic from '../../../../assets/pic/student/student.png';
import { useLocation, useNavigate } from 'react-router-dom';
import { IOtherCollegeExperience } from 'types/college';

export default function () {
  const location = useLocation();
  const navigate = useNavigate();

  const experience: IOtherCollegeExperience = location.state.experience;

  return (
    <>
      <header className={styles['bar']} onClick={() => navigate(-1)}>
        <section>
          <img src={studentPic} alt={'student picture'} />
          <h2>{experience.name}</h2>&nbsp;
        </section>
        <div>
          <p>
            <b>{experience.college}</b>&nbsp;
          </p>
          <p>
            <b>推荐资源:</b>
            {experience.source.map((item) => ` ${item}`)}&nbsp;
          </p>
          <p>
            <b>推荐老师:</b>
            {experience.teacher.map((item) => ` ${item}`)}
          </p>
        </div>
        <img src={studentPng} alt={'student png'} />
      </header>

      <main>
        <p className={styles['experience']}>{experience.experience}</p>
      </main>
    </>
  );
}
