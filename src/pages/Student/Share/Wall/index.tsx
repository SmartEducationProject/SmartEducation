import React, { useEffect, useState } from 'react';
import styles from './index.module.less';
import { useNavigate } from 'react-router-dom';
import { Person } from 'types/Share';
import studentPic from '../../../../assets/pic/student/student.png';

const mock: Person[] = [
  {
    key: 0,
    name: '周星',
    applyCollege: '重庆邮电大学',
    originalMajor: '计算机科学与技术',
    type: '学硕',
    word: 'xxxxxxx',
    applyMajor: '计算机系',
    exam: ['政治', '英语', '理论基础', '专业基础'],
    score: 380,
    theoryScore: 129
  },
  {
    key: 1,
    name: '周一星',
    applyCollege: '重庆邮电大学',
    originalMajor: '计算机科学与技术',
    type: '学硕',
    word: 'xxxxxxx',
    applyMajor: '计算机系',
    exam: ['政治', '英语', '理论基础', '专业基础'],
    score: 380,
    theoryScore: 129
  }
];

export default function () {
  const navigate = useNavigate();

  const [persons, setPersons] = useState<Person[]>([]);

  useEffect(() => {
    setPersons(mock);
  }, []);

  return (
    <>
      <h3>
        以下是上岸<span style={{ color: '#e85b1d' }}>xx</span>经验分享，请查收！
      </h3>
      {persons.map((p) => (
        <div key={p.key} className={styles['box']} onClick={() => navigate('/student/share/detail')}>
          <div>
            <img src={studentPic} alt={'student picture'} />
            <b>{p.name}</b>
          </div>
          <div>
            <p>
              <b>{p.type}</b>&nbsp;
              <b>本科专业:</b>
              {p.originalMajor}&nbsp;
              <b>报考专业:</b>
              {p.applyMajor}&nbsp;
            </p>
            <p>
              <b>学长/学姐寄语:</b> {p.word}
            </p>
          </div>
        </div>
      ))}
    </>
  );
}
