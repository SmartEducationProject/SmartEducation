import React from 'react';
import styles from './index.module.less';
import { useNavigate } from 'react-router-dom';
import studentPic from '../../../../assets/pic/student/student.png';
import { useExperience } from 'api/student';

export default function () {
  const navigate = useNavigate();

  const { data: experiences } = useExperience(true);

  return (
    <>
      <h3>
        以下是上岸<span style={{ color: '#e85b1d' }}>xx</span>经验分享，请查收！
      </h3>
      {experiences?.map((p, i) => (
        <div
          key={i}
          className={styles['box']}
          onClick={() =>
            navigate('/student/share/detail', {
              state: {
                experience: p
              }
            })
          }
        >
          <div>
            <img src={studentPic} alt={'student picture'} />
            <b>{p.name}</b>
          </div>
          <div>
            <p>
              <b>{p.college}</b>&nbsp;
            </p>
            <p>
              <b>学长/学姐寄语:</b> {p.experience}
            </p>
          </div>
        </div>
      ))}
    </>
  );
}
