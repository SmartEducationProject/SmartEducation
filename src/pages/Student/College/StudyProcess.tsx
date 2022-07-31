import React from 'react';
import styles from './index.module.less';
import PieDoughnut from '@/components/ProcessPieDoughnut';
import { IComparison, Process } from 'types/college';
import iconImg from 'assets/pic/student/college-study-process.png';

interface StudyProcessProps {
  data: IComparison;
}

const StudyProcess: React.FC<StudyProcessProps> = ({ data }) => {
  const math = data.process.find((item) => item.content === '数学一轮复习结束时间') as Process;
  const dataStructure = data.process.find((item) => item.content === '数据结构') as Process;
  const network = data.process.find((item) => item.content === '计算机网络') as Process;
  const english = data.process.find((item) => item.content === '英语复习开始时间') as Process;

  return (
    <div className={styles['college-process']}>
      <header>
        <h2>学习进度</h2>
        <img src={iconImg} />
      </header>

      <main>
        <div className={styles['pie-box']}>
          <PieDoughnut index={0} subject="数学" month={math.student} />
          <PieDoughnut index={1} subject="英语" month={english.student} />
          {/* <PieDoughnut index={2} subject="政治" month={math.student}  /> */}
          <PieDoughnut index={2} subject="专业课">
            <p>数据结构开始复习的月份:{dataStructure.student}</p>
            <p>计网开始复习的月份:{network.student}</p>
          </PieDoughnut>
        </div>
        <div className={styles['sentence-box']}>{data.suggestion}</div>
      </main>
    </div>
  );
};

export default StudyProcess;
