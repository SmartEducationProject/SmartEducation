import React, { useEffect, useState } from 'react';
import { Person } from 'types/Share';
import studentPng from '../../../../assets/pic/student/college-student-right.png';
import styles from './index.module.less';
import studentPic from '../../../../assets/pic/student/student.png';

const mock: Person = {
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
};

export default function () {
  const [person, setPerson] = useState<Person>();

  useEffect(() => {
    setPerson(mock);
  }, []);

  return (
    <>
      <header className={styles['bar']}>
        <img src={studentPic} alt={'student picture'} />
        <div>
          <h2>{person?.name}</h2>
          <p>
            <b>{person?.type}</b>&nbsp;
            <b>本科专业：</b>
            {person?.originalMajor}&nbsp;
            <b>报考专业：</b>
            {person?.applyMajor}
          </p>
        </div>
        <img src={studentPng} alt={'student png'} />
      </header>

      <main>
        <p>考试科目：{person?.exam.map((subject) => subject)}</p>
        <p>总分：{person?.score}</p>
        <p>理论基础分数：{person?.theoryScore}</p>
        <p>{person?.word}</p>
      </main>
    </>
  );
}
